export type SkillConfig = typeof skillElement;
import imgPortfolio from "../assets/imgPortfolio.webp";
import Image_flexglob from "../assets/Image-flexglob.webp"

export const skillElement = {
  Projects: [
    {
      image: imgPortfolio,
      title: "Portafolio",
      description: "Web app responsive about my profile",
      colorIcon: "primary",
      p1: "Here you will find a sample of my work, skills and projects that reflect my passion for web development and my commitment to improving my techniques.",
      p2: "The purpose of this page is to introduce myself in a professional manner, share my experience, and allow you to explore how I can add value to your ideas and needs. This space not only highlights my technical skills, but also my focus on creating innovative and functional solutions. Thank you for visiting, and I hope you enjoy learning more about my work.",
      git: "https://github.com/LNX-dev01",
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
      image: Image_flexglob,
      title: "SPA-FlexGlob",
      description: "Business Page",
      colorIcon: "secondary",
      p1: "A versatile Page for businesses and events, offering dynamic content display, effortless navigation, and a responsive design that works flawlessly on any device. Choose between light and dark themes for a personalized viewing experience.",
      p2: "A dynamic digital space designed to enhance visibility for businesses and events, offering an intuitive, multi-device experience with customizable themes for users and admins alike",
      git: "#",
      items: [
        {
          skill: "Hero UI",
          color: "danger",
          link: "https://www.heroui.com/",
        },
        {
          skill: "Tailwind css",
          color: "secondary",
          link: "https://v3.tailwindcss.com/",
        },
        {
          skill: "Frame-motion",
          color: "success",
          link: "https://motion.dev/",
        },
        {
          skill: "Embla-Carousel",
          color: "primary",
          link: "https://lucide.dev/",
        },
      ],
    },
    {
      image: "#",
      title: "Sistema Web",
      description: "Control de usuarios, empleados, y productos",
      colorIcon: "warning",
      p1: "-",
      p2: "-",
      git: "#",
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
