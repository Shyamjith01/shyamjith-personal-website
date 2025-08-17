import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { handleDownloadCV } from '@/lib/utils';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Method 1: Using EmailJS (Recommended for frontend-only solutions)
  const handleSubmitWithEmailJS = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // You need to install emailjs: npm install @emailjs/browser
      // import emailjs from '@emailjs/browser';

      const emailjs = (await import('@emailjs/browser')).default;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'shyaaamjith@gmail.com', // Your email
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Method 2: Using your own backend API
  const handleSubmitWithAPI = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Method 3: Using Netlify Forms (if deployed on Netlify)
  const handleSubmitWithNetlify = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Shyamjith01", color: "hover:text-foreground" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shyam-jith-aa5015229/", color: "hover:text-primary" },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "shyaaamjith@gmail.com", href: "mailto:shyaaamjith@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9400326351", href: "tel:+919400326351" },
    { icon: MapPin, label: "Location", value: "Malappuram,Kerala", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Send me a message
                </h3>

                {/* For Netlify Forms, add these attributes to the form */}
                <form
                  onSubmit={handleSubmitWithEmailJS} // Change this based on your chosen method
                  className="space-y-6"
                  name="contact" // For Netlify
                  method="POST" // For Netlify
                  data-netlify="true" // For Netlify
                >
                  {/* Hidden field for Netlify */}
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-start">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2 text-start">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 text-start">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2 text-start">
                    <label className="text-sm font-medium text-foreground text-start">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get in touch
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground text-start">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <h3 className="text-xl mt-10 font-semibold text-foreground mb-6 text-start">
                  Follow me
                </h3>

                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      onClick={() => window.open(social.href, "_blank")}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>

                <Button
                  size="lg"
                  onClick={() => handleDownloadCV()}
                  className="w-full bg-gradient-accent hover:shadow-neon transition-all duration-300 mt-9"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;