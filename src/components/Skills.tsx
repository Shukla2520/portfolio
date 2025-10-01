import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: "Expert", icon: "🍃" },
        { name: "MSSQL", level: "Advanced", icon: "🗄️" },
        { name: "Redis", level: "Advanced", icon: "🔴" },
        { name: "Oracle", level: "Intermediate", icon: "📋" }
      ]
    },
    {
      title: "Programming & Scripting",
      skills: [
        { name: "Python", level: "Advanced", icon: "🐍" },
        { name: "Shell Scripting", level: "Advanced", icon: "⚡" },
        { name: "SQL", level: "Expert", icon: "📊" },
        { name: "C++", level: "Intermediate", icon: "🟨" }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Linux", level: "Advanced", icon: "🐧" },
        { name: "Docker", level: "Learning", icon: "🐳" },
        { name: "Git", level: "Advanced", icon: "📋" },
        { name: "CI/CD", level: "Learning", icon: "🔄" }
      ]
    },
    {
      title: "Specializations",
      skills: [
        { name: "Database Optimization", level: "Expert", icon: "⚡" },
        { name: "Automation Scripts", level: "Expert", icon: "🤖" },
        { name: "Monitoring Tools", level: "Advanced", icon: "📈" },
        { name: "Backup Strategies", level: "Expert", icon: "💾" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-primary text-primary-foreground";
      case "Advanced": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-secondary text-secondary-foreground";
      case "Learning": return "bg-muted text-muted-foreground border border-border";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 bg-tech-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern database management and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-all duration-300 hover:scale-102 group/skill"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <Badge 
                        className={`${getLevelColor(skill.level)} text-xs font-medium px-2 py-1 transition-all duration-300 hover:scale-105`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning & Growth section */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="bg-card-gradient border-accent/30 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Continuous Learning</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Currently expanding my expertise in DevOps practices, cloud platforms, and modern automation frameworks to stay ahead in the evolving database landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Kubernetes", "AWS", "Terraform", "Prometheus", "Grafana", "Ansible","Apache Kafka"].map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="text-accent border-accent/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;