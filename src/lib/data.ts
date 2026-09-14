// src/lib/data.ts

export const personalInfo = {
  name: "Muaad Alomari",
  title: "Full Stack Web Developer",
  email: "Muaad.Alomari@outlook.com",
  location: "New York City",
  bio: "B.S Computer Science Graduate with specialized experience in React, Next.js, Typescript, and Tailwind CSS. I have a strong foundation in software engineering principles, and I am passionate about building scalable and efficient web applications. My goal is to leverage my skills to create innovative solutions that enhance user experiences.",
  links: {
    linkedin: "https://linkedin.com/in/muaadalomari/",
    github: "https://github.com/movieguy3333",
    resume: "/Muaad_Alomari_Resume.pdf",
  },
};

export const skills = {
  languages: ["TypeScript", "Python", "Java", "C++", "SQL"],
  ai: ["Claude", "Agent Orchestration", "LLM Evaluation"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Web Accessibility (a11y)"],
  backend: [
    "Node.js",
    "Express",
    "Prisma",
    "Drizzle",
    "Auth0 / Stripe / Plaid",
  ],
  databases: ["Supabase / PostgreSQL", "MongoDB", "Firebase", "Redis", "MySQL"],
  cloud: ["AWS", "GCP", "Serverless", "Docker", "Kubernetes", "GitHub Actions"],
};

export const experience = [
  {
    company: "Fitmoji",
    role: "Software Engineer Intern",
    period: "April 2026 - June 2026",
    description: [
      "Developed a real-time web simulation of a mobile game's combat engine (Next.js/React), exposing 15+ in-game variables as live sliders so non-technical stakeholders could balance gameplay in-browser instead of waiting on native rebuilds, turning a multi-step redeploy loop into instant feedback.",
      "Engineered a custom real-time isometric rendering engine in TypeScript that recomputes screen position and draw order for hundreds of on-screen sprites every 32ms, sustaining smooth performance with dozens of concurrent entities.",
      "Refined a Firebase-backed backend (three Firestore collections + Cloud Storage) that serves user-published villages through cached Next.js API routes, with a server-only Admin SDK boundary exposing sanitized public data while keeping user records off the client.",
    ],
  },
  {
    company: "New York Tech Talent Pipeline",
    role: "Web Development Fellowship",
    period: "July 2025 – June 2026",
    description: [
      "Strengthened full-stack development skills across React, Next.js, Node.js, and TypeScript through a semester-long fall project under the direct mentorship of senior software engineers, applying scalable system design principles and maintainable code architecture through Git-based version control and structured code review.",
      "Partnered with industry professionals in an Agile environment—participating in sprints, stand-ups, and structured critique sessions—to iteratively refine technical decisions and adapt system architecture as real-world project requirements evolved.",
    ],
  },
];

export const projects = [
  {
    title: "Fitmoji Web Simulator",
    year: "2026",
    description:
      "Created an in-browser combat simulator (Next.js/React) modeling a mobile game's battle engine, powered by a real-time renderer that recomputes hundreds of sprites every 32ms, sustaining zero frame drops across dozens of concurrent entities. Each unit type exposes its own live-tunable damage, HP, and behavior. Non-technical stakeholders adjust gameplay balance at the individual-unit level and watch results instantly, no native rebuild-and-redeploy required.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    links: {
      // Add your deployed link here later if you release a dmg/app
      code: "https://fitmoji-nextjs-xk63-git-simulator-gui-movieguy3333s-projects.vercel.app/village/3AP5UCRT",
    },
    image: "/images/fitmoji-banner.png",
  },
  {
    title: "GreenBites",
    year: "2025",
    description:
      "GreenBites is a full-stack web application that helps users track their meals and visualize the environmental impact of their diet. Built with React, TypeScript, Node.js, and TailwindCSS, it features real-time food search, meal logging, and interactive data visualizations. A custom carbon footprint model analyzes each meal’s ingredients to estimate its environmental cost, blending nutrition tracking with sustainability insights.",
    tags: ["Next.js", "TypeScript", "React", "Drizzle", "Supabase"],
    links: {
      // Add your deployed link here later
      code: "https://green-bites-testdeploy-git-main-movieguy3333s-projects.vercel.app?_vercel_share=jhpOq9wQq7owmnmVhflYKoaAylEYM5gb",
    },
    image: "/images/greenbites-banner.png",
  },
  {
    title: "YourYugiohProfits",
    year: "2025",
    description:
      "YourYugiohProfits is a full-stack web application that helps Yu-Gi-Oh! collectors manage and analyze the financial value of their card collections. Users can search and update their collection, set personalized price alerts, and view real-time insights into portfolio worth. The valuations dashboard features summary statistics and interactive charts that break down cards by price tiers, giving collectors a clear financial snapshot of their hobby.",
    tags: ["Vite", "React", "Express", "MongoDB", "Postman"],
    links: {
      code: "https://your-yugioh-profits-git-master-movieguy3333s-projects.vercel.app/?_vercel_share=cU7z4LczB0G5TtvVaEbH80Qe4YkR5msp",
    },
    image: "/images/youryugiohprofits-banner.png",
  },
];

