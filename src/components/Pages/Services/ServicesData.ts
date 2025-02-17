export interface ServicesData {
  id: number;
  about: string;
  description: string;
  photo: string;
}

export const ServicesData: ServicesData[] = [
  {
    id: 1,
    about: "Аренда звукового оборудования",
    description:
      "Без музыки ведь никуда? - Правильно! Поэтому, чтобы Ваше мероприятие оставило только положительные впечатления - необходимо хорошее звуковое оборудование",
    photo: "/src/images/ServicesImage/arenda-zvuka.jpg",
  },
  {
    id: 2,
    about: "Аренда светового оборудования",
    description:
      "Чтобы придать красок Вашему мероприятию - мы предлагаем воспользовать услугой аренды светового оборудования. Музыальное сопровождение в совокупности со световым обеспечит незабываемое впечатление от мероприятия",
    photo: "/src/images/ServicesImage/lights.jpg",
  },
  {
    id: 3,
    about: "Услуги ведущего и DJ",
    description:
      "На каждом мероприятии должен быть его голос, а его голос - это конечно же крутой ведущий, которые вместе с DJ зададут жару и сделают Ваше мероприятие незабываемым",
    photo: "/src/images/ServicesImage/artist-dj.jpg",
  },
  {
    id: 4,
    about: "Услуги DJ",
    description:
      "Если вы хотите организовать шумную музыкальную веренку - то Вам конечно нужен ее хедлайнер в виде DJ",
    photo: "/src/images/ServicesImage/dj.jpg",
  },
];
