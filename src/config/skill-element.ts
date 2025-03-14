export type SkillConfig = typeof skillElement;

export const skillElement = {
  Projects: [
    {
      image:"src/assets/imgPortfolio.webp",
      title: "Portafolio",
      description: "Web app responsive about my profile",
      colorIcon: "primary",
      p1: "Here you will find a sample of my work, skills and projects that reflect my passion for web development and my commitment to improving my techniques.",
      p2: "The purpose of this page is to introduce myself in a professional manner, share my experience, and allow you to explore how I can add value to your ideas and needs. This space not only highlights my technical skills, but also my focus on creating innovative and functional solutions. Thank you for visiting, and I hope you enjoy learning more about my work.",
      git:"https://github.com/LNX-dev01",
      items: [
        {
          skill: "Bundler (Vite) TSX,TS.",
          color: "primary",
          link: "https://vite.dev/",
        },
        {
          skill: "Tailwind CSS",
          color: "secondary",
          link: "https://v3.tailwindcss.com/",
        },
        {
          skill: "Hero UI",
          color: "warning",
          link: "https://www.heroui.com/",
        },
        {
          skill: "React Router",
          color: "danger",
          link: "https://reactrouter.com/",
        },
        {
          skill: "Axios",
          color: "success",
          link: "https://www.npmjs.com/package/axios",
        },
      ],
    },
    {
      image:"#",
      title: "Repositorio de tesis",
      description: "Sistema Web para la gestion de documentos.",
      colorIcon: "secondary",
      p1: ".",
      p2: ".",
      git:"#",
      items: [
        {
          skill: "Genexus",
          color: "danger",
          link: "https://www.genexus.com/es/",
        },
        {
          skill: "SqlServer",
          color: "primary",
          link: "https://www.microsoft.com/es-mx/sql-server/sql-server-2022",
        },
      ],
    },
    {
      image:"#",
      title: "Sistema Web",
      description: "Control de usuarios, empleados, y productos",
      colorIcon: "warning",
      p1: "-",
      p2: "-",
      git:"#",
      items: [
        { skill: "Node.js", color: "warning", link: "https://nodejs.org/" },
        {
          skill: "Express.js",
          color: "danger",
          link: "https://expressjs.com/",
        },
        {
          skill: "vite y Tailwind",
          color: "primary",
          link: "",
        },
        {
          skill: "Axios",
          color: "secondary",
          link: "",
        },
        {
          skill: "Material UI",
          color: "success",
          link: "https://mui.com/material-ui/",
        },
      ],
    },
  ],
};
