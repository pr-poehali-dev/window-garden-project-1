import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [profile, setProfile] = useState('');
  const [glassType, setGlassType] = useState('');
  const [width, setWidth] = useState([140]);
  const [height, setHeight] = useState([140]);

  const calculatePrice = () => {
    const basePrice = 3500;
    const sizeMultiplier = (width[0] * height[0]) / 10000;
    const profileMultiplier = profile === 'rehau' ? 1.3 : profile === 'kbe' ? 1.2 : 1;
    const glassMultiplier = glassType === 'triple' ? 1.3 : glassType === 'double' ? 1.15 : 1;
    
    return Math.round(basePrice * sizeMultiplier * profileMultiplier * glassMultiplier);
  };

  const profiles = [
    {
      id: 1,
      name: 'REHAU',
      description: 'Немецкое качество',
      price: 'от 9 500 ₽',
      image: 'https://cdn.poehali.dev/projects/490bdef7-13a0-4c70-b8b7-2ee2ba245af9/files/15370200-dd9c-4f16-9aab-893b1b7eaa80.jpg',
      features: ['70 мм профиль', '5 камер', 'Энергосбережение класса А']
    },
    {
      id: 2,
      name: 'KBE',
      description: 'Надёжность и тепло',
      price: 'от 8 900 ₽',
      image: 'https://cdn.poehali.dev/projects/490bdef7-13a0-4c70-b8b7-2ee2ba245af9/files/15370200-dd9c-4f16-9aab-893b1b7eaa80.jpg',
      features: ['70 мм профиль', '5 камер', 'Шумоизоляция 42 дБ']
    },
    {
      id: 3,
      name: 'VEKA',
      description: 'Проверенная классика',
      price: 'от 8 200 ₽',
      image: 'https://cdn.poehali.dev/projects/490bdef7-13a0-4c70-b8b7-2ee2ba245af9/files/15370200-dd9c-4f16-9aab-893b1b7eaa80.jpg',
      features: ['58 мм профиль', '3 камеры', 'Оптимальная цена']
    }
  ];

  const services = [
    {
      title: 'Бесплатный замер',
      description: 'Выезд замерщика в удобное время',
      icon: 'Ruler'
    },
    {
      title: 'Монтаж за 1 день',
      description: 'Быстрая установка без грязи',
      icon: 'Clock'
    },
    {
      title: 'Гарантия 5 лет',
      description: 'На окна и монтажные работы',
      icon: 'Shield'
    },
    {
      title: 'Рассрочка 0%',
      description: 'До 12 месяцев без переплат',
      icon: 'CreditCard'
    }
  ];

  const reviews = [
    {
      name: 'Елена Соколова',
      text: 'Отличная работа! Поставили окна быстро, чисто, качественно. Замерщик приехал на следующий день. Рекомендую!',
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      text: 'Заказывали окна Rehau для всей квартиры. Очень довольны — тепло, тихо, красиво. Спасибо команде!',
      rating: 5
    },
    {
      name: 'Ольга Петрова',
      text: 'Понравились цены и сервис. Сделали всё под ключ, с отделкой откосов. Никаких проблем.',
      rating: 5
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
            {['home', 'catalog', 'calculator', 'reviews', 'contacts'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'catalog' && 'Профили'}
                {section === 'calculator' && 'Калькулятор'}
                {section === 'reviews' && 'Отзывы'}
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

      <section id="home" className="pt-24 pb-8 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 md:p-12 text-white mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <Badge className="bg-white text-primary hover:bg-white">Акция месяца!</Badge>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Окна от 8 200 ₽<br />со скидкой до 40%
                </h1>
                <p className="text-lg opacity-90">
                  Бесплатный замер, монтаж за 1 день, гарантия 5 лет. Успейте заказать по акции!
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button size="lg" variant="secondary" onClick={() => scrollToSection('calculator')}>
                    Рассчитать стоимость
                    <Icon name="Calculator" size={20} className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                    <Icon name="Phone" size={20} className="mr-2" />
                    8 (800) 555-35-35
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/490bdef7-13a0-4c70-b8b7-2ee2ba245af9/files/e5299484-8e18-48ca-80c4-1fbe9c9dd37a.jpg"
                  alt="Установка окон"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="text-center p-6 hover:shadow-lg transition-shadow border-2">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={service.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="font-bold mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Профильные системы</Badge>
            <h2 className="text-4xl font-bold mb-4">Качественные окна ПВХ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Работаем только с проверенными немецкими профилями — надёжность и долговечность гарантированы
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <Card key={profile.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-white p-6">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">{profile.name}</CardTitle>
                    <Badge className="text-base px-3 py-1">{profile.price}</Badge>
                  </div>
                  <p className="text-muted-foreground">{profile.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {profile.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg">Заказать окно</Button>
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
                <Label htmlFor="profile">Профиль</Label>
                <Select value={profile} onValueChange={setProfile}>
                  <SelectTrigger id="profile">
                    <SelectValue placeholder="Выберите профиль" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="veka">VEKA (от 8 200 ₽)</SelectItem>
                    <SelectItem value="kbe">KBE (от 8 900 ₽)</SelectItem>
                    <SelectItem value="rehau">REHAU (от 9 500 ₽)</SelectItem>
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

              {profile && glassType && (
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

      <section id="reviews" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы клиентов</Badge>
            <h2 className="text-4xl font-bold mb-4">Нам доверяют тысячи семей</h2>
            <p className="text-lg text-muted-foreground">
              Реальные отзывы наших клиентов о качестве окон и сервисе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">Клиент компании</p>
                  </div>
                </div>
              </Card>
            ))}
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
                    <a href="tel:88005553535" className="text-muted-foreground text-lg font-semibold hover:text-primary">8 (800) 555-35-35</a>
                    <p className="text-sm text-muted-foreground mt-1">Бесплатный звонок по России</p>
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
              <p className="text-sm text-gray-400 mb-4">
                Окна ПВХ с установкой под ключ
              </p>
              <Button className="w-full">
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать звонок
              </Button>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Профили</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>REHAU</li>
                <li>KBE</li>
                <li>VEKA</li>
                <li>Сравнение профилей</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Бесплатный замер</li>
                <li>Монтаж за 1 день</li>
                <li>Отделка откосов</li>
                <li>Гарантия 5 лет</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="text-primary font-semibold">8 (800) 555-35-35</li>
                <li>info@okonniy-dvor.ru</li>
                <li>г. Москва</li>
                <li>Пн-Вс: 9:00 - 21:00</li>
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
};

export default Index;