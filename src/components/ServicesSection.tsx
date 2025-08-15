import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      icon: 'Monitor',
      title: 'Лендинги',
      description: 'Продающие одностраничные сайты с высокой конверсией для вашего бизнеса'
    },
    {
      icon: 'ShoppingCart',
      title: 'Интернет-магазины',
      description: 'Полнофункциональные магазины с системой заказов и платежей'
    },
    {
      icon: 'Building2',
      title: 'Корпоративные сайты',
      description: 'Представительские сайты компаний с удобной системой управления'
    },
    {
      icon: 'Palette',
      title: 'Дизайн',
      description: 'Современный UI/UX дизайн, который превращает посетителей в клиентов'
    },
    {
      icon: 'Smartphone',
      title: 'Мобильная адаптация',
      description: 'Адаптивная верстка для идеального отображения на всех устройствах'
    },
    {
      icon: 'Search',
      title: 'SEO оптимизация',
      description: 'Настройка для поисковых систем и быстрая загрузка страниц'
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки от идеи до запуска и дальнейшего сопровождения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;