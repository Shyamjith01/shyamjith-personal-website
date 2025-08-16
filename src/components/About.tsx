import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const highlights = [
    {
      icon: Code,
      title: "2+ Years Experience",
      description: "Frontend development with modern frameworks",
    },
    {
      icon: Award,
      title: "Top Talent Award 2022",
      description: "Recognition for exceptional performance",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimized applications and user experiences",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Cross-functional team experience",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Crafting Digital Experiences with Precision
              </h3>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With <span className="text-primary font-semibold">2 years and 9 months</span> of 
                  dedicated experience in frontend development, I specialize in creating intuitive, 
                  performant web applications using React.js, Next.js, and modern TypeScript.
                </p>
                
                <p>
                  My expertise spans from building complex UI components with Mantine UI to 
                  developing sophisticated booking engine systems for the travel and tourism industry. 
                  I'm passionate about translating design concepts into pixel-perfect, 
                  responsive interfaces.
                </p>
                
                <p>
                  Recognized with the <span className="text-accent font-semibold">Top Talent Award 2022</span>, 
                  I bring a unique blend of technical proficiency and creative problem-solving to 
                  every project.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-glow"
                >
                  <highlight.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;