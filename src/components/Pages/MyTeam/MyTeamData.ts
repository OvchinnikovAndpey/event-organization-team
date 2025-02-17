export interface TeamMember {
  id: number;
  name: string;
  description: string;
  photo: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Мария, Менеджер проекта",
    description: "Здесь будет описание",
    photo: '/images/myTeamImages/manya.jpg',
  },
  {
    id: 2,
    name: "Виктория, Менеджер проекта",
    description: "Здесь будет описание",
    photo: '/images/myTeamImages/sevakova.jpg',
  },
  {
    id: 3,
    name: "Ксения, ведущий",
    description:
      "Легкая и динамичная манера ведения. Умение чувствовать аудиторию. Чувство юмора и умение импровизировать. Интересная конкурсная программа. Все эти пункты в одном лице - это то, что делает Ксению первоклассной ведущей.",
    photo: '/images/myTeamImages/arharova.jpg',
  },
  {
    id: 4,
    name: "DJ OVCHINNIKOV",
    description:
      "Disco? House? Techno? Trance? DJ OVCHINNIKOV - разносторонний диджей, который может играть музыку самых разных жанров, от диско и хауса до техно и транса. Обладая большим опытом и страстью к музыке, он способен создать незабываемую атмосферу на любом мероприятии.",
    photo: '/images/myTeamImages/andrey.jpg',
  },
  {
    id: 5,
    name: "DJ LEDYASHOV",
    description: "Здесь будет описание",
    photo: '/images/myTeamImages/ledyashov.jpg',
  },
  {
    id: 6,
    name: "DJ BAGIROV",
    description: "Здесь будет описание",
    photo: '/images/myTeamImages/baga.jpg',
  },
  {
    id: 7,
    name: "DJ RASTY",
    description: "Здесь будет описание",
    photo: '/images/myTeamImages/rasty.jpg',
  }
];