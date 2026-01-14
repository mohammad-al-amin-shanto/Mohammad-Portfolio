export const profile = {
  name: "Mohammad Al Amin",
  designation: "Full Stack Developer (Javascript / React / Node)",
  photo:
    "https://res.cloudinary.com/dn2wb32gr/image/upload/v1758128272/IMG_20250914_181249_sbmgtp.png",
  resumeLink: "./Mohammad Resume.pdf",
  email: "mash.dev02@gmail.com",
  phone: "+8801986763961",
  whatsapp: "+8801986763961",
  achievementPDF:
    "https://drive.google.com/file/d/1HabQ-voK1v-IrmwwEJ9rmpMcg2wlB_Vj/view?usp=drive_link",
  achievementImage:
    "https://res.cloudinary.com/duic0gfkw/image/upload/v1756336253/Cropped_Certificate_zacbwd_c_pad_b_gen_fill_w_4000_h_3500_atj6az.png",
  social: {
    github: "https://github.com/alamin-shanto",
    linkedin: "https://www.linkedin.com/in/mash02/",
    twitter: "https://x.com/mdalamin94402",
    facebook: "https://www.facebook.com/mohammad.alamin.94402",
  },
};

export const about = {
  journey:
    "My programming journey started in high school with experimenting on HTML and CSS. What began as simple curiosity soon turned into a deep interest in creating interactive and functional websites. Over time, I expanded my skills, diving into JavaScript and modern frameworks.",
  work: "With several years of experience, I have built and deployed multiple web applications, focusing on performance, scalability, and clean code. I progressed into mastering React, Node.js, and Express, and today I work as a Full Stack Developer, delivering end-to-end solutions that solve real-world problems.",
  hobbies:
    "Beyond coding, I enjoy reading technology and self-improvement books, playing strategic video games, and actively participating in cricket, which helps me stay competitive and disciplined.",
};

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "HTML/CSS", level: 94 },
    { name: "Tailwind CSS", level: 92 },
    { name: "TypeScript", level: 58 },
    { name: "Next JS", level: 50 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express JS", level: 78 },
    { name: "MongoDB", level: 75 },
    { name: "JWT", level: 78 },
  ],
  tools: [
    { name: "Git", level: 88 },
    { name: "Docker", level: 60 },
    { name: "Vite", level: 80 },
    { name: "Netlify", level: 88 },
    { name: "Vercel", level: 80 },
  ],
};

export const education = [
  {
    degree: "HSC (Science)",
    institution: "Sher E-Bangla Nagar Govt Boys High School & College",
    year: "2023",
    details:
      "Completed Higher Secondary Certificate in Science. Key subjects studied: Physics, Higher Mathematics, Chemistry and Information and Communication Technology (ICT).",
  },
];

export const experience = [
  {
    role: "Frontend Engineer",
    company: "Acme Web",
    period: "2023 — Present",
    details:
      "Built responsive dashboards and improved page load performance by 32%.",
  },
];

export const projects = [
  {
    id: 1,
    name: "Pulse Point",
    image:
      "https://res.cloudinary.com/duic0gfkw/image/upload/v1756333794/Pulse_Point_ibccwa_c_pad_b_gen_fill_w_4000_h_3500_cteheq.jpg",
    tech: [
      "React",
      "Tailwind",
      "Stripe",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    brief: "A blood donation platform connecting donors and recipients.",
    live: "https://pulsepoint-seven.netlify.app/",
    github: "https://github.com/alamin-shanto/PulsePoint-Client",
    challenges:
      "Managing real-time updates and notifications across users using WebSockets.",
    improvements:
      "Add stripe, push notifications, and role-based admin dashboard.",
  },
  {
    id: 2,
    name: "Leafy",
    image:
      "https://res.cloudinary.com/duic0gfkw/image/upload/v1756333794/Leafy_qmmmsk_c_pad_b_gen_fill_w_4000_h_3500_qwc9gg.jpg",
    tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "Firebase"],
    brief: "An tracking site for plant lovers.",
    live: "https://leafy-client.netlify.app/#/",
    github: "https://github.com/alamin-shanto/Leafy-client",
    challenges:
      "Ensuring smooth animations and transitions while maintaining performance.",
    improvements:
      "Add user authentication, product reviews, and wishlist features.",
  },
  {
    id: 3,
    name: "Food Gully",
    image:
      "https://res.cloudinary.com/duic0gfkw/image/upload/v1756333793/Food_Gully_apmn3b_c_pad_b_gen_fill_w_4000_h_3500_snw148.jpg",
    tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "Firebase"],
    brief: "A food delivery app connecting users with local restaurants.",
    live: "https://foodgully.netlify.app",
    github: "https://github.com/alamin-shanto/FoodGully-client",
    challenges:
      "Ensuring fast load times and smooth user experience on mobile devices.",
    improvements:
      "Add user reviews, loyalty programs, and advanced search filters.",
  },
];
