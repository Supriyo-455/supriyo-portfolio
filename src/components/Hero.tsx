import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white animate-fade-in">
          <Badge variant="outline" className="mb-6 border-white/30 bg-white/10 text-white hover:bg-white/20">
            Available for Opportunities
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-foreground bg-clip-text text-transparent">
            Supriyo Paul
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-foreground/90">
            Automation Engineer & Full-Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80 leading-relaxed">
            Passionate about building innovative solutions through automation, IoT systems, 
            and modern web technologies. Experienced in enterprise automation and cutting-edge development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 h-4 w-4" />
              paulsupriyo64nk@gmail.com
            </Button>
            
            <div className="flex gap-3">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://github.com/Supriyo-455" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="https://linkedin.com/in/supriyopaul455" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {["Worksoft Certify", "Kotlin", "Go", "C++", "Python", "SAP", "Firebase", "IoT", "Android Development"].map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;