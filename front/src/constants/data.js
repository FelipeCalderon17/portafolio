import * as Icons from "../components/Icons";

export const navMenu = [
  {
    id: "Inicio",
    href: "/inicio",
  },
  {
    id: "Estudios",
    href: "/inicio/estudios",
  },
  {
    id: "Proyectos",
    href: "/inicio/proyecto",
  },
];

export const projects = [
  {
    title: "Parcebook",
    src: "",
    altText: "Todavia no hay imagen",
    ariaLabel:
      "Abre ventana modal con más información sobre el proyecto web parcebook",
    details: {
      description: "Parcebook es una red social.",
      technologies: [
        {
          title: "HTML",
          Icon: Icons.HtmlIcon,
        },
        {
          title: "CSS",
          Icon: Icons.CSSIcon,
        },
        {
          title: "JavaScript",
          Icon: Icons.JavascriptIcon,
        },
        {
          title: "BackEnd",
          Icon: Icons.DatabaseIcon,
        },
        {
          title: "API",
          Icon: Icons.APIIcon,
        },
      ],
      url: "https://mindfitmentalhealth.com/",
      githubUrl: null,
    },
  },
];

export const testimonials = [
  {
    quote:
      "I am incredibly grateful for Edward's remarkable efforts of completely revamping our nonprofit's website. His dedication and expertise in enhancing the site's security measures while also ensuring a seamless user experience has been nothing short of exceptional. The new website not only boasts a robust security infrastructure that safeguards sensitive data, but it also welcomes visitors with an intuitive and user-friendly interface. Edward took our organization's mission to heart and translated it into an online platform that not only represents our values but also engages our audience effectively. His selfless commitment to improving our online presence has undoubtedly elevated our nonprofit's reach and impact. We owe him a debt of gratitude for his invaluable contribution in making our website a secure and inviting space for all.",
    name: "Alicia P.",
    title: "Executive Director of Three Seeds Organization",
    src: "/assets/images/testimonials/alicia.webp",
    altText: "Profile of Alicia P.",
  },
];

export const socialMedias = [
  {
    href: "stiven3722@gmail.com",
    ariaLabel: "Envianos un email",
    title: "Escribe un email para stiven y felipe",
    Icon: Icons.EmailIcon,
  },
  {
    href: "https://www.linkedin.com/in/",
    ariaLabel: "Perfil LinkedIn",
    title: "Perfil LinkedIn",
    Icon: Icons.LinkedInIcon,
  },
  {
    href: "https://github.com/StivenHerrera20",
    ariaLabel: "Vea al perfil de Stiven en GitHub",
    title: "Perfil GitHub",
    Icon: Icons.GitHubIcon,
  },
  {
    href: "https://github.com/FelipeCalderon17",
    ariaLabel: "Vea al perfil de Felipe en GitHub",
    title: "Perfil GitHub",
    Icon: Icons.GitHubIcon,
  },
];

export const techSkills = [
  {
    category: "Front-End Development",
    skills: [
      {
        title: "HTML",
        Icon: Icons.HtmlIcon,
      },
      {
        title: "CSS",
        Icon: Icons.CSSIcon,
      },
      {
        title: "Tailwind CSS",
        Icon: Icons.TailwindCSSIcon,
      },
      {
        title: "SASS, SCSS",
        Icon: Icons.SassIcon,
      },
      {
        title: "JavaScript",
        Icon: Icons.JavascriptIcon,
      },
      {
        title: "React",
        Icon: Icons.ReactIcon,
      },
      {
        title: "jQuery",
        Icon: Icons.JQueryIcon,
      },
    ],
  },
  {
    category: "Back-End Development",
    skills: [
      {
        title: "PHP",
        Icon: Icons.PHPIcon,
      },
      {
        title: "NodeJS",
        Icon: Icons.NodeJSIcon,
      },
      {
        title: "ExpressJS",
        Icon: Icons.ExpressJSIcon,
      },
      {
        title: "SQL Server",
        Icon: Icons.SqlServerIcon,
      },
      {
        title: "MongoDB",
        Icon: Icons.MongoDBIcon,
      },
      {
        title: "SSRS",
        Icon: Icons.SsrsIcon,
      },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      {
        title: "C#",
        Icon: Icons.CsharpIcon,
      },
      {
        title: "VBA",
        Icon: Icons.VBIcon,
      },
    ],
  },
  {
    category: "Content Management Systems",
    skills: [
      {
        title: "WordPress",
        Icon: Icons.WordPressIcon,
      },
      {
        title: "Wix",
        Icon: Icons.WixIcon,
      },
    ],
  },
  {
    category: "Build Tools, Frameworks, and Versioning",
    skills: [
      {
        title: "Vite",
        Icon: Icons.ViteIcon,
      },
      {
        title: "Git",
        Icon: Icons.GitIcon,
      },
      {
        title: "GitHub",
        Icon: Icons.GitHubIcon,
      },
    ],
  },
  {
    category: "Design and Prototyping",
    skills: [
      {
        title: "Responsive Design",
        Icon: Icons.ResponsiveDesignIcon,
      },
      {
        title: "Pen and Paper",
        Icon: Icons.SketchingIcon,
      },
      {
        title: "Figma",
        Icon: Icons.FigmaIcon,
      },
    ],
  },
  {
    category: "Microsoft Products",
    skills: [
      {
        title: "Sharepoint",
        Icon: Icons.SharepointIcon,
      },
      {
        title: "Excel",
        Icon: Icons.ExcelIcon,
      },
      {
        title: "Access",
        Icon: Icons.AccessIcon,
      },
    ],
  },
  {
    category: "Others",
    skills: [
      {
        title: "APIs",
        Icon: Icons.APIIcon,
      },
      {
        title: "REST APIs",
        Icon: Icons.RestAPIIcon,
      },
      {
        title: "LocalWP",
        Icon: Icons.LocalWP,
      },
    ],
  },
];

