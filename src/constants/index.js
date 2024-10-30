export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Prepmind: AI-Powered Mock Interview Platform',
    desc: ' An AI-driven platform providing personalized mock interviews tailored to a user’s job role, experience level, and job description. Users can upload resumes, engage in real-time Q&A sessions, and receive detailed feedback to help them prepare for interviews effectively.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, JavaScript, Shadcn UI,Tailwind CSS and Clerk for authentication,Convex, Prepmind uses AI to deliver tailored interview questions, real-time feedback, and detailed reports, enhancing interview readiness for users.',
    href: 'https://prepmind.vercel.app/',
    texture: '/textures/project/prepmind.mov',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Social Flock: Dynamic Social Media Platform',
    desc: 'Social Flock is a vibrant social media platform built with the MERN Stack (MongoDB, Express, React, Node.js) and Tailwind CSS. It enables users to connect, share content, and engage in real-time discussions through features like user profiles, friend management, and instant messaging, all designed for a seamless user experience.',
    subdesc:
      'Built as a feature-rich application using MERN Stack (MongoDB, Express, React, Node.js), and Tailwind CSS, Social Flock enables users to connect, share content, offering an intuitive interface and seamless user experience.',
    href: 'https://socialflock.onrender.com/',
    texture: '/textures/project/socailflock.mov',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Master of Computer Application  ( MCA )',
    pos: 'Shri Govindram Seksaria Institute of Technology and Science, Indore, Madhya Pradesh',
    duration: '2023 - 2025',
    title:
      '7.2 CGPA. Focused on advanced software development, database management, and web technologies while participating in various coding competitions and hackathons to enhance problem-solving skills',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Bachelor of Computer Application (BCA)',
    pos: 'Daksh Academy, Dhar, Madhya Pradesh',
    duration: '2020 - 2023',
    title:
      '8.5 CGPA. Studied foundational programming languages, web development, and data structures, and completed projects in web and mobile app development.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Higher Secondary (12th Grade)',
    pos: 'School of Excellence, Dhar, Madhya Pradesh',
    duration: '2018 - 2019',
    title:
      '78.6 Percentage. Completed studies in Science, developing a strong foundation in analytical and critical thinking.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Secondary School (10th Grade)',
    pos: 'School of Excellence, Dhar, Madhya Pradesh',
    duration: '2016 - 2017',
    title:
      '78.6 Percentage. Achieved a comprehensive understanding of core subjects and fundamental concepts in Mathematics and Science.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
