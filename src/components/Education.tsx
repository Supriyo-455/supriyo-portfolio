import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electrical Engineering",
      institution: "Academy of Technology",
      location: "Bandel, West Bengal",
      duration: "2019 - 2023",
      grade: "CGPA: 9.2/10",
      type: "Bachelor's Degree",
      highlights: [
        "Specialized in Automation and Control Systems",
        "Completed projects in IoT and Embedded Systems",
        "Active member of Technical Society"
      ]
    },
    {
      degree: "Higher Secondary",
      field: "Science (PCM)",
      institution: "Uttarpara Govt. High School",
      location: "Uttarpara, West Bengal", 
      duration: "2017 - 2019",
      grade: "Percentage: 80%",
      type: "High School",
      highlights: [
        "Mathematics and Physics Excellence",
        "Computer Science Foundation",
        "School Programming Club Leader"
      ]
    }
  ];

  const certifications = [
    {
      name: "Worksoft Certify",
      issuer: "Worksoft Inc.",
      year: "2024",
      type: "Professional Certification"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon",
      year: "2025",
      type: "Cloud Certification"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional certifications that shaped my engineering journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Education Section */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-card border-0">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center">
                        <GraduationCap className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 bg-primary/10 text-primary border-primary/20">
                          {edu.type}
                        </Badge>
                        <CardTitle className="text-xl md:text-2xl text-foreground">{edu.degree}</CardTitle>
                        <p className="text-lg font-semibold text-primary">{edu.field}</p>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="outline" className="w-fit bg-accent/10 text-accent border-accent/20">
                        {edu.grade}
                      </Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <Card className="shadow-elegant bg-gradient-card border-0">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">Professional Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border/50 bg-background/50">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <Badge variant="secondary" className="text-xs">
                      {cert.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;