import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Smartphone, Monitor, Gamepad2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Underground Cable Fault Detection",
      category: "IoT System",
      icon: <Zap className="h-6 w-6" />,
      description: "ESP32-based IoT system for detecting and broadcasting underground cable fault locations over LAN networks. Features real-time monitoring and automated alerting.",
      technologies: ["ESP32", "C++", "IoT", "LAN", "Embedded Systems"],
      highlights: ["Real-time fault detection", "LAN broadcasting", "Automated alerts"],
      githubUrl: "https://github.com/Supriyo-455",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "RavTracer",
      category: "Graphics Engine",
      icon: <Monitor className="h-6 w-6" />,
      description: "Barebone raytracer implementation with custom math library and multi-threading support. Built from scratch using Win32 API for optimal performance.",
      technologies: ["C++", "Win32 API", "Multi-threading", "Graphics Programming"],
      highlights: ["Custom math library", "Multi-threaded rendering", "Win32 integration"],
      githubUrl: "https://github.com/Supriyo-455",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mintspace",
      category: "Backend Service",
      icon: <Monitor className="h-6 w-6" />,
      description: "High-performance backend service built with Go, featuring robust API design and efficient data processing capabilities.",
      technologies: ["Go", "REST API", "Backend Development", "Microservices"],
      highlights: ["High performance", "Scalable architecture", "REST API"],
      githubUrl: "https://github.com/Supriyo-455",
      demoUrl: "https://mintspace.demo",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Tic-Tac-Toe AI",
      category: "Game AI",
      icon: <Gamepad2 className="h-6 w-6" />,
      description: "Advanced Tic-Tac-Toe game with AI opponent using minimax algorithm and alpha-beta pruning for optimal gameplay decisions.",
      technologies: ["Python", "Minimax Algorithm", "Game AI", "Alpha-Beta Pruning"],
      highlights: ["Unbeatable AI", "Algorithm optimization", "Interactive UI"],
      githubUrl: "https://github.com/Supriyo-455",
      demoUrl: "https://tictactoe-ai.demo",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions spanning IoT, graphics programming, backend development, and AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group shadow-elegant hover:shadow-glow transition-all duration-500 transform hover:scale-[1.02] bg-gradient-card border-0 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center text-white`}>
                      {project.icon}
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 bg-primary/10 text-primary border-primary/20">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demoUrl && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-hero hover:opacity-90 transition-all duration-300"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;