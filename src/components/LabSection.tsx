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
      subtitle: "LibreOffice Writer - Текстовый процессор",
      description:
        "Освойте создание документов, работу со стилями, автозаменой, вставку таблиц и изображений. Экспорт в PDF и HTML.",
      difficulty: "Начальный",
      duration: "90 мин",
      icon: "FileEdit",
      status: "available",
      objectives: [
        "Создание и форматирование текстового документа",
        "Работа с мастерами и шаблонами",
        "Использование стилей и автозамены",
        "Вставка таблиц, изображений и диаграмм",
        "Экспорт в различные форматы (PDF, HTML, MediaWiki)",
      ],
    },
    {
      id: 2,
      title: "Лабораторная работа №2",
      subtitle: "LibreOffice Calc - Электронные таблицы",
      description:
        "Создание электронных таблиц, работа с формулами, функциями, построение диаграмм и анализ данных.",
      difficulty: "Средний",
      duration: "120 мин",
      icon: "Table",
      status: "available",
      objectives: [
        "Создание и форматирование электронных таблиц",
        "Работа с формулами и функциями",
        "Построение диаграмм и графиков",
        "Сортировка и фильтрация данных",
        "Создание сводных таблиц",
      ],
    },
    {
      id: 3,
      title: "Лабораторная работа №3",
      subtitle: "LibreOffice Impress - Презентации",
      description:
        "Создание интерактивных презентаций с анимацией, переходами, мультимедиа контентом и мастер-слайдами.",
      difficulty: "Средний",
      duration: "105 мин",
      icon: "Monitor",
      status: "available",
      objectives: [
        "Создание презентации с использованием шаблонов",
        "Работа с мастер-слайдами и макетами",
        "Добавление анимации и переходов",
        "Вставка мультимедиа контента",
        "Настройка показа презентации",
      ],
    },
    {
      id: 4,
      title: "Лабораторная работа №4",
      subtitle: "LibreOffice Draw - Векторная графика",
      description:
        "Создание векторных изображений, работа с 3D объектами, диаграммами и техническими чертежами.",
      difficulty: "Продвинутый",
      duration: "90 мин",
      icon: "Pen",
      status: "available",
      objectives: [
        "Создание векторных изображений и схем",
        "Работа с 3D объектами и эффектами",
        "Создание технических чертежей",
        "Работа со слоями и группировкой",
        "Экспорт в различные графические форматы",
      ],
    },
    {
      id: 5,
      title: "Лабораторная работа №5",
      subtitle: "LibreOffice Base - База данных",
      description:
        "Создание реляционных баз данных, работа с таблицами, запросами, формами и отчетами.",
      difficulty: "Продвинутый",
      duration: "135 мин",
      icon: "Database",
      status: "available",
      objectives: [
        "Создание структуры базы данных",
        "Работа с таблицами и связями",
        "Создание запросов и форм",
        "Генерация отчетов",
        "Импорт и экспорт данных",
      ],
    },
    {
      id: 6,
      title: "Лабораторная работа №6",
      subtitle: "Интеграция LibreOffice - Комплексный проект",
      description:
        "Совместное использование всех компонентов LibreOffice для создания комплексного документооборота.",
      difficulty: "Экспертный",
      duration: "150 мин",
      icon: "Link",
      status: "available",
      objectives: [
        "Интеграция Writer, Calc, Impress и Draw",
        "Создание комплексного отчета с данными из Calc",
        "Подготовка презентации с графиками и схемами",
        "Связывание объектов между приложениями",
        "Автоматизация процессов с помощью макросов",
      ],
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
      case "Экспертный":
        return "bg-purple-100 text-purple-800";
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
                    {lab.status === "available" ? "Доступно" : "Скоро"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Изучите основы LibreOffice Writer: настройка рабочего окна,
                  параметры страницы, создание документов с автотекстом и
                  автозаменой, проверка орфографии, сохранение в различных
                  форматах.
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
            name="BookOpen"
            className="mx-auto text-primary mb-4"
            size={56}
          />
          <h3 className="font-montserrat font-semibold text-2xl mb-4">
            Практические задания LibreOffice
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
            Изучите все компоненты пакета LibreOffice через практические
            задания. От базовой работы с текстом до создания комплексных
            проектов с интеграцией всех приложений.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-medium">
            <Icon name="Sparkles" size={20} />
            <span>6 детальных лабораторных работ готовы к изучению!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabSection;
