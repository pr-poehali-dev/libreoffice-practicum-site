import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-light-purple/20 pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <Icon
              name="Laptop"
              className="mx-auto text-primary mb-4"
              size={80}
            />
          </div>

          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-dark-purple mb-6">
            Компьютерный практикум
            <span className="block text-primary mt-2">LibreOffice</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Изучайте офисные приложения через теорию и практические лабораторные
            работы
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("theory")}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Icon name="BookOpen" size={20} />
              Изучить теорию
            </button>

            <button
              onClick={() => scrollToSection("labs")}
              className="bg-white hover:bg-gray-50 text-primary border-2 border-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Icon name="FlaskConical" size={20} />
              Лабораторные работы
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Icon
              name="FileText"
              className="text-primary mb-4 mx-auto"
              size={48}
            />
            <h3 className="font-montserrat font-semibold text-lg mb-2">
              Writer
            </h3>
            <p className="text-gray-600">
              Текстовый редактор для создания документов
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Icon
              name="BarChart3"
              className="text-primary mb-4 mx-auto"
              size={48}
            />
            <h3 className="font-montserrat font-semibold text-lg mb-2">Calc</h3>
            <p className="text-gray-600">Электронные таблицы и вычисления</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Icon
              name="Presentation"
              className="text-primary mb-4 mx-auto"
              size={48}
            />
            <h3 className="font-montserrat font-semibold text-lg mb-2">
              Impress
            </h3>
            <p className="text-gray-600">Создание презентаций и слайдов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