export const about = {
  heading: "More Than Just Code",
  paragraphs: [
    `I define myself as a <strong> design-minded engineer.</strong> While my core strength is full-stack development, I don't stop once the logic works.`,
    `

I'm genuinely obsessive about how things look. When I come across a website that stops me mid-scroll, I catch myself reverse-engineering it in my head. The visual hierarchy, the color balance, the way whitespace is doing quiet work to guide the eye. That instinct doesn't stay in my head; it shows up in everything I build, from real-time rendering engines to the smallest UI details. I care as much about how an interface feels to use as I do about the architecture running underneath it.`,
  ],
  highlights: [
    {
      icon: "Code2",
      color: "text-terracotta-500",
      borderHover: "hover:border-terracotta-300",
      title: "Engineering",
      description: "Scalable Web & Mobile Apps",
    },
    {
      icon: "BarChart3",
      color: "text-terracotta-500",
      borderHover: "hover:border-terracotta-300",
      title: "Analytics",
      description: "Tableau & Python Data Viz",
    },
  ],
  afkHeading: "When I'm AFK",
  hobbies: [
    {
      title: "Football/Soccer",
      description:
        "I love playing football with my friends. I love to dictate the play in general but am as versatile as a player can be with ability to play in any position.",
    },
    {
      title: "Gaming",
      description:
        "Big fan of strategy games. They keep my problem-solving skills sharp even when relaxing.",
    },
    {
      title: "Cooking",
      description:
        "I enjoy experimenting with new recipes, different cuisines and styles. It's the only time I don't strictly follow documentation and give it my own touch :)",
    },
  ],
};

// Terminal CLI Configuration
export const cliConfig = {
  welcomeMessage:
    "Welcome to my portfolio! Type 'help' and press enter to see available commands.",
  helpText: `
Available Commands:
  ls              - List available sections
  pwd             - Show current directory
  cat <file>      - Read file contents (about, resume, projects, skills)
  about           - Display my info
  contact         - Show contact information
  skills          - Show technical skills
  clear           - Clear terminal
  help            - Show this help message
`,
  files: {
    about: `Name: ${personalInfo.name}
Title: ${personalInfo.title}
Location: ${personalInfo.location}

${personalInfo.bio}`,
    resume: `View full resume at: ${personalInfo.links.resume}`,
    projects: `Total Projects: ${projects.length}
Run 'ls' to see all available sections`,
    skills: `Languages: ${skills.languages.join(", ")}
Frontend: ${skills.frontend.join(", ")}
Backend: ${skills.backend.join(", ")}
Databases: ${skills.databases.join(", ")}
AI: ${skills.ai.join(", ")}
Cloud: ${skills.cloud.join(", ")}`,
  },
  currentDir: "/portfolio",
  listings: ["about", "projects", "skills", "experience", "contact"],
};
