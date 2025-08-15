import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Создаем сайты,
            <span className="text-primary block">которые работают</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Профессиональная разработка веб-сайтов с фокусом на результат. 
            От лендингов до сложных интернет-магазинов.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Обсудить проект
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg"
              onClick={() => scrollToSection('portfolio')}
            >
              Портфолио
              <Icon name="Eye" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Быстро</h3>
              <p className="text-muted-foreground">От идеи до готового сайта за 2-3 недели</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Адаптивно</h3>
              <p className="text-muted-foreground">Идеально работает на всех устройствах</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Эффективно</h3>
              <p className="text-muted-foreground">Каждый элемент нацелен на конверсию</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;