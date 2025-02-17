export interface TeamMember {
  id: number;
  name: string;
  description: string;
  photo: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Мария",
    description:
      "Менеджер проекта. Все вопросы по организации мероприятия, состава команды, порядка проведения и т.д. будут решаться именно с ней.",
    photo: "/images/myTeamImages/manya.jpg",
  },
  {
    id: 2,
    name: "Виктория",
    description:
      "Менеджер проекта. Все вопросы по организации банкетных меропрятий, кеттеринга и т.д. будут решаться именно с ней.",
    photo: "/images/myTeamImages/sevakova.jpg",
  },
  {
    id: 3,
    name: "Ксения",
    description:
      "Легкое и динамичная манера проведения мероприятий. Интересная конкурсная программа. Незабываемые впечатления. Все эти пункты в одном лице - это то, что делает Ксению первоклассной ведущей.",
    photo: "/images/myTeamImages/arharova.jpg",
  },
  {
    id: 4,
    name: "DJ OVCHINNIKOV",
    description:
      "Disco? House? Techno? Trance? DJ OVCHINNIKOV - разносторонний диджей, который может играть музыку самых разных жанров, от диско и хауса до техно и транса. Обладая большим опытом и страстью к музыке, он способен создать незабываемую атмосферу на любом мероприятии.",
    photo: "/images/myTeamImages/andrey.jpg",
  },
  {
    id: 5,
    name: "DJ LEDYASHOV",
    description:
      "Александр обладает уникальным стилем игры, который сочетает в себе элементы различных жанров музыки. DJ LEDYASHOV - это настоящий профессионал, который способен создать атмосферу, которая будет запоминаться надолго.",
    photo: "/images/myTeamImages/ledyashov.jpg",
  },
  {
    id: 6,
    name: "DJ BAGIROV",
    description:
      "DJ BAGIROV  - это настоящий профессионал, который способен создать атмосферу, которая будет запоминаться надолго.",
    photo: "/images/myTeamImages/baga.jpg",
  },
  {
    id: 7,
    name: "DJ RASTY",
    description:
      "DJ RASTY  - это настоящий профессионал, который способен создать атмосферу, которая будет запоминаться надолго.",
    photo: "/images/myTeamImages/rasty.jpg",
  },
];
