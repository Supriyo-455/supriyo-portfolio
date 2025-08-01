import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Smartphone, Brain } from "lucide-react";

const SkillsProgress = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "C++", level: 90 },
        { name: "Go", level: 85 },
        { name: "Python", level: 80 },
        { name: "Kotlin", level: 75 },
        { name: "JavaScript/TypeScript", level: 70 }
      ]
    },
    {
      title: "Automation & Tools",
      icon: <Zap className="h-5 w-5" />,
      skills: [
        { name: "Worksoft Certify", level: 95 },
        { name: "SAP Automation", level: 90 },
        { name: "Azure DevOps", level: 80 },
        { name: "Batch Scripting", level: 75 }
      ]
    },
    {
      title: "Mobile & IoT",
      icon: <Smartphone className="h-5 w-5" />,
      skills: [
        { name: "Android Development", level: 85 },
        { name: "ESP32", level: 80 },
        { name: "Firebase", level: 75 },
        { name: "IoT Systems", level: 70 }
      ]
    },
    {
      title: "AI & Algorithms",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Raytracing", level: 85 },
        { name: "Algorithm Design", level: 80 },
        { name: "Game AI", level: 70 }
      ]
    }
  ];

  const getLevelColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Proficiency
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A detailed breakdown of my technical skills and proficiency levels across different domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getLevelColor(skill.level).replace('bg-', 'border-').replace('500', '400')} ${getLevelColor(skill.level).replace('bg-', 'text-')}`}
                        >
                          {getLevelText(skill.level)}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{
                        '--progress-background': `hsl(var(--${getLevelColor(skill.level).includes('green') ? 'primary' : getLevelColor(skill.level).includes('blue') ? 'accent' : 'muted-foreground'}))`
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsProgress; 