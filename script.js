let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("javascript");
        habilidades[4].classList.add("jenkins");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

const translations = {
    es: {
        "title": "Portafolio - Leo Rodríguez",
        "menu_home": "INICIO",
        "menu_about": "SOBRE MÍ",
        "logo_name": "Leo",
        "menu_contact": "CONTACTO",
        "contact_number": "Número de contacto",
        "email": "Email",
        "address": "Dirección",
        "position": "Cargo",
        "seeking_employment": "En busca de empleo",
        "presentation": "Hola, soy Leonardo Rodriguez.",
        "intro": "Licenciado en cs de la computación - Desarrollo",
        "presentation2": " Recientemente me gradué de Licenciado en ciencas de la computación y mi proyecto a futuro es poder aprender y crecer en el campo del desarrollo de software y el aseguramiento de la calidad (QA), me encuentro en la búsqueda de mi primera oportunidad profesional. Aunque nuevo en el ámbito laboral, he dedicado numerosas horas al autoaprendizaje y a la práctica con proyectos personales que demuestran mi compromiso y habilidad para escribir código limpio y realizar pruebas exhaustivas que garantizan la calidad del software. Mi meta es unirme a un equipo donde pueda aportar valor desde el día uno y crecer como profesional del desarrollo y QA, entregando productos que no solo cumplan con los estándares técnicos sino que también superen las expectativas de los usuarios.",
        "personal_information": "Datos Personales",
        "about_me": "Sobre Mí",
        "tec":"Tecnologías en aprendizaje",
        "button_cv":"Descargar CV",
        "comunicacion": "Comunicación",
        "contact_1": "Contacto",
        "trabajo": "Trabajo en equipo",
        "creatividad": "Creatividad",
        "dedicacion": "Dedicación",
        "educacion": "Educación",
        "lic": "Licenciatura en ciencias de la computación",
        "lic_text": "Tuve el honor de recibirme en la Universidad Nacional del Sur en Bahía Blanca, Buenos Aires, Argentina, Donde aprendí muchas tecnologías y lenguajes de programación utilizados hoy en dia, tanto en profundidad como superficialmente además de aplitudes como gestión del tiempo y comunicación.",
        "work": "Experiencia de trabajo",
        "text_work_1": "Desarrollo del front-end de una pagina de venta de alimento para gato utilizando React, incorporando tecnologías como Boostrap, sistema de pagos con Mercado Pago y conexion lista para el back-end.",
        "text_work_2": "Desarrollo del back-end basado en un sistema de inventario para una pagina de e-commerce con utilizacion de las tecnologias de  Postgres como DB y Laravel para la conexion entre rutas.",

    },
    en: {
        "title": "Portfolio - Leo Rodriguez",
        "menu_home": "HOME",
        "menu_about": "ABOUT ME",
        "logo_name": "Leo",
        "menu_contact": "CONTACT",
        "contact_number": "Contact Number",
        "email": "Email",
        "address": "Address",
        "position": "Position",
        "seeking_employment": "Seeking Employment",
        "presentation": "Hi!, I'm Leonardo Rodriguez.",
        "intro": "Graduated in Computer Science - Development Area",
        "presentation2": "I recently earned my degree in Computer Science, and I am eager to further my learning and growth in software development and Quality Assurance (QA). Currently, I'm on the lookout for my first professional opportunity. Though new to the workforce, I have invested countless hours in self-study and hands-on projects that showcase my commitment and ability to write clean code and conduct thorough testing that ensures software quality. My goal is to join a team where I can immediately contribute value and grow as a development and QA professional, delivering products that not only meet technical standards but also exceed user expectations.",
        "personal_information": "Personal Information",
        "about_me": "About Me",
        "tec":"Technologies in learning",
        "button_cv":"Download CV",
        "contact_1": "Contact",
        "comunicacion": "Communication",
        "trabajo": "Teamwork",
        "creatividad": "Creativity",
        "dedicacion": "Dedication",
        "educacion": "Education",
        "lic": "Bachelor of Science in Computer Science",
        "lic_text": "I had the honor of graduating from the Universidad Nacional del Sur in Bahía Blanca, Buenos Aires, Argentina. There, I learned many technologies and programming languages that are widely used today, both in-depth and at a basic level. I also developed skills in areas such as time management and communication.",
        "work": "Work experience",
        "text_work_1": "Front-end development of a cat food sales page using React, incorporating technologies like Bootstrap, payment system with Mercado Pago, and ready-to-connect back-end setup.",
        "text_work_2": "Back-end development based on an inventory system for an e-commerce site, utilizing technologies such as PostgreSQL for the database and Laravel for route management.",
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

window.onscroll = function(){
    efectoHabilidades();
}

