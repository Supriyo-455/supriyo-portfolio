import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-elegant" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SP</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Supriyo Paul
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            
            <Button 
              size="sm" 
              variant="outline" 
              className="ml-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                size="sm" 
                variant="outline" 
                className="mt-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 