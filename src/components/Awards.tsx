import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Award, Calendar } from 'lucide-react';

const Awards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="awards" className="py-20 px-6 bg-background">
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
              Recognition & Awards
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Acknowledgment of excellence and dedication in frontend development and team collaboration.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-accent rounded-full opacity-20"
              ></motion.div>

              <div className="relative z-10 text-center">
                {/* Trophy Animation */}
                <motion.div
                  initial={{ scale: 0, rotateY: 0 }}
                  animate={inView ? { scale: 1, rotateY: 360 } : { scale: 0, rotateY: 0 }}
                  transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
                  className="w-24 h-24 mx-auto mb-6 relative"
                >
                  <div className="w-full h-full bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                    <Trophy className="w-12 h-12 text-primary-foreground" />
                  </div>
                  
                  {/* Floating stars */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? {
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: [0, Math.cos(i * 60 * Math.PI / 180) * 60],
                        y: [0, Math.sin(i * 60 * Math.PI / 180) * 60],
                      } : {}}
                      transition={{
                        duration: 2,
                        delay: 1 + i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <Star className="w-4 h-4 text-accent fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="space-y-4"
                >
                  <h3 className="text-3xl font-bold text-foreground mb-2">
                    Top Talent Award 2022
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>December 2022</span>
                    <span className="mx-2">•</span>
                    <Award className="w-4 h-4" />
                    <span>Electronikmedia</span>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    Recognized for exceptional performance, innovative problem-solving, and outstanding contribution 
                    to frontend development projects. This award acknowledges dedication to code quality, 
                    user experience excellence, and collaborative team leadership.
                  </p>
                </motion.div>

                {/* Achievement Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">2.5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Additional Recognition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-accent-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Team Player Excellence</h4>
              <p className="text-sm text-muted-foreground">
                Consistently praised for collaborative spirit and knowledge sharing with team members.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Innovation Recognition</h4>
              <p className="text-sm text-muted-foreground">
                Acknowledged for implementing creative solutions and modern development practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;