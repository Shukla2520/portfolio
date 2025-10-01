import { Card, CardContent } from "@/components/ui/card";
import { Database, Code, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "Database Excellence",
      description: "Expert in MongoDB, MSSQL, and Redis with focus on performance optimization and scalability"
    },
    {
      icon: Code,
      title: "Automation Specialist", 
      description: "Python scripting and shell automation to streamline database operations and workflows"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Proven track record of improving database performance and reducing operational overhead"
    },
    {
      icon: Users,
      title: "DevOps Collaboration",
      description: "Bridging the gap between development and operations with modern DevOps practices"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio section */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                As a dedicated <span className="text-primary font-medium">Database Administrator</span>, I bring a unique blend of technical expertise and problem-solving skills to complex data challenges. My journey in database management has been driven by a passion for creating efficient, scalable solutions that power business success.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                With extensive experience in <span className="text-primary font-medium">MongoDB</span>, <span className="text-accent font-medium">MSSQL</span>, <span className="text-primary font-medium">Redis</span>, and <span className="text-accent font-medium">Python automation</span>, I specialize in transforming manual processes into streamlined, automated workflows. My current focus on expanding DevOps knowledge ensures I stay at the forefront of modern data operations.
              </p>

              <p className="text-lg leading-relaxed text-foreground/90">
                I believe in the power of <span className="text-primary font-medium">clean data architecture</span> and <span className="text-accent font-medium">intelligent automation</span> to solve real-world problems. Every project is an opportunity to create something better, more efficient, and more reliable.
              </p>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;