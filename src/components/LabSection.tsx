import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const LabSection = () => {
  const labWorks = [
    {
      id: 1,
      title: "Лабораторная работа №1",
      subtitle: "Основы Writer",
      description:
        "Создание и форматирование текстового документа, работа со стилями",
      difficulty: "Начальный",
      duration: "60 мин",
      icon: "FileEdit",
      status: "coming-soon",
    },
    {
      id: 2,
      title: "Лабораторная работа №2",
      subtitle: "Работа с таблицами Calc",
      description: "Создание электронных таблиц, формулы и диаграммы",
      difficulty: "Средний",
      duration: "90 мин",
      icon: "Table",
      status: "coming-soon",
    },
    {
      id: 3,
      title: "Лабораторная работа №3",
      subtitle: "Презентации Impress",
      description: "Создание интерактивных презентаций с анимацией",
      difficulty: "Средний",
      duration: "75 мин",
      icon: "Monitor",
      status: "coming-soon",
    },
    {
      id: 4,
      title: "Лабораторная работа №4",
      subtitle: "Интеграция приложений",
      description: "Совместное использование Writer, Calc и Impress",
      difficulty: "Продвинутый",
      duration: "120 мин",
      icon: "Link",
      status: "coming-soon",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Начальный":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Продвинутый":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="labs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-dark-purple mb-4">
            Лабораторные работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Практические задания для закрепления теоретических знаний
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {labWorks.map((lab, index) => (
            <Card
              key={lab.id}
              className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon
                        name={lab.icon as any}
                        className="text-primary"
                        size={24}
                      />
                    </div>
                    <div>
                      <CardTitle className="font-montserrat text-lg">
                        {lab.title}
                      </CardTitle>
                      <p className="text-primary font-medium">{lab.subtitle}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Скоро
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {lab.description}
                </CardDescription>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge className={getDifficultyColor(lab.difficulty)}>
                      {lab.difficulty}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {lab.duration}
                    </span>
                  </div>
                  <Icon name="ArrowRight" className="text-primary" size={20} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-light-purple/10 rounded-2xl p-8 text-center">
          <Icon
            name="FlaskConical"
            className="mx-auto text-primary mb-4"
            size={56}
          />
          <h3 className="font-montserrat font-semibold text-2xl mb-4">
            Лабораторные работы готовятся
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
            Пришлите материалы для лабораторных работ, и я создам интерактивные
            практические задания с пошаговыми инструкциями и проверкой
            результатов
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-medium">
            <Icon name="Rocket" size={20} />
            <span>Готов добавить ваши лабораторные работы!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;
