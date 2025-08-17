import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.png';
import { handleDownloadCV } from '@/lib/utils';
import "../App.css"

const Hero = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const text = "Frontend Developer & UI Specialist";
    const element = typewriterRef.current;

    if (element) {
      let index = 0;
      element.textContent = '';

      const typeText = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeText, 100);
        }
      };

      setTimeout(typeText, 1500);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-5 justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-primary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-primary opacity-10 rounded-lg rotate-45 animate-pulse"></div>
      </div>

      <div className="relative for-mob-flexx z-10 text-center container-width">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse-glow"></div>
                <img
                  src={profileImage}
                  alt="Shyamjith Shivashankaran"
                  className="relative w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-glow transition-all duration-500 hover:shadow-neon hover:scale-105"
                />
                {/* Floating Ring */}
                <div className="absolute -inset-4 border-2 border-primary/20 rounded-full animate-float"></div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:text-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                    Hi, I'm <span className="text-gradient">Shyamjith</span>
                  </h1>
                  <div className="text-2xl lg:text-3xl text-muted-foreground font-light mb-6">
                    <span ref={typewriterRef} className="border-r-2 border-primary animate-blink"></span>
                  </div>
                </div>

                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Passionate about creating exceptional user experiences with modern web technologies.
                  3+ years crafting scalable applications and innovative UI solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                  <Button
                    size="lg"
                    onClick={()=>{
                      const element = document.getElementById('projects');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="group relative overflow-hidden bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-neon px-8"
                  >
                    <span className="relative z-10">View My Work</span>
                    <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>

                  <Button
                    size="lg"
                    onClick={() => handleDownloadCV()}
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8"
                  >
                    Download Resume
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;