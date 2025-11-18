import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-secondary">ПРОМПАРК "ВЯТКА"</h1>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О парке</a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
              <a href="#residents" className="text-foreground hover:text-primary transition-colors">Резиденты</a>
              <a href="#location" className="text-foreground hover:text-primary transition-colors">Расположение</a>
              <a href="#documents" className="text-foreground hover:text-primary transition-colors">Документы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              ПРОМЫШЛЕННЫЙ ПАРК "ВЯТКА"
            </h2>
            <p className="text-xl md:text-2xl mb-4 opacity-95">
              Земля под производство. В аренду и собственность.
            </p>
            <p className="text-lg opacity-90 mb-8">
              Благоприятные условия для реализации проектов.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <a href="#contact">Оставить заявку</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">О парке</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Индустриальный парк «Вятка» - это современная промышленная площадка для размещения 
              эффективных высокотехнологичных производств в различных отраслях промышленности.
            </p>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-secondary">Приоритетные направления:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Sprout" className="mb-4 text-primary" size={32} />
                    <h4 className="font-semibold text-lg mb-2">Биотехнологии в АПК</h4>
                    <p className="text-muted-foreground">Инновационные решения для агропромышленного комплекса</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="UtensilsCrossed" className="mb-4 text-primary" size={32} />
                    <h4 className="font-semibold text-lg mb-2">Производство продуктов питания</h4>
                    <p className="text-muted-foreground">Современные производственные мощности</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Wheat" className="mb-4 text-primary" size={32} />
                    <h4 className="font-semibold text-lg mb-2">Переработка сельхозпродукции</h4>
                    <p className="text-muted-foreground">Полный цикл переработки продукции</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon name="Cog" className="mb-4 text-primary" size={32} />
                    <h4 className="font-semibold text-lg mb-2">Сельхоз машиностроение</h4>
                    <p className="text-muted-foreground">Производство техники и оборудования</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary">Преимущества для резидентов</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Icon name="BadgePercent" className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-secondary">Льготы</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span><strong>0 руб.</strong> Бесплатное предоставление земли на период строительства</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span><strong>0,18 руб.</strong> Выкуп участка по льготной цене за кв.м.</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Освобождение от налога после выкупа участка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Icon name="Truck" className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-secondary">Транспорт</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="MapPin" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Федеральная трасса М7 "Волга" (Москва-Уфа)</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Plane" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Аэропорт "Бегишево" - 100 км</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Plane" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Аэропорт "Казань" - 170 км</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Ship" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Водный транспорт (Волга-Кама-Вятка)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Icon name="Plug" className="text-primary mr-3" size={32} />
                  <h3 className="text-2xl font-bold text-secondary">Коммуникации</h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <Icon name="Zap" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Электроэнергия - 9 МВт</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Flame" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Газ - 4,7 тыс. м³/час</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Droplet" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Водоснабжение - 40 м³/час</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Network" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Связь, интернет, видеонаблюдение</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary/5 border-primary/30">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Icon name="Building2" className="text-primary mr-3" size={32} />
                <h3 className="text-2xl font-bold text-secondary">Управляющая компания</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Девелоперские услуги</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Эксплуатационно-инженерные услуги</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Предоставление коммунальных услуг</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Вывоз мусора, утилизация отходов</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Уборка помещений</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" className="text-primary mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>Строительство под ключ</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="residents" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-secondary">Наши резиденты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center h-16">
                  <Icon name="Car" className="text-primary" size={48} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">ООО «ТИС»</h3>
                <p className="text-sm text-muted-foreground mb-2">Производство автомобильных деталей</p>
                <p className="text-xs text-muted-foreground">Площадь: 900 м²</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center h-16">
                  <Icon name="Mountain" className="text-primary" size={48} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">ООО «ЯСАТ»</h3>
                <p className="text-sm text-muted-foreground mb-2">Переработка мрамора и гранита</p>
                <p className="text-xs text-muted-foreground">Площадь: 1 200 м²</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center h-16">
                  <Icon name="Package" className="text-primary" size={48} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">ООО «ЭКСПЕДИШН»</h3>
                <p className="text-sm text-muted-foreground mb-2">Производство добавок для кормов</p>
                <p className="text-xs text-muted-foreground">Площадь: 2,4 Га</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center h-16">
                  <Icon name="Factory" className="text-primary" size={48} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-center">ИП Ахметшин Р.Р.</h3>
                <p className="text-sm text-muted-foreground mb-2">Производство пластмассовых изделий</p>
                <p className="text-xs text-muted-foreground">Площадь: 0,43 Га</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="location" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Расположение</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-secondary">Адрес и координаты</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Icon name="MapPin" className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-medium">Адрес:</p>
                        <p className="text-muted-foreground">Кировская область, трасса М7</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Navigation" className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-medium">Координаты:</p>
                        <p className="text-muted-foreground">58.6036° N, 49.6681° E</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Car" className="text-primary mr-3 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <p className="font-medium">Как добраться:</p>
                        <p className="text-muted-foreground">По федеральной трассе М7 "Волга"</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t">
                    <h4 className="font-semibold mb-4">Расстояния до крупных городов:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between">
                        <span>Москва</span>
                        <span className="font-medium">~900 км</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Казань</span>
                        <span className="font-medium">~200 км</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Киров</span>
                        <span className="font-medium">~15 км</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Нижний Новгород</span>
                        <span className="font-medium">~400 км</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="h-full">
                <CardContent className="p-0 h-full min-h-[500px]">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=49.668100%2C58.603600&z=12&l=map&pt=49.668100,58.603600,pm2rdm"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    className="rounded-lg min-h-[500px]"
                    title="Карта расположения промпарка Вятка"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-secondary">Документы и предложения</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="FileText" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">Коммерческое предложение</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Подробная информация об условиях аренды и выкупа земельных участков
                </p>
                <Button className="w-full" variant="outline">
                  <Icon name="Download" className="mr-2" size={18} />
                  Скачать КП (PDF)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="Map" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">Генеральный план</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Схема территории с разметкой участков и инфраструктуры
                </p>
                <Button className="w-full" variant="outline">
                  <Icon name="Download" className="mr-2" size={18} />
                  Скачать план (PDF)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="ScrollText" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">Презентация парка</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Полная информация о возможностях и преимуществах промпарка
                </p>
                <Button className="w-full" variant="outline">
                  <Icon name="Download" className="mr-2" size={18} />
                  Скачать презентацию (PDF)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Icon name="Scale" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold">Нормативная база</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Положения и регламенты работы индустриального парка
                </p>
                <Button className="w-full" variant="outline">
                  <Icon name="Download" className="mr-2" size={18} />
                  Скачать документы (ZIP)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Контакты</h2>
            <p className="text-center mb-12 text-white/90">Оставьте заявку, и мы свяжемся с вами в ближайшее время</p>
            
            <Card className="bg-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Имя</label>
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 font-semibold">Индустриальный парк «Вятка»</p>
          <p className="text-sm text-white/80">Создавая условия для эффективного производства</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;