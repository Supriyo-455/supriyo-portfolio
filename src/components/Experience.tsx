import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "IBM",
      role: "Automation Engineer",
      duration: "Oct 2023 - Present",
      location: "Bhubaneswar, India",
      type: "Full-time",
      description: [
        "Developed and maintained enterprise automation solutions using Worksoft Certify",
        "Collaborated with cross-functional teams to implement SAP automation frameworks",
        "Optimized testing processes, reducing manual effort by 60%",
      ],
      technologies: ["Worksoft Certify", "SAP", "Enterprise Automation", "Azure DevOps", "Batch Scripting"]
    },
    {
      company: "Zospital",
      role: "Android Developer Intern",
      duration: "Jun 2023 - Aug 2023",
      location: "Remote",
      type: "Internship",
      description: [
        "Built Android applications using Kotlin and modern Android development practices",
        "Integrated Firebase services for real-time data synchronization",
        "Implemented user authentication and data persistence solutions",
        "Collaborated with design team to create intuitive user interfaces"
      ],
      technologies: ["Kotlin", "Android Studio", "Firebase", "Material Design"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through automation engineering and software development
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-card border-0">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl md:text-2xl text-foreground">{exp.role}</CardTitle>
                      <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge variant="outline" className="w-fit bg-primary/10 text-primary border-primary/20">
                      {exp.type}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;