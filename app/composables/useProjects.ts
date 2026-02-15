export const useProjects = () => {
  const projects = [
    {
      id: "tnt-ethiopia",
      title: "TNT Ethiopia",
      description:
        "A scalable e-learning platform built with an admin dashboard, a course management system, payment integration, and real-time user progress tracking—secured with Arcjet, authenticated using Better Auth, and featuring end-to-end type safety with TypeScript.",
      fullDescription:
        "TNT Ethiopia is a comprehensive e-learning platform designed to revolutionize technical education. It features a robust admin dashboard for content management, a seamless course delivery system, and integrated payments via Stripe. The application is built with security and performance in mind, utilizing Arcjet for protection and Better Auth for secure user management.",
      image: "/projects/tnt.png",
      tags: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "Better Auth",
        "Arcjet",
        "PostgreSQL",
        "Prisma",
        "Zod",
        "shadcn/ui",
      ],
      link: "https://lean-academy.vercel.app/",
      github: "https://github.com/devabdisa",
    },
    {
      id: "my-blog",
      title: "My Blog",
      description:
        "A production-ready Next.js blog application with real-time presence powered by Convex and secure authentication handled by Better Auth. Built as a side project to publish my thoughts, ideas, and experiences.",
      fullDescription:
        "A personal space for sharing knowledge and experiences. This blog platform is built with modern technologies to ensure a fast and interactive reading experience. It supports real-time user presence, secure authentication, and a clean, reading-focused UI.",
      image: "/projects/blog.png",
      tags: ["Next.js", "TypeScript", "convex", "Better Auth", "shadcn/ui"],
      link: "https://next-pro-blog.vercel.app/",
      github: "https://github.com/devabdisa/NextProBlog",
    },
    {
      id: "evangadi-forum",
      title: "Evangadi Forum",
      description:
        "A full-stack Question and answer platform built with React, Node.js and MySQL.",
      fullDescription:
        "A community-driven Q&A platform inspired by Stack Overflow. Users can ask questions, provide answers, and interact with the community. The backend is powered by Node.js and MySQL, ensuring reliable data management and fast response times.",
      image: "/projects/evangadiforum.jpg",
      tags: ["React", "Node.js", "MySQL"],
      link: "https://evangadiforum.abdisaketema.com/",
      github: "https://github.com/devabdisa/Evangadi-forum",
    },
    {
      id: "finance-manager",
      title: "Finance Manager",
      description:
        "Full-stack MERN application that helps users manage personal finances, track income and expenses, and visualize spending trends.",
      fullDescription:
        "Take control of your finances with this comprehensive management tool. Track income and expenses, view spending habits through interactive charts, and set financial goals. Built with the MERN stack for a smooth, full-stack experience.",
      image: "/projects/expensetracker.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://spendee-expense-tracker.vercel.app/",
      github: "https://github.com/devabdisa/Spendly-Expense-Tracker",
    },
    {
      id: "amazon-clone",
      title: "Amazon Clone",
      description:
        "A full-stack Amazon clone built with React, Node.js, Firebase, and Stripe, featuring user authentication, cart management, orders, and secure payments.",
      fullDescription:
        "A fully functional e-commerce clone replicating core Amazon features. It includes a shopping cart, user authentication, order history, and secure payment processing with Stripe. A great demonstration of complex state management and full-stack integration.",
      image: "/projects/amazonclone.jpg",
      tags: ["React", "Node.js", "Firebase", "Stripe"],
      link: "https://ecommerce-clone-dev-abdisa.netlify.app/",
      github: "https://github.com/devabdisa/Amazon-Clone",
    },
    {
      id: "netflix-clone",
      title: "Netflix Clone",
      description:
        "A responsive Netflix clone built with React (Vite), featuring TMDB-powered movie & TV data, YouTube trailer previews, and a Netflix-style UI.",
      fullDescription:
        "A visually stunning clone of the Netflix interface. It pulls real-time movie data from the TMDB API and allows users to watch trailers. The UI is designed to be fully responsive and mimics the premium feel of the original platform.",
      image: "/projects/netflix-clone.png",
      tags: ["React", "Vite", "TMDB API"],
      link: "https://netflx2025devabdisa.netlify.app/",
      github: "https://github.com/devabdisa/Netflix-clone-react.js",
    },
  ];

  return {
    projects,
  };
};
