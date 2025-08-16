import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-foreground" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-primary" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-accent" },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "shyamjith.dev@email.com", href: "mailto:shyamjith.dev@email.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: MapPin, label: "Location", value: "India", href: "#" },
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
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
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
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Follow me
                </h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Download Resume
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get a detailed overview of my experience and skills.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-accent hover:shadow-neon transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;