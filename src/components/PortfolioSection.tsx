import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Интернет-магазин электроники',
      category: 'E-commerce',
      description: 'Современный интернет-магазин с каталогом товаров, корзиной и системой платежей',
      image: '/api/placeholder/400/300',
      tech: ['React', 'TypeScript', 'Stripe']
    },
    {
      title: 'Корпоративный сайт IT-компании',
      category: 'Corporate',
      description: 'Представительский сайт с портфолио услуг и системой управления контентом',
      image: '/api/placeholder/400/300',
      tech: ['Next.js', 'CMS', 'SEO']
    },
    {
      title: 'Лендинг маркетингового агентства',
      category: 'Landing',
      description: 'Продающий одностраничник с формами заявок и аналитикой конверсий',
      image: '/api/placeholder/400/300',
      tech: ['Landing', 'Analytics', 'Forms']
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Портфолио
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Проекты, которыми мы гордимся и которые приносят результат нашим клиентам
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/40 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Globe" size={48} className="text-primary/60" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Посмотреть все проекты
            <Icon name="ExternalLink" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;