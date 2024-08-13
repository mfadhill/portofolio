import project1 from "../assets/projects/coffe.png";
import project2 from "../assets/projects/todo.png";
import project3 from "../assets/projects/circle.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A Fresh Graduate of Informatics from University Syiah Kuala Banda Aceh and Dumbways coding
bootcamp. As a Full Stack Developer, I have experience create social media and e-commerce apps
using Nest JS as Back-End, React Js as Front End, Postgress SQL as Database and Data
management as Redux.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Fullstack Developer",
    company: "UNIMAS",
    description: `A GIS-based website that displays all the Megaliths in Samarahan, Sawakan City, Malaysia.`,
    technologies: ["Laravel", "Tailwind Css", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "E-commerce application that sells coffee powder and coffee beans",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Todo List App",
    image: project2,
    description:
      " This Todo app can create, edit and delete things that already exist in the application. This application was created using React Native and Nest JS.",
    technologies: ["TypeScript", "React Native", "Nest JS", "PostgreSQL"],
  },
  {
    title: "Circle",
    image: project3,
    description:
      "Circle App is a website that displays information in the form of text and images and this website can post photos or text, follow, search and edit profiles just like the Twitter application.",
    technologies: ["Express Js", "React Js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "App Journey",
    image: project4,
    description:
      "An application that displays a person's journey and shares their journey on the website",
    technologies: ["Nest Js", "TypeScript", "React Js", "PostgreSQL"],
  },
];

export const CONTACT = {
  address: "Jl Madura, Jl Jawa, Kecamatan Beji, Depok, West Java, Indonesia",
  phoneNo: "+62 822 7440 8910",
  email: "mfadhill554@example.com",
};
