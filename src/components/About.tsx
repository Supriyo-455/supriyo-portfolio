import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Smartphone, Brain } from "lucide-react";

const About = () => {
  const skills = {
    "Automation": {
      icon: <Zap className="h-5 w-5" />,
      items: ["Worksoft Certify", "SAP Automation", "Test Automation", "Enterprise Systems"]
    },
    "Programming": {
      icon: <Code className="h-5 w-5" />,
      items: ["C++", "Go", "Python", "Kotlin", "JavaScript", "TypeScript"]
    },
    "Mobile & IoT": {
      icon: <Smartphone className="h-5 w-5" />,
      items: ["Android Development", "ESP32", "Firebase", "IoT Systems"]
    },
    "AI & Algorithms": {
      icon: <Brain className="h-5 w-5" />,
      items: ["Machine Learning", "Raytracing", "Algorithm Design", "Game AI"]
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate engineer who bridges the gap between complex automation systems and intuitive user experiences. 
            With experience in enterprise automation at IBM and cutting-edge IoT projects, I love turning challenging 
            problems into elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(skills).map(([category, data]) => (
            <Card key={category} className="shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 bg-gradient-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white mb-3">
                  {data.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {data.items.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-elegant bg-gradient-card border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">1+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-accent mb-2">8+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
                <p className="text-muted-foreground">Technologies Learning</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;