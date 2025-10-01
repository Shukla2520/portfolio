import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/anuragshukla2520",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Shukla2520/",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:anuragshukla915@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading mb-2">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Anurag Shukla
              </span>
            </h3>
            <p className="text-muted-foreground">
              Database Administrator | SQL Expert | Automation
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-12 h-12 bg-tech-gradient rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Anurag Shukla. All rights reserved. Built with passion for database excellence.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5 pointer-events-none" />
    </footer>
  );
};

export default Footer;