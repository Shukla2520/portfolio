import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          {/* Name and greeting */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Anurag Shukla
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground font-mono">
              <span className="text-primary">Database Administrator</span> | <span className="text-accent">SQL Expert</span> | <span className="text-accent">Automation</span>
            </div>
          </div>

          {/* Professional tagline */}
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-foreground/90">
            Transforming data chaos into structured excellence. 
            <span className="text-primary font-medium"> Database optimization</span> and 
            <span className="text-accent font-medium"> automation solutions</span> that drive business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              <Download className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;