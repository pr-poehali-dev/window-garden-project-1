import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [windowType, setWindowType] = useState('');
  const [glassType, setGlassType] = useState('');
  const [width, setWidth] = useState([100]);
  const [height, setHeight] = useState([120]);

  const calculatePrice = () => {
    const basePrice = 5000;
    const sizeMultiplier = (width[0] * height[0]) / 10000;
    const typeMultiplier = windowType === 'premium' ? 1.5 : windowType === 'standard' ? 1.2 : 1;
    const glassMultiplier = glassType === 'triple' ? 1.4 : glassType === 'double' ? 1.2 : 1;
    
    return Math.round(basePrice * sizeMultiplier * typeMultiplier * glassMultiplier);
  };

  const windows = [
    {
      id: 1,
      name: 'Классическое окно',
      type: 'Одностворчатое',
      price: 'от 12 500 ₽',
      image: 'https://cdn.poehali.dev/projects/490bdef7-13a0-4c70-b8b7-2ee2ba245af9/files/245c2b69-a360-492d-88c6-a81b8a044bc2.jpg',
      features: ['Двухкамерный стеклопакет', 'Фурнитура Roto', 'Гарантия 10 лет']
    },
    {
      id: 2,
      name: 'Панорамное окно',
      type: 'Двухстворчатое',
      price: 'от 28 000 ₽',
      image: 'https://cdn.poehali.dev/projects/490bdef7-13a0-4c70-b8b7-2ee2ba245af9/files/245c2b69-a360-492d-88c6-a81b8a044bc2.jpg',
      features: ['Трёхкамерный стеклопакет', 'Энергосберегающее покрытие', 'Микропроветривание']
    },
    {
      id: 3,
      name: 'Балконный блок',
      type: 'С дверью',
      price: 'от 35 000 ₽',
      image: 'https://cdn.poehali.dev/projects/490bdef7-13a0-4c70-b8b7-2ee2ba245af9/files/245c2b69-a360-492d-88c6-a81b8a044bc2.jpg',
      features: ['Тёплый профиль', 'Противовзломная фурнитура', 'Шумоизоляция 42 дБ']
    }
  ];

  const services = [
    {
      title: 'Замер',
      description: 'Бесплатный выезд специалиста для точных замеров',
      icon: 'Ruler'
    },
    {
      title: 'Монтаж',
      description: 'Профессиональная установка с гарантией качества',
      icon: 'Hammer'
    },
    {
      title: 'Отделка откосов',
      description: 'Чистовая отделка внутренних и наружных откосов',
      icon: 'PaintBucket'
    },
    {
      title: 'Демонтаж',
      description: 'Аккуратный демонтаж старых конструкций',
      icon: 'Trash2'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Home" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold">Первый Оконный Двор</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {['home', 'catalog', 'calculator', 'services', 'about', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'catalog' && 'Каталог'}
                {section === 'calculator' && 'Калькулятор'}
                {section === 'services' && 'Услуги'}
                {section === 'about' && 'О компании'}
                {section === 'contacts' && 'Контакты'}
              </button>
            ))}
          </nav>

          <Button className="hidden md:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="text-sm">Премиальные окна для вашего дома</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Окна, которые меняют пространство
              </h1>
              <p className="text-xl text-muted-foreground">
                Создаём комфорт и уют в каждом доме. Немецкое качество, российские цены. Гарантия 10 лет.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('calculator')}>
                  Рассчитать стоимость
                  <Icon name="Calculator" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('catalog')}>
                  Смотреть каталог
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10 лет</div>
                  <div className="text-sm text-muted-foreground">гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/490bdef7-13a0-4c70-b8b7-2ee2ba245af9/files/c856e5de-7a68-47c7-a326-5f600fe954b5.jpg"
                alt="Элегантный интерьер с окнами"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Каталог окон</Badge>
            <h2 className="text-4xl font-bold mb-4">Выберите идеальное окно</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент окон для любых потребностей — от классических до панорамных
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {windows.map((window) => (
              <Card key={window.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={window.image}
                  alt={window.name}
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{window.type}</Badge>
                    <span className="text-2xl font-bold text-primary">{window.price}</span>
                  </div>
                  <CardTitle>{window.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {window.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" size={16} className="text-primary mr-2 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">Заказать замер</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Калькулятор стоимости</Badge>
            <h2 className="text-4xl font-bold mb-4">Рассчитайте стоимость окна</h2>
            <p className="text-lg text-muted-foreground">
              Узнайте ориентировочную цену окна за 1 минуту
            </p>
          </div>

          <Card className="p-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="window-type">Тип окна</Label>
                <Select value={windowType} onValueChange={setWindowType}>
                  <SelectTrigger id="window-type">
                    <SelectValue placeholder="Выберите тип окна" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Эконом</SelectItem>
                    <SelectItem value="standard">Стандарт</SelectItem>
                    <SelectItem value="premium">Премиум</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="glass-type">Стеклопакет</Label>
                <Select value={glassType} onValueChange={setGlassType}>
                  <SelectTrigger id="glass-type">
                    <SelectValue placeholder="Выберите тип стеклопакета" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Однокамерный</SelectItem>
                    <SelectItem value="double">Двухкамерный</SelectItem>
                    <SelectItem value="triple">Трёхкамерный</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Ширина окна: {width[0]} см</Label>
                <Slider
                  value={width}
                  onValueChange={setWidth}
                  min={60}
                  max={300}
                  step={5}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Высота окна: {height[0]} см</Label>
                <Slider
                  value={height}
                  onValueChange={setHeight}
                  min={80}
                  max={250}
                  step={5}
                  className="w-full"
                />
              </div>

              {windowType && glassType && (
                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">Ориентировочная стоимость</div>
                  <div className="text-4xl font-bold text-primary mb-4">
                    {calculatePrice().toLocaleString('ru-RU')} ₽
                  </div>
                  <Button size="lg" className="w-full">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Получить точный расчёт
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Полный цикл работ</h2>
            <p className="text-lg text-muted-foreground">
              От замера до установки — всё под ключ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">О компании</Badge>
            <h2 className="text-4xl font-bold mb-4">Первый Оконный Двор</h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Мы работаем на рынке оконных конструкций более 15 лет. За это время мы установили окна 
              в более чем 5000 квартир и домов, заслужив репутацию надёжного партнёра.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Наша философия — премиальное качество по справедливой цене. Мы используем только 
              сертифицированные материалы от ведущих европейских производителей и предоставляем 
              расширенную гарантию на все виды работ.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center">
                <Icon name="Award" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Сертификаты качества</h3>
                <p className="text-sm text-muted-foreground">Все материалы сертифицированы</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Users" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Опытная команда</h3>
                <p className="text-sm text-muted-foreground">Монтажники с опытом 10+ лет</p>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Shield" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Гарантия 10 лет</h3>
                <p className="text-sm text-muted-foreground">На все виды работ и материалы</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады ответить на ваши вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Оставьте заявку</h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Input id="message" placeholder="Что вас интересует?" />
                </div>
                <Button className="w-full">
                  Отправить заявку
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@okonniy-dvor.ru</p>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Офис и выставка</h4>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                    <p className="text-sm text-muted-foreground mt-1">м. Примерная (5 минут пешком)</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Home" className="text-white" size={24} />
                </div>
                <span className="text-lg font-bold">Первый Оконный Двор</span>
              </div>
              <p className="text-sm text-gray-400">
                Премиальные окна для вашего комфорта
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Классические окна</li>
                <li>Панорамные окна</li>
                <li>Балконные блоки</li>
                <li>Входные двери</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Замер</li>
                <li>Установка окон</li>
                <li>Отделка откосов</li>
                <li>Демонтаж</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@okonniy-dvor.ru</li>
                <li>г. Москва, ул. Примерная, д. 1</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Первый Оконный Двор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}