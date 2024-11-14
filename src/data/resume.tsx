import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saul Rojas",
  initials: "SR",
  url: "https://dub.sh/saul",
  location: "Arequipa, PE",
  locationLink: "https://maps.app.goo.gl/oWUUJJg6SvqnLuFg9",
  description:
    "Freelancer Software Engineer and Entrepreneur. I love building things and helping people. Very active on Twitter & LinkedIn.",
  summary:
    "I'm a developer experienced in small startups all the way to large companies, looking to make a difference for your small to medium-sized business. Whether you need to update your website, build a totally new site, or you need some web business running, I'm here to get things done quickly and efficiently for you: Can build effective UIs with ReactJS with NextJS, Proficient in Django, Django REST Framework, PostgreSQL, for the backend. Can also handle more complicated tasks such as working with Celery. Quick to learn, and eager to meet new people and learn about their goals. Let's chat!",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Python",
    "Django",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/saul-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/saul-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/saul-twitter",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Softlab Peru",
      href: "https://softlabperu.com/en/",
      badges: [],
      location: "Remote",
      title: "Fullstack Software Engineer",
      logoUrl: "/softlabperu.svg",
      start: "March 2024",
      end: "Oct 2024",
      description:
        "Implemented a tickets system (NextJS + Django) for IPT's (Internet para todos) employees, that project was used by +100 users per day. Implemented the UI (Angular & Azure technologies) of the admin dashboard for an internal learning platform used by IPT's technicians, administratives, etc; Around 50 courses were registered and 100+ video tutorials were published. Collaborated in the development of a clone of Red Hat Ansible Automation Platform (NextJS with FastAPI) in order to automate CI/CD processes.",
    },
    {
      company: "Bitmaker",
      badges: [],
      href: "https://bitmaker.la/en",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/bitmaker.png",
      start: "November 2022",
      end: "August 2023",
      description:
        "Collaborated in the development of estela [https://estela.bitmaker.la/docs/] (with ReactJS, Django REST framework) an open-source web scraping orchestrator with more than 15 clients. developer. Implemented +20 web scrapers in Python for different industries: videogames, restaurants, software factories, etc. Implemented the statistics module for estela orchestrator, working with AWS technologies (S3, RDS, etc).",
    },
    {
      company: "LinkBusters",
      href: "https://link-busters.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/linkbusters.png",
      start: "August 2023",
      end: "February 2024",
      description:
        "Implemented an automatized reports system for more than +1000 clients, worked with Django, Celery for scheduled tasks, AWS ElasticBeanStalk (ElasticSearch) for fast queries, AWS S3 for reports storage (excel files). Worked on the optimization of the clients dashboard using modern frontend technologies like HTMX for lazy loading.",
    },
    {
      company: "Crack The Code",
      href: "https://www.crackthecode.la",
      badges: [],
      location: "Remote",
      title: "Educator",
      logoUrl: "/crackthecode.jpeg",
      start: "January 2022",
      end: "October 2022",
      description:
        "Teacher of programming for kids 10-15 years old (Python, Javascript and C#).",
    },
  ],
  education: [
    {
      school: "San Pablo University",
      href: "https://ucsp.edu.pe/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/sanpablo.png",
      start: "2017",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Get-Aboard",
      href: "https://get-aboard.co/",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "After a bad experience on an onboarding process, I decided to build get-aboard which allows software development teams to create onboarding roadmaps. This is a great way to organize information about onboardings and different roadmaps.",
      technologies: [
        "Next.js",
        "ReactFlow",
        "Typescript",
        "PostgreSQL",
        "Django",
        "TailwindCSS",
        "Lemonsqueezy",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://get-aboard.co/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/webtaken/get-aboard",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Launch",
          href: "https://www.producthunt.com/products/get-aboard#get-aboard",
          icon: <Icons.producthunt className="size-3" />,
        },
      ],
      image: "/get-aboard.png",
      video: "",
    },
    {
      title: "ChatGPT Jobs",
      href: "https://chatgpt-jobs.com/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "A job board for ChatGPT Specialists (prompt engineers, ai writers, AI educators, etc). Newsletter system with filters: location, category, tagging system, etc. More than +100 subscribers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Django",
        "TailwindCSS",
        "Lemonsqueezy",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatgpt-jobs.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/webtaken/chatgpt-careers-hub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatgpt-jobs.png",
      video: "",
    },
    {
      title: "Agentic AI",
      href: "https://dub.sh/agentic-ai",
      dates: "October 2024 - Current",
      active: true,
      description:
        "AI agents to automate freelancers tasks with Generative AI.",
      technologies: [
        "Next.js",
        "Typescript",
        "Vercel AI SDK",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://dub.sh/agentic-ai",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/webtaken/agents",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/demo-vmake.mp4",
    },
    {
      title: "*Quizz",
      href: "https://dub.sh/quizz",
      dates: "September 2024 - September 2024",
      active: true,
      description:
        "Developed a quizzes app generator for english learners using Generative AI.",
      technologies: [
        "Next.js",
        "Typescript",
        "Vercel AI SDK",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://dub.sh/quizz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/webtaken/quizz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // image: "/quizz.png",
      image: "",
      video: "/quizz.mp4",
    },
    {
      title: "Inventory",
      href: "https://dub.sh/inventory",
      dates: "August 2023 - September 2023",
      active: true,
      description:
        "Developed a no-code inventory management app using Notion. Implemented stock management, accountability system, CMS for clients, etc.",
      technologies: ["Next.js", "Notion", "Shadcn UI", "Gumroad"],
      links: [
        {
          type: "Website",
          href: "https://dub.sh/inventory",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/inventory.webp",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "10 IFIP International Conference on Entertainment Computing",
      dates: "November 11th - 15th, 2019",
      location: "Arequipa, Peru",
      description:
        "Developed a web videogame based on history from my country to help users learn more about Peru.",
      image: "/videogames.png",
      mlh: "",
      links: [],
    },
    {
      title: "Techsuyo",
      dates: "2023 Edition",
      location: "Arequipa, Peru",
      description:
        "Developed a web application with generative AI (ChatGPT API) to help companies analyze candidates CVs and find the best possible match with more accuracy.",
      image: "techsuyo.png",
      mlh: "",
      links: [],
    },
    // {
    //   title: "Hack The North",
    //   dates: "September 15th - 17th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a virtual reality application allowing users to see themselves in third person.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Streamer Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/htn2017",
    //     },
    //     {
    //       title: "Client Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/RTSPClient",
    //     },
    //   ],
    // },
  ],
} as const;
