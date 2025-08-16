import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "React.js", level: 95, category: "Frontend" },
    { name: "Next.js", level: 90, category: "Frontend" },
    { name: "TypeScript", level: 88, category: "Language" },
    { name: "JavaScript (ES6+)", level: 92, category: "Language" },
    { name: "HTML5", level: 95, category: "Markup" },
    { name: "CSS3", level: 90, category: "Styling" },
    { name: "GSAP", level: 80, category: "Animation" },
    { name: "Mantine UI", level: 85, category: "UI Library" },
    { name: "Angular", level: 75, category: "Frontend" },
    { name: "Node.js", level: 78, category: "Backend" },
    { name: "Express.js", level: 75, category: "Backend" },
    { name: "Git & GitHub", level: 88, category: "Tools" },
  ];

  const categories = [
    { name: "Frontend", color: "from-primary to-primary-glow" },
    { name: "Language", color: "from-secondary to-secondary-glow" },
    { name: "Styling", color: "from-accent to-accent-glow" },
    { name: "Tools", color: "from-muted to-foreground" },
    { name: "Backend", color: "from-secondary to-primary" },
    { name: "UI Library", color: "from-accent to-secondary" },
    { name: "Animation", color: "from-primary to-accent" },
    { name: "Markup", color: "from-accent to-primary" },
  ];

  const getCategoryColor = (category: string) => {
    return categories.find(c => c.name === category)?.color || "from-primary to-secondary";
  };

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="section-title text-gradient">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="section-subtitle">
              A comprehensive toolkit of modern technologies that I use to build exceptional web experiences
            </p>
          </div>

          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                className="enhanced-card p-6 rounded-2xl group hover:shadow-glow transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {skill.name}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)} text-background font-medium`}>
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: index * 0.05 + 0.5 }}
                    className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center enhanced-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-muted-foreground">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of web development. 
              Currently diving deeper into advanced React patterns, performance optimization, and modern animation libraries.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;