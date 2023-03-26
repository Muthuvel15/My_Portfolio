import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'MS',
  title: "Je suis Muthuvel SAVOUNDIRAPANDIANE",
  description:
    "Je suis un junior développeur passionné Full Stack ayant une expérience dans le développement d'applications web avec Python, Django, React.js ainsi que dans le domaine du Big Data avec Hadoop, Spark, MongoDB, PyTorch et l'utilisation d'outils tels que Docker et Kubernetes.",
  resumeLink:
  // change this link to your resume
    'https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'Muthuvel15',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://github.com/Muthuvel15',
  linkedin: 'https://www.linkedin.com/in/muthuvel-savoundirapandiane/',
  github: 'https://github.com/Muthuvel15',
  // instagram: 'https://www.instagram.com/__hanzla100',
  // facebook: 'https://www.facebook.com/1hanzla100',
  twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Je suis un développeur Full Stack passionné qui souhaite explorer toutes les piles technologiques possibles.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Construction de Single-Page-Apps (SPA) et PWA réactives en React.js'
        ),
        emoji('⚡ Construction de sites web statiques et réactifs en utilisant Next.js'),
        emoji('⚡ Construction d'+'API RESTful en Django et Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Expérience de travail sur plusieurs plates-formes cloud (AWS, Azure)'),
        emoji(
          '⚡ Hébergement et maintenance de sites web sur des instances de machine virtuelle avec intégration de bases de données'
        ),
       
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Big Data & Data Science',
      lottieAnimationFile: '/lottie/skills/Bigdata.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Connaissance des technologies Big Data telles que Hadoop, NoSQL, Spark, Hive, Pig, Cassandra, etc.'
        ),
        emoji(
          '⚡ Capacité à développer des pipelines de données'
        ),
        emoji(
          '⚡ Capacité à concevoir des modèles de données'
        ),
        emoji("⚡ Connaissance des outils d'analyse de données tels que R et Python"),
        emoji(
          "⚡ Capacité à créer des visualisations de données pour communiquer les résultats de l'analyse"
        ),
      ],
      softwareSkills: [
        {
          skillName: 'hadoop',
          fontAwesomeClassName: 'logos:hadoop',
        },
        {
          skillName: 'spark',
          fontAwesomeClassName: 'logos:spark',
        },
        {
          skillName: 'python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'grunt',
          fontAwesomeClassName: 'logos:grunt',
        },
        {
          skillName: 'mongodb',
          fontAwesomeClassName: 'logos:mongodb',
        },
        {
          skillName: 'MariaDB',
          fontAwesomeClassName: 'logos:mariadb',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'IPSSI ',
    subHeader: 'Mastère Dev, Bigdata & IA',
    duration: 'September 2022 - April 2024',
    descBullets: [
      "Développement JS, Big Data, Open Source, Webscraping, gestion de projet, ITIL, ERP, CRM, BI, architecture web et mobile, cohérence et procédures d'exploitation, développement de frameworks, bases de données, Python, R, architectures cloud, conduite de projets data, veille technologique.",
    ]
  },
  {
    schoolName: 'Université-paris-saclay',
    subHeader: "Licence pro Développement avancé d’applications Web Internet et Intranet",
    duration: 'September 2021 - September 2022',
    descBullets: [
      "Modéliser des données pour mieux intégrer les services web, concevoir et réaliser des sites web Intranet et Internet, CMS, programmer côté client et serveur.",
      "Développer des applications WEB à partir des langages de haut niveau après avoir défini avec le client les besoins et le cahier des charges.",
      "Intégrer des services et des applications WEB aussi bien pour un Intranet que pour l’Internet.",
      "Maîtriser et paramétrer les outils de collaboration entre les applications web.",
    ],
  },
  {
    schoolName: 'Lycée Léonard de Vinci de Melun',
    subHeader: 'BTS Services Informatiques aux Organisations (Option: Solutions Logicielles et Applications Métiers)',
    duration: 'September 2019 - juillet 2021',
    descBullets: [
      'Enseignement de spécialité : Solutions Logicielles et Applications Métiers (SLAM)',
      'Projets Personnalisés Encadrés',
      'Analyse Économique, Managériale et Juridique des services informatiques',
      'Mathématiques pour l'+'informatique : Mathématiques, Algorithmique appliquée',
      'Expression et Communication en langue anglaise',
      'Culture Générale et Expression',
      'Enseignement facultatif : Mathématiques approfondies',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Ingénieur de support Applicatif (en alternance)',
    company: 'Manutan',
    companyLogo: '/img/icons/common/Manutan.jpg',
    date: 'September 2021 – present',
    desc: "En tant ingénieur de support, j'ai analysé, diagnostiqué et résolu les incidents de l'e-commerce. J'ai également assuré le bon fonctionnement des solutions en place, suivi les travaux d'amélioration et automatisé certaines tâches de support tout en documentant les processus techniques.",
  },
  {
    role: 'WordPress Developer',
    company: 'Comité Handball Seine-et-Marne',
    companyLogo: '/img/icons/common/Comité_Handball_Seine-et-Marne.jpeg',
    date: 'Jan 2021 – férvier 2021',
    desc: 'Mission : Développement site Ecommerce WordPress',
    descBullets: [
      'Création du site Ecommerce WordPress',
      'Programmation événementielle en JavaScript',
      'Intégration de la solution de paiement Stripe',
      'Téléchargements des différents fichiers PDF, gestion de planifications en utilisant API Google agenda)',
      'Déploiement site internet sur l hébergeur (ionos.fr)',
],
  
  },
  {
    role: 'Backend Developer',
    company: 'Manutan',
    companyLogo: '/img/icons/common/Manutan.jpg',
    date: 'juin 2020 - juillet 2020',
    // desc: 'Mission : Programmation en Script Shell pour automatiser les tâches administratives de Webmaster',
    desc: "Ma mission consistait à transférer les données de la base de données Oracle vers un fichier CSV, que j'ai ensuite transmis d'un serveur à un autre via le serveur FTP. J'ai également mis en place un système d'envoi automatique des fichiers CSV au webmaster via le serveur messagerie STMP. J'ai documenté l'ensemble du projet pour une meilleure traçabilité et une facilité de maintenance ultérieure. Tout au long de cette mission, j'ai travaillé en étroite collaboration avec les différents acteurs impliqués pour assurer la qualité et la fiabilité des livrables dans les délais impartis.",
  
  },
  
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Muthuvel SAVOUNDIRAPANDIANE | Portfolio',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Hanzla Tauqeer',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Muthuvel',
    'Muthuvel SAVOUNDIRAPANDIANE',
    'Muthuvel SAVOUNDIRAPANDIANE Portfolio',
    'Muthuvel SAVOUNDIRAPANDIANE Portfolio Website',
    'Portfolio',
    'Portfolio Website',
  ],
};