export const softSkills = [
  {
    title: "Creativity",
    Icon: Icons.BrightIdeaIcon,
  },
  {
    title: "Teamwork",
    Icon: Icons.TeamworkIcon,
  },
  {
    title: "Public Speaking",
    Icon: Icons.PublicSpeakingIcon,
  },
  {
    title: "Time Management",
    Icon: Icons.ScheduleIcon,
  },
];

export const workExp = [
  {
    company: "Ed Park",
    location: "Rochester, NY",
    positions: [
      {
        title: "Freelancing Full-Stack Software Engineer",
        startDate: new Date(2023, 1),
        endDate: "present",
      },
    ],
    tasks: [
      "Collaborate directly with clients to gather project requirements, provide regular updates, and deliver solutions that tailored to their specific needs",
      "Conduct competitor analysis to identify clients' opportunities for differentiation and growth",
      "Setup API calls and database structures for streamlining clients' business requirements",
      "Demonstrate expertise in designing custom WordPress themes and plugins in PHP, enhancing website functionality and user interactivity",
    ],
  },
  {
    company: "100Devs",
    location: "Remote",
    positions: [
      {
        title: "Full-Stack Software Engineer",
        startDate: new Date(2022, 3),
        endDate: new Date(2023, 0),
      },
    ],
    tasks: [
      "Designed semantically structured and responsive websites for mobile and desktop devices",
      "Collaborated with a team of developers to construct full-stack web applications",
      "Utilized agile methodologies such as SCRUM for project management",
    ],
  },
  {
    company: "Xerox Corporation",
    location: "Webster, NY",
    positions: [
      {
        title: "Global Equipment Systems Engineer",
        startDate: new Date(2015, 9),
        endDate: new Date(2022, 2),
      },
    ],
    tasks: [
      "Developed device customization processes for Fortune 500 clients and government accounts",
      "Ranked number one in my department on process quality and defects testing by standardizing automation and fail-safes",
      "Provided technical support for remote production sites to facilitate the completion of device configurations",
      "Collaborated with a small team to improve processes",
      "Designed C# and .NET desktop application solutions to support engineers",
      "Successfully completed project of revamping Extract-Transform-Load system that led to 95% improved efficiency in terms of execution time, and incorporated troubleshooting features",
      "Designed and managed secure SharePoint websites for clients",
      "Wrote ad-hoc SQL queries for statistical analysis",
      "Wrote macros in Excel to populate customer data on printer labels",
    ],
  },
];

export const extracurriculars = [
  {
    company: "Toastmasters International Organization",
    location: "Pittsford, NY",
    positions: [
      {
        title: "Vice President of Public Relations",
        startDate: new Date(2023, 6),
        endDate: "present",
      },
      {
        title: "Sergeant at Arms",
        startDate: new Date(2022, 4),
        endDate: new Date(2023, 6),
      },
    ],
    tasks: [
      "Develop strategies to promote the club to the community, potential members, and guests",
      "Manage the club's social media accounts and website to share club events, achievements, and information",
      "Create content that showcases the club's activities and benefits",
    ],
  },
  {
    company: "Literacy Rochester",
    location: "East Rochester, NY",
    positions: [
      {
        title: "Digital Volunteer",
        startDate: new Date(2022, 3),
        endDate: new Date(2023, 9),
      },
    ],
    tasks: [
      "Diagnose and troubleshoot technical problems",
      "Demonstrate strong communication skills by explaining technical concepts in a clear and understandable manner",
      "Recognized for outstanding problem-solving capabilities",
    ],
  },
];

