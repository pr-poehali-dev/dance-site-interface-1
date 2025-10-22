import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const danceStyles = [
    {
      title: "Хип-Хоп",
      description: "Энергичный уличный стиль с динамичными движениями и импровизацией",
      icon: "Zap",
    },
    {
      title: "Современные танцы",
      description: "Свобода самовыражения через пластичные и выразительные движения",
      icon: "Sparkles",
    },
    {
      title: "Бальные танцы",
      description: "Элегантность и грация в классических и латиноамериканских танцах",
      icon: "Heart",
    },
  ];

  const scheduleData = [
    { day: "Понедельник", time: "18:00 - 19:30", style: "Хип-Хоп" },
    { day: "Среда", time: "19:00 - 20:30", style: "Современные танцы" },
    { day: "Пятница", time: "17:00 - 18:30", style: "Бальные танцы" },
    { day: "Суббота", time: "11:00 - 12:30", style: "Хип-Хоп" },
  ];

  const prices = [
    { name: "Разовое занятие", price: "800₽", features: ["1 занятие", "Любое направление"] },
    { name: "Абонемент 8 занятий", price: "5600₽", features: ["8 занятий", "1 месяц", "Скидка 12%"], popular: true },
    { name: "Абонемент 12 занятий", price: "7200₽", features: ["12 занятий", "1.5 месяца", "Скидка 25%"] },
  ];

  const faqData = [
    {
      question: "Нужна ли специальная подготовка?",
      answer: "Нет! Мы принимаем всех желающих, независимо от уровня подготовки. Наши опытные преподаватели помогут вам освоить танцевальные движения с нуля.",
    },
    {
      question: "Какая форма одежды нужна для занятий?",
      answer: "Рекомендуем удобную спортивную одежду и кроссовки с хорошей амортизацией. Для бальных танцев понадобится специальная обувь, но на первых занятиях можно в обычных.",
    },
    {
      question: "Можно ли посетить пробное занятие?",
      answer: "Да! Первое пробное занятие совершенно бесплатно. Вы сможете познакомиться с преподавателем, оценить атмосферу и выбрать подходящее направление.",
    },
    {
      question: "Сколько человек в группе?",
      answer: "В наших группах занимается от 8 до 12 человек. Это оптимальное количество для того, чтобы преподаватель мог уделить внимание каждому ученику.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">DANCE</span>
              </div>
              <span className="text-xl font-bold">DANCE SCHOOL</span>
            </div>
            <div className="hidden md:flex gap-6 items-center">
              <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection("styles")} className="hover:text-primary transition-colors">Направления</button>
              <button onClick={() => scrollToSection("schedule")} className="hover:text-primary transition-colors">Расписание</button>
              <button onClick={() => scrollToSection("prices")} className="hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection("contacts")} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection("contacts")} className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
              Танцуй с энергией
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Раскрой свой потенциал в хип-хопе, современных и бальных танцах
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" onClick={() => scrollToSection("contacts")} className="bg-primary hover:bg-primary/90 text-lg px-8">
                Бесплатное занятие
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("styles")} className="text-lg px-8">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground mb-6">
              DANCE SCHOOL — это современная школа танцев, где каждый найдёт своё направление. 
              Мы специализируемся на трёх ключевых стилях: уличный хип-хоп, выразительные современные танцы 
              и элегантные бальные танцы.
            </p>
            <p className="text-lg text-muted-foreground">
              Наши опытные преподаватели создают атмосферу, где каждый ученик может раскрыть свой потенциал, 
              независимо от возраста и уровня подготовки.
            </p>
          </div>
        </div>
      </section>

      <section id="styles" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Танцевальные направления</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {danceStyles.map((style, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg hover:scale-105 duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name={style.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{style.title}</CardTitle>
                  <CardDescription className="text-base">{style.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" onClick={() => scrollToSection("contacts")}>
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Расписание</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {scheduleData.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-200">
                        <Icon name="Calendar" className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{item.day}</h3>
                        <p className="text-muted-foreground">{item.style}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <Icon name="Clock" size={20} />
                      {item.time}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Цены и акции</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Первое занятие — бесплатно! 🎉</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((price, index) => (
              <Card key={index} className={`relative ${price.popular ? 'border-primary border-2 shadow-lg scale-105' : ''}`}>
                {price.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{price.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mt-4">{price.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${price.popular ? 'bg-primary hover:bg-primary/90' : ''}`} variant={price.popular ? 'default' : 'outline'} onClick={() => scrollToSection("contacts")}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Запишитесь на бесплатное пробное занятие</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="font-semibold">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold">info@danceschool.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Адрес</p>
                      <p className="font-semibold">г. Москва, ул. Танцевальная, д. 1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-primary to-secondary text-white">
                <CardHeader>
                  <CardTitle className="text-white">Начните танцевать уже сегодня!</CardTitle>
                  <CardDescription className="text-white/90">Первое занятие — бесплатно</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-white/95">
                    Приходите на бесплатное пробное занятие и убедитесь, что танцы — это весело, энергично и доступно каждому!
                  </p>
                  <Button size="lg" variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                    Записаться на занятие
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">DANCE</span>
                </div>
                <span className="text-xl font-bold">DANCE SCHOOL</span>
              </div>
              <p className="text-white/70">
                Танцевальная школа для всех, кто хочет раскрыть свой потенциал
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection("home")} className="block hover:text-primary transition-colors">Главная</button>
                <button onClick={() => scrollToSection("styles")} className="block hover:text-primary transition-colors">Направления</button>
                <button onClick={() => scrollToSection("schedule")} className="block hover:text-primary transition-colors">Расписание</button>
                <button onClick={() => scrollToSection("prices")} className="block hover:text-primary transition-colors">Цены</button>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-white/70">
                <p>+7 (999) 123-45-67</p>
                <p>info@danceschool.ru</p>
                <p>г. Москва, ул. Танцевальная, д. 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>© 2024 DANCE SCHOOL. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;