import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TheorySection = () => {
  const theoryTopics = [
    {
      id: 1,
      title: "Введение в LibreOffice",
      description:
        "LibreOffice — это бесплатный, открытый офисный пакет для работы с документами, таблицами, презентациями и другими задачами. Разработан как альтернатива Microsoft Office, но без лицензионных платежей. Включает шесть основных приложений, интегрированных в единую среду.",
      icon: "Info",
      color: "bg-blue-100 text-blue-600",
      details:
        "Офисный пакет отличается от OpenOffice интерфейсом, хотя функционал практически идентичен. LibreOffice работает быстрее, чем Apache OpenOffice и чуть лучше совместим с Microsoft Office. Разрабатывается с 2010 года.",
    },
    {
      id: 2,
      title: "LibreOffice Writer",
      description:
        "Текстовый редактор, который поддерживает все необходимые функции для работы с документами",
      icon: "FileText",
      color: "bg-green-100 text-green-600",
      details:
        "Основные возможности: настройка стиля текста, использование изображений в документе, колонки, таблицы, разделы, автопроверка орфографии.",
    },
    {
      id: 3,
      title: "LibreOffice Calc",
      description:
        "Многофункциональный инструмент для построения таблиц с интегрированными вычислительными функциями и возможностями визуализации данных",
      icon: "Calculator",
      color: "bg-purple-100 text-purple-600",
      details:
        "Программа обладает обширным набором функций, охватывающих как математические операции, так и проведение финансовых расчётов. Включает возможности создания диаграмм.",
    },
    {
      id: 4,
      title: "LibreOffice Impress",
      description:
        "Программа для создания презентаций, схожая с Microsoft PowerPoint",
      icon: "Presentation",
      color: "bg-orange-100 text-orange-600",
      details:
        "Пользователь может выбрать из предложенных стилей оформления презентации или разработать собственный уникальный стиль. Позволяет создавать отдельные слайды с различным содержанием.",
    },
    {
      id: 5,
      title: "LibreOffice Draw",
      description:
        "Векторный графический редактор для создания несложных плакатов с использованием стандартного набора инструментов",
      icon: "Palette",
      color: "bg-pink-100 text-pink-600",
      details:
        "Каждый объект в Draw может быть преобразован в трехмерное изображение. Предназначен для создания графических материалов и диаграмм.",
    },
    {
      id: 6,
      title: "LibreOffice Base & Math",
      description:
        "Система управления базами данных Base и приложение для работы с математическими формулами Math",
      icon: "Database",
      color: "bg-yellow-100 text-yellow-600",
      details:
        "Base обеспечивает работу с базами данных, а Math позволяет создавать и редактировать математические формулы для документов.",
    },
  ];

  return (
    <section id="theory" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-dark-purple mb-4">
            Теоретические материалы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Изучите основы работы с LibreOffice через структурированные
            материалы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {theoryTopics.map((topic, index) => (
            <Card
              key={topic.id}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg ${topic.color} flex items-center justify-center mb-4`}
                >
                  <Icon name={topic.icon as any} size={24} />
                </div>
                <CardTitle className="font-montserrat text-xl">
                  {topic.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {topic.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {topic.details}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium text-primary">
                    Изучить подробнее
                  </span>
                  <Icon name="ArrowRight" className="text-primary" size={20} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-light-purple/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <Icon
              name="Upload"
              className="mx-auto text-primary mb-4"
              size={48}
            />
            <h3 className="font-montserrat font-semibold text-xl mb-2">
              Полная теория LibreOffice
            </h3>
            <p className="text-gray-600 mb-4">
              LibreOffice способен выполнять функции коммерческих офисных
              пакетов как для личного, так и для профессионального использования
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium">
              <Icon name="BookOpen" size={16} />
              Готово к изучению
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheorySection;
