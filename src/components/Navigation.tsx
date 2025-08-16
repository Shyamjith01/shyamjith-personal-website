import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Award, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: Briefcase, href: '#projects' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'awards', label: 'Awards', icon: Award, href: '#awards' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = section === 'home' ? document.body : document.getElementById(section);
        if (element) {
          const offsetTop = section === 'home' ? 0 : element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient cursor-pointer"
              onClick={() => scrollToSection('#')}
            >
              Shyamjith.dev
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className={`relative transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? '0%' : '100%',
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 50,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`flex items-center gap-4 text-2xl font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <item.icon className="w-6 h-6" />
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Action Button for Quick Contact (Desktop) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-40 hidden md:block"
      >
        <Button
          onClick={() => scrollToSection('#contact')}
          size="lg"
          className="rounded-full w-14 h-14 bg-gradient-primary shadow-glow hover:shadow-neon transition-all duration-300 hover:scale-110"
        >
          <Mail className="w-6 h-6" />
        </Button>
      </motion.div>
    </>
  );
};

export default Navigation;