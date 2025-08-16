import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <img
              src={profileImage}
              alt="Shyamjith Shivashankaran"
              className="w-full h-full rounded-full object-cover border-4 border-primary/50 shadow-glow transition-all duration-500 hover:shadow-neon hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse-glow"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Hi, I'm <span className="text-gradient">Shyamjith</span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground font-light">
              <span ref={typewriterRef} className="border-r-2 border-primary animate-blink"></span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating exceptional user experiences with modern web technologies. 
            2+ years crafting scalable applications and innovative UI solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-neon"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </Button>
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