import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Обсудим ваш проект
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение часа для обсуждения деталей
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Отправить заявку
              </h3>
              
              <form className="space-y-6">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email для связи" 
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Телефон (необязательно)" 
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте: цели, требования, примерный бюджет..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
                
                <Button className="w-full h-12 text-lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Контактная информация
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@webstudio.dev</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telegram</h4>
                    <p className="text-muted-foreground">@webstudio_dev</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Время работы
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Пн-Пт: 10:00 - 19:00</p>
                <p>Сб-Вс: 12:00 - 17:00</p>
                <p className="text-sm text-primary font-medium">
                  Заявки обрабатываем круглосуточно
                </p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Или напишите нам в социальных сетях:
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Telegram
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;