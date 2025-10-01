import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Bot, Calendar, Monitor } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MongoDB Performance Monitor",
      description: "Comprehensive monitoring solution for MongoDB clusters with real-time performance metrics, alerting system, and automated optimization suggestions. Includes custom dashboards and historical trend analysis.",
      technologies: ["MongoDB", "Python", "Redis", "Shell Script", "Grafana"],
      icon: Monitor,
      features: [
        "Real-time performance monitoring",
        "Automated alert system",
        "Performance optimization recommendations",
        "Custom dashboard creation"
      ],
      status: "Personal Project"
    },
    {
      title: "Database Backup Automation",
      description: "Intelligent backup orchestration system that manages multi-database backups across different environments. Features automated scheduling, compression, encryption, and cloud storage integration.",
      technologies: ["Python", "Shell Script", "MSSQL", "MongoDB", "Cloud Storage"],
      icon: Database,
      features: [
        "Multi-database support",
        "Automated scheduling",
        "Compression & encryption",
        "Cloud storage integration"
      ],
      status: "Production"
    },
    {
      title: "SQL Query Optimization Bot",
      description: "AI-powered bot that analyzes SQL queries and provides optimization suggestions. Integrates with existing development workflows and provides detailed performance impact analysis.",
      technologies: ["Python", "T-SQL", "Machine Learning", "REST API"],
      icon: Bot,
      features: [
        "Query performance analysis",
        "Optimization recommendations",
        "Integration with dev workflows",
        "Performance impact metrics"
      ],
      status: "Beta"
    },
    {
      title: "Database Migration Scheduler",
      description: "Enterprise-grade migration tool for seamless database transitions with minimal downtime. Features rollback capabilities, data validation, and comprehensive migration reports.",
      technologies: ["Python", "MongoDB", "MSSQL", "Docker", "Jenkins"],
      icon: Calendar,
      features: [
        "Zero-downtime migrations",
        "Automated rollback system",
        "Data validation checks",
        "Comprehensive reporting"
      ],
      status: "In Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-primary text-primary-foreground";
      case "Beta": return "bg-accent text-accent-foreground";
      case "In Development": return "bg-secondary text-secondary-foreground";
      case "Personal Project": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative database solutions and automation tools that drive efficiency and reliability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge className={`${getStatusColor(project.status)} text-xs mt-1`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-card-gradient border-accent/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new solutions and improvements. Check out my GitHub for the latest updates and contributions to open-source projects.
              </p>
              <a
                href="https://github.com/Shukla2520/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;