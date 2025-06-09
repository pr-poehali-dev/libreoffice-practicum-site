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
        "Основы работы с офисным пакетом, интерфейс и базовые функции",
      icon: "Info",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "LibreOffice Writer",
      description: "Работа с текстовыми документами, форматирование и стили",
      icon: "FileText",
      color: "bg-green-100 text-green-600",
    },
    {
      id: 3,
      title: "LibreOffice Calc",
      description: "Электронные таблицы, формулы и функции",
      icon: "Calculator",
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      title: "LibreOffice Impress",
      description: "Создание презентаций и мультимедийных материалов",
      icon: "Presentation",
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: 5,
      title: "Совместная работа",
      description: "Обмен документами и коллективная работа над проектами",
      icon: "Users",
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: 6,
      title: "Автоматизация",
      description: "Макросы и автоматизация рутинных задач",
      icon: "Zap",
      color: "bg-yellow-100 text-yellow-600",
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Готовится к добавлению
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
              Материалы в разработке
            </h3>
            <p className="text-gray-600 mb-4">
              Пришлите ваши теоретические материалы, и я добавлю их в
              соответствующие разделы
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium">
              <Icon name="MessageCircle" size={16} />
              Готов к загрузке контента
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheorySection;
