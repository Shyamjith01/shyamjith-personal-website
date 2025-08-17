import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  }); 

   

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Dealz B2C Travel Booking Engine",
      description:
        "End-to-end B2C booking platform for flights and hotels, including search, booking, and payment gateway integration. Currently working on transfer service module.",
      category: "booking",
      tech: ["Next.js", "TypeScript", "Mantine UI", "Node.js", "Express.js"],
      image: "/api/placeholder/500/300",
      demoUrl: "https://dealz.gewaninfotech.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Nexus Travel Portal",
      description:
        "Comprehensive corporate travel booking system with multi-level authentication, employee modules, and admin dashboards.",
      category: "booking",
      tech: ["React.js", "Next.js", "TypeScript", "Mantine UI"],
      image: "/api/placeholder/500/300",
      demoUrl: "https://nexusemployeeuiqa.gewaninfotech.com",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Gewan Infotech Website",
      description:
        "Corporate website for Gewan Infotech built with interactive UI and GSAP animations, highlighting services, case studies, and booking systems.",
      category: "animation",
      tech: ["Next.js", "GSAP", "TailwindCSS"],
      image: "/api/placeholder/500/300",
      demoUrl: "https://gewaninfotech.com/",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 7,
      title: "Evolve Event Booking Website (Freelance)",
      description:
        "Freelance project: Evolve 2025 event booking site for Brand Stories, featuring event details, ticketing, agenda, and interactive UI for EVOLVE 2025 leadership conference.",
      category: "animation",
      tech: ["Next.js", "TailwindCSS", "React.js"],
      image: "/api/placeholder/500/300",
      demoUrl: "https://www.brandstories.org.in/",
      githubUrl: "https://github.com/Shyamjith01/Evolve-frontend",
      featured: false,
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce project with product catalog, shopping cart, order management, and Stripe-based payments.",
      category: "web",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "/api/placeholder/500/300",
      demoUrl: "#",
      githubUrl: "https://github.com/Shyamjith01/E-commerce-shopiyCart",
      featured: false,
    },  
  ];


  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Booking Systems", value: "booking" }, 
    { label: "Web Applications", value: "web" },
    { label: "Animations", value: "animation" }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-background">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="section-subtitle">
              A showcase of my recent work spanning booking systems, UI libraries, and interactive web applications
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className={`transition-all duration-300 ${activeFilter === filter.value
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "border-primary/30 text-primary hover:bg-primary/10"
                  }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative ${project.featured ? 'md:col-span-2 xl:col-span-1' : ''}`}
              >
                <Card className="enhanced-card overflow-hidden h-full transition-all duration-500 hover:shadow-glow group">
                  <div className="relative h-48 bg-gradient-card overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/30">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        size="sm"
                        disabled={project.demoUrl === '#'}
                        onClick={()=>window.open(project.demoUrl)}
                        className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button> 
                      <Button
                      disabled={project.githubUrl === '#'}
                        size="sm"
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://github.com/Shyamjith01')}
              className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              View All Projects on GitHub
              <Github className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;