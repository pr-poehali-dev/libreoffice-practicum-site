import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="BookOpen" className="text-primary" size={28} />
            <span className="font-montserrat font-bold text-xl text-dark-purple">
              LibreOffice Практикум
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("theory")}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Теория
            </button>
            <button
              onClick={() => scrollToSection("labs")}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Лабораторные
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("theory")}
                className="text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                Теория
              </button>
              <button
                onClick={() => scrollToSection("labs")}
                className="text-left px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
              >
                Лабораторные работы
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
