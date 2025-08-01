import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "paulsupriyo64nk@gmail.com",
      link: "mailto:paulsupriyo64nk@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "Supriyo-455",
      link: "https://github.com/Supriyo-455",
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Supriyo Paul",
      link: "https://www.linkedin.com/in/supriyo-paul-39638b191/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Kolkata, India",
      link: null,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or just having a great conversation about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="shadow-elegant bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group">
                    {contact.link ? (
                      <a 
                        href={contact.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md bg-background/50 hover:bg-background"
                      >
                        <div className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          {contact.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">{contact.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-background/50">
                        <div className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center text-white`}>
                          {contact.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          <p className="font-medium text-foreground">{contact.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-elegant bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Let's Collaborate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking for an automation engineer, need help with a development project, 
                  or want to discuss the latest in IoT and technology, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-hero hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="mailto:paulsupriyo64nk@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Send me an email
                    </a>
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href="https://github.com/Supriyo-455" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href="https://linkedin.com/in/supriyopaul455" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Currently interested in:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Full-time roles", "Freelance projects", "Open source", "Tech discussions"].map((interest) => (
                      <Badge 
                        key={interest} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Built with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;