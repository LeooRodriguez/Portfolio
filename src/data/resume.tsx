import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Leo Rodríguez",
  initials: "LR",
  url: "https://leoorodriguez.github.io/",
  location: "Palermo, CABA, Argentina",
  locationLink: "https://www.google.com/maps/place/Palermo+Hollywood,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.5811182,-58.4287506,15z/data=!4m6!3m5!1s0x95bcb5924702e2d1:0x70b075b79ca9b53e!8m2!3d-34.5816987!4d-58.4335472!16s%2Fg%2F121g1j86?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Desarrollador de Software.",
  summary:
    "Recientemente me gradué de Licenciado en ciencas de la computación y mi proyecto a futuro es poder aprender y crecer en el campo del desarrollo de software y el aseguramiento de la calidad (QA), me encuentro en la búsqueda de mi primera oportunidad profesional. Aunque nuevo en el ámbito laboral, he dedicado numerosas horas al autoaprendizaje y a la práctica con proyectos personales que demuestran mi compromiso y habilidad para escribir código limpio y realizar pruebas exhaustivas que garantizan la calidad del software.",
  avatarUrl: "/me.png",
  skills: [
    "Jenkins",
    "Selenium Web Driver",
    "JUnit",
    "Postman",
    "JMeter",
    "SonarQube",
    "PMD",
    "Java",
    "Python",
    "SAP S/4HANA",
    "SAP GUI",
    "SAP FIORI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },,
  ],
  contact: {
    email: "leonardorodriguez227@gmail.com",
    tel: "+54 9 2915204611",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/LeooRodriguez",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leonardo-rodr%C3%ADguez-4560b4224/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

 
  education: [
    {
      school: "Universidad Nacional del Sur",
      href: "https://www.uns.edu.ar/",
      degree: "Licenciatura en ciencias de la computación",
      logoUrl: "/logo-uns.png",
      start: "Marzo 2018",
      end: "Agosto 2024",
    },
    {
      school: "Universidad Tecnológica Nacional Buenos Aires",
      href: "https://frba.utn.edu.ar/",
      degree: "SAP GUI S/4HANA Security Consultant Course",
      logoUrl: "/logoutn.png",
      start: "Agosto 2024",
      end: "Octubre 2024",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/certificate/UC-d51a58c8-3059-4068-a358-b7ce050cb4b7/",
      degree: "Consultor de Seguridad SAP",
      logoUrl: "/Udemy-Logo.png",
      start: "Enero 2025",
      end: "Enero 2025",
    },
    {
      school: "Udemy",
      href: "https://www.udemy.com/course/testerbootcamp/learn/lecture/24076484#overview",
      degree: "Complete 2024 Software Testing",
      logoUrl: "/Udemy-Logo.png",
      start: "Noviembre 2024",
      end: "Actualmente",
    },
    {
      school: "Udemy",
      href: "https://drive.google.com/file/d/1W38l74cinuN2B-gDxXG8EOdBrv3d_h1U/view",
      degree: "API Testing con POSTMAN",
      logoUrl: "/Udemy-Logo.png",
      start: "Diciembre 2024",
      end: "Diciembre 2024",
    },
    {
      school: "Platzi",
      href: "https://platzi.com/p/leo_rodr%C3%ADguez_179/curso/4558-introduccion-devops/diploma/detalle/",
      degree: "Introduction to DevOps Course",
      logoUrl: "/platzi.png",
      start: "Noviembre 2024",
      end: "Noviembre 2024",
    },
    {
      school: "Platzi",
      href: "https://platzi.com/p/leo_rodr%C3%ADguez_179/curso/1975-usabilidad-practico/diploma/detalle/",
      degree: "Usability Testing Course",
      logoUrl: "/platzi.png",
      start: "Noviembre 2024",
      end: "Noviembre 2024",
    },
    {
      school: "Platzi",
      href: "https://platzi.com/p/leo_rodr%C3%ADguez_179/curso/4128-equipos-agiles/diploma/detalle/",
      degree: "Agile team management Course",
      logoUrl: "/platzi.png",
      start: "Octubre 2024",
      end: "Octubre 2024",
    },
    {
      school: "Platzi",
      href: "https://platzi.com/p/leo_rodr%C3%ADguez_179/curso/2620-automatizacion-pruebas/diploma/detalle/",
      degree: "Introduction to test Automation",
      logoUrl: "/platzi.png",
      start: "Octubre 2024",
      end: "Octubre 2024",
    },
    {
      school: "Platzi",
      href: "https://platzi.com/p/leo_rodr%C3%ADguez_179/curso/1421-pruebas-software/diploma/detalle/",
      degree: "Software Testing Fundamentals",
      logoUrl: "/platzi.png",
      start: "Septiembre 2024",
      end: "Septiembre 2024",
    },

  ],
  projects: [
    {
      title: "Read Recommender",
      href: "https://read-recommender.vercel.app/",
      dates: "Agosto 2024 - Actualmente",
      active: true,
      description:
        "Pagina la cual recomienda libros a los usuarios en base a los que la persona leyó anteriormente, utilizando una API de libros gratuita.",
      technologies: [
        "React",
        "JavaScript",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://read-recommender.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/LeooRodriguez/ReadRecommender",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/ReadRecommender.mp4",
    },
    {
      title: "Testing With Selenium WD",
      href: "https://github.com/LeooRodriguez/TestingWithSeleniumWD",
      dates: "Junio 2024 - Present",
      active: true,
      description:
        "Conjunto de casos de prueba para un sistema existente utilizando Selenium Web Driver en el proceso.",
      technologies: [
        "JavaScript",
        "PostgreSQL",
        "SeleniumWebDriver",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/LeooRodriguez/TestingWithSeleniumWD",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sele.png",
      video: "",
    },
    {
      title: "NoteSync - React",
      href: "https://note-sync-self.vercel.app/",
      dates: "Abril 2024 - Actualmente",
      active: true,
      description:
        "Pagina web de creacion,almacenamiento y catalogo de notas con posibilidad de compartirlo en un entorno de desarrollo.",
      technologies: [
        "React",
        "JavaScript",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://note-sync-self.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/LeooRodriguez/NoteSync",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/NoteSync.mp4",
    },
    {
      title: "MiauDelicias",
      href: "https://data-mavericks-js.vercel.app/",
      dates: "Marzo 2023 - Junio 2023",
      active: true,
      description:
        "Pagina web de venta de comida para gato utilizando JavaScript y Laravel en el cual se implementa un sistema de carrito de productos y un login.",
      technologies: [
        "Next.js",
        "JavaScript",
        "PostgreSQL",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://data-mavericks-js.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/LeooRodriguez/Front-End-React-IAWEB",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/MiauDelicias.mp4",
    },
  ],
} as const;
