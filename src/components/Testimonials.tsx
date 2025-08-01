import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, User } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Senior Manager",
      role: "IBM Automation Team",
      company: "IBM",
      content: "Supriyo has consistently demonstrated exceptional technical skills in automation engineering. His ability to optimize complex processes and reduce manual effort by 60% has been invaluable to our team.",
      rating: 5,
      avatar: "IB"
    },
    {
      name: "Developer",
      role: "Android Development",
      company: "Zospital",
      content: "During his internship, Supriyo showed remarkable proficiency in Kotlin and Android development. His integration of Firebase services and user authentication solutions exceeded our expectations.",
      rating: 5,
      avatar: "ZT"
    },
    {
      name: "Project Coordinator",
      role: "IoT Systems",
      company: "Academy of Technology",
      content: "Supriyo's underground cable fault detection project showcased innovative thinking and practical implementation skills. His ESP32-based solution demonstrated both technical expertise and real-world problem-solving.",
      rating: 5,
      avatar: "AT"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What People Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback and recommendations from colleagues and mentors
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <Badge variant="outline" className="mt-1 text-xs bg-primary/10 text-primary border-primary/20">
                        {testimonial.company}
                      </Badge>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-primary/30 group-hover:text-primary transition-colors" />
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16">
          <Card className="shadow-elegant bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                  <p className="text-muted-foreground">Task Completion</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent mb-2">60%</h3>
                  <p className="text-muted-foreground">Process Optimization</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                  <p className="text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent mb-2">5★</h3>
                  <p className="text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 