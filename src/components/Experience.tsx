import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      company: "Gewan Infotech",
      position: "Senior Frontend Developer",
      period: "2023 - Present",
      location: "Remote",
      description: "Leading frontend development for enterprise-level applications, specializing in React.js and TypeScript. Architecting scalable component libraries and implementing modern UI/UX patterns.",
      achievements: [
        "Architected and developed a comprehensive booking engine system",
        "Improved application performance by 40% through optimization techniques",
        "Mentored junior developers and established coding standards",
        "Implemented advanced GSAP animations for enhanced user experience"
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "GSAP", "Node.js"]
    },
    {
      id: 2,
      company: "Electronikmedia",
      position: "Frontend Developer",
      period: "2022 - 2023",
      location: "Hybrid",
      description: "Developed responsive web applications using React.js and modern CSS frameworks. Collaborated with design teams to translate mockups into pixel-perfect interfaces.",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Implemented Mantine UI component library across projects",
        "Received Top Talent Award 2022 for exceptional performance",
        "Reduced development time by 30% through reusable components"
      ],
      technologies: ["React.js", "Mantine UI", "CSS3", "JavaScript", "Angular"]
    },
    {
      id: 3,
      company: "Websoul Labs",
      position: "Junior Frontend Developer",
      period: "2021 - 2022",
      location: "On-site",
      description: "Started my journey in web development, focusing on HTML5, CSS3, and JavaScript fundamentals. Gained experience in version control and collaborative development.",
      achievements: [
        "Developed foundational skills in modern web technologies",
        "Contributed to 10+ client projects successfully",
        "Learned and implemented responsive design principles",
        "Collaborated effectively in agile development environment"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gradient-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Professional Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My career progression through different roles, showcasing growth from junior developer to senior frontend specialist.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30 md:left-1/2 md:transform md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 w-4 h-4 bg-gradient-primary rounded-full shadow-glow md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                    <div className="absolute inset-1 bg-primary rounded-full animate-pulse-glow"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-glow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;