export const educations = [
  {
    id: 0,
    tipo: "B.S. Computer Engineering",
    detalle: "University at Buffalo, The State University of New York",
    fechaFin: new Date(2011, 10),
    notas: "Buffalo, NY",
  },
  {
    id: 5,
    tipo: "dasd",
    detalle: "adsdasd",
    fechaFin: new Date(2015, 10),
    notas: "dsadas",
  },
];

export const dessertImages = [
  {
    src: "/assets/images/desserts/oreo-cupcakes.webp",
    altText:
      "Oreo cupcakes with the toastmasters club 10th anniversary cupcake topper",
    value: "oreo-cupcakes",
    label: "Oreo cupcakes",
  },
  {
    src: "/assets/images/desserts/bagel-cake.webp",
    altText: "Large cake decorated to look like an everything bagel",
    value: "bagel-cake",
    label: "Everything bagel cake",
  },
  {
    src: "/assets/images/desserts/souffle.webp",
    altText: "Cheese souffle in a ramekin",
    value: "souffle",
    label: "Cheese souffle",
  },
  {
    src: "/assets/images/desserts/cookies.webp",
    altText: "Plate of chocolate chip cookies",
    value: "cookies",
    label: "Chocolate chip cookies",
  },
  {
    src: "/assets/images/desserts/macaron-cupcake.webp",
    altText:
      "Red velvet cupcake with cream cheese frosting with a strawberry macaron on top",
    value: "macaron-cupcakes",
    label: "Red velvet cupcake",
  },
  {
    src: "/assets/images/desserts/cannoli-cupcakes.webp",
    altText: "Cannoli cupcakes with chocolate chips on top",
    value: "cannoli-cupcakes",
    label: "Cannoli cupcakes",
  },
];

export const generalServices = [
  {
    title: "Consulting and Strategy",
    description:
      "I work closely alongside you to understand your goals, target audience, and business objectives. Using this insight, I develop a strategic plan designed to seamlessly transform your goals into a captivating digital presence.",
    Icon: Icons.HandshakeIcon,
  },
  {
    title: "Branding",
    description:
      "Let's craft a distinctive visual identity that resonates with your brand. An identity that not only establishes a strong visual presence, but also forges a profound connection with your audience, fostering a sense of trust and authenticity.",
    Icon: Icons.BrightIdeaIcon,
  },
  {
    title: "Competitor Analysis",
    description:
      "Through my competitor analysis service, I delve deep into the strategies employed within your industry or niche. Armed with this insight, you gain a distinct advantage, positioning yourself uniquely from others.",
    Icon: Icons.TargetIcon,
  },
  {
    title: "Front-End Development",
    description:
      "Infusing artistry into functionality, my web design prowess creates visually stunning and intuitive interfaces that captivate your audience. Aesthetics and usability should go hand in hand.",
    Icon: Icons.WebDesignIcon,
  },
  {
    title: "Back-End Development",
    description:
      "Fueling your website's functionality behind the scenes, I create dynamic processes that bridge your business requirements and your website. Expect nothing less than efficient, user-friendly functionality that adds value to their experience.",
    Icon: Icons.ServerIcon,
  },
  {
    title: "Responsive Design",
    description:
      "Your website will be flawlessly showcased across all screens for optimal viewing experience. Responsive design ensures your online presence adapts seamlessly to devices of all sizes.",
    Icon: Icons.DesktopMobileIcon,
  },
];

export const specialties = [
  {
    title: "Web Hosting and Deployment",
    Icon: Icons.DatabaseIcon,
  },
  {
    title: "API Development and Integration",
    Icon: Icons.APIIcon,
  },
  {
    title: "Custom Web Applications",
    Icon: Icons.ProgrammingIcon,
  },
  {
    title: "Portfolio Websites",
    Icon: Icons.PortfolioIcon,
  },
  {
    title: "CMS Development and Customization",
    Icon: Icons.WebContentIcon,
  },
  {
    title: "Web Performance Optimization",
    Icon: Icons.RocketIcon,
  },
  {
    title: "Website Maintenance",
    Icon: Icons.ToolsIcon,
  },
  {
    title: "Website Migration",
    Icon: Icons.LeftRightArrowsIcon,
  },
];
