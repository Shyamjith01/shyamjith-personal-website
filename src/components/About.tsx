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
    <section id="about" className="section-padding bg-background">
      <div className="container-width">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="section-title text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="section-subtitle">
              Crafting digital experiences with passion and precision
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
                Transforming Ideas into Digital Reality
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  With <span className="text-primary font-semibold">2 years and 9 months</span> of 
                  dedicated experience in frontend development, I specialize in creating intuitive, 
                  performant web applications using React.js, Next.js, and modern TypeScript.
                </p>
                
                <p>
                  My expertise spans from building complex UI components with Mantine UI to 
                  developing sophisticated booking engine systems for the travel and tourism industry. 
                  I'm passionate about translating design concepts into pixel-perfect, 
                  responsive interfaces that users love.
                </p>
                
                <p>
                  Recognized with the <span className="text-accent font-semibold">Top Talent Award 2022</span>, 
                  I bring a unique blend of technical proficiency and creative problem-solving to 
                  every project, ensuring both functionality and aesthetic excellence.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["React.js", "Next.js", "TypeScript", "GSAP", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-card border border-border rounded-lg text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="enhanced-card p-6 rounded-2xl transition-all duration-300 hover:shadow-glow group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-lg">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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