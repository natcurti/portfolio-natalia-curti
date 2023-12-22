/* Hamburguer Menu */

const btnMenu = document.getElementById('btn-menu');
const menuList = document.getElementById('menu-list');
const menuLinks = document.getElementById('menu-links');

btnMenu.addEventListener('click', () => {
    const linksHeight = menuLinks.getBoundingClientRect().height;
    const containerHeight = menuList.getBoundingClientRect().height;
    if(containerHeight === 0){
        menuList.style.height = `${linksHeight}px`;
        btnMenu.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    }
    else {
        menuList.style.height = 0;
        btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
})

/* Button Footer */

const btnFooter = document.querySelector('.footer__btn');
window.addEventListener('scroll', function(){
    const scrollHeight = window.scrollY;
    if(scrollHeight > 200){
        btnFooter.classList.add('show');
    } else {
        btnFooter.classList.remove('show');
    }
})

/* Scroll */

const navbar = document.querySelector('.menu');
const scrollLinks = document.querySelectorAll('.scroll__links');

window.addEventListener('scroll', () => {
    const scrollHeigth = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeigth > navHeight){
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }

})

scrollLinks.forEach(link => link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const link = document.getElementById(id);
    const navFixed = navbar.classList.contains('fixed');
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = menuList.getBoundingClientRect().height;

    let position = link.offsetTop - navHeight;

    if(!navFixed){
        position -= navHeight;
    }
    
    if(navHeight > 110.7){
        position += containerHeight;
    }

    window.scrollTo({
        left: 0,
        top: position,
    });

    menuList.style.height = 0;
    btnMenu.innerHTML = `<i class="fa-solid fa-bars"></i>`;    
}))

/* Skills */

const title = document.getElementById('skills-title');
const text = document.getElementById('skills-text');
const skills = document.querySelectorAll('.skills__item');

skills.forEach(item => item.addEventListener('click', showSkillText));

const skillsDetails = [
    {
        name: "HTML",
        text: "Linguagem de marcação usada para estruturar o conteúdo das páginas Web, é uma tecnologia chave da Internet."
    },
    {
        name: "CSS",
        text: "Linguagem de estilo usada para personalizar o visual de uma página Web."
    },
    {
        name: "JavaScript",
        text: "Linguagem de programação interpretada, de alto nível, que em conjunto com HTML e CSS formam a base do Desenvolvimento Front-End."
    },
    {
        name: "Tailwind",
        text: "Framework de estilos CSS, baseado em classes utilitárias, aumentando a produtividade e a rapidez na construção de páginas Web."
    },
    {
        name: "Bootstrap",
        text: "Framework de estilos CSS, baseado em componentes, que também permite a rápida construção de páginas atrativas e responsivas."
    },
    {
        name: "SASS",
        text: "Pré-processador de CSS que permite escrever estilos de forma mais fácil e intuitiva."
    },
    {
        name: "GIT",
        text: "Sistema de controle de versionamento de código."
    },
    {
        name: "GitHub",
        text: "Plataforma para a hospedagem de códigos, com objetivo principal em controle de versão e colaboração."
    }
]

function showSkillText(e){
    skillsDetails.forEach(item => {
        if(e.target.id === item.name || e.target.parentNode.id === item.name){
            title.innerHTML = item.name;
            text.innerHTML = item.text;
        }
    })
}

/* Projects */

const projectsDetails = [
    {
        "name": "Lista de Tarefas",
        "text": "Projeto feito usando HTML, CSS e JavaScript. O usuário pode adicionar tarefas, removê-las, filtrar, e optar pelo light ou dark mode. As informações ficam armazenadas no LocalStorage.",
        "image": "./assets/img/to-do-list-screenshot-2.jpg",
        "repository": "https://github.com/natcurti/lista-de-tarefas",
        "deploy": "https://natcurti.github.io/lista-de-tarefas/"
    },
    {
        "name": "Jogo da Memória",
        "text": "Projeto feito usando HTML, CSS e JavaScript. O usuário pode optar por jogar com números ou ícones, entre 1 até 4 jogadores, e com uma grade de 16 cards ou 36 cards. Na versão single player há um contador de jogadas e temporizador.",
        "image": "./assets/img/memory-game-screenshot-2.jpg",
        "repository": "https://github.com/natcurti/memory-game",
        "deploy": "https://natcurti.github.io/memory-game/"
    },
    {
        "name": "PokeDex",
        "text": "Projeto feito usando HTML, CSS e JavaScript, consumindo os dados da PokeAPI. O usuário pode filtrar os pokemons por nome ou número, e ao clicar em cada pokemon, uma nova página se abre com os detalhes de cada um deles.",
        "image": "./assets/img/pokedex-screenshot-2.jpg",
        "repository": "https://github.com/natcurti/my-pokedex",
        "deploy": "https://natcurti.github.io/my-pokedex/"
    },
    {
        "name": "The Secret Kingdom",
        "text": "Projeto feito usando HTML, CSS e JavaScript, usando o paradigma da Orientação à Objetos.",
        "image": "./assets/img/the-secret-kingdom-screenshot-2.jpg",
        "repository": "https://github.com/natcurti/the-secret-kingdom",
        "deploy": "https://natcurti.github.io/the-secret-kingdom/"
    },
    {
        "name": "Smart Bank",
        "text": "Projeto feito usando Tailwind CSS e JavaScript. Ao clicar em abrir a conta, você será levado para um formulário e depois de preenchê-lo, poderá abrir a câmera para tirar uma foto.",
        "image": "./assets/img/smart-bank-screenshot-2.jpg",
        "repository": "https://github.com/natcurti/smart-bank",
        "deploy": "https://natcurti.github.io/smart-bank/"
    },
    {
        "name": "Cafeteria Serenatto",
        "text": "Projeto feito usando Bootstrap e seus componentes como cards, modo noturno, offcanvas, accordion. Além disso aplicamos o efeito parallax para as imagens dos banners.",
        "image": "./assets/img/serenatto-screenshot-2.jpg",
        "repository": "https://github.com/natcurti/serenatto",
        "deploy": "https://natcurti.github.io/serenatto/"
    }
]

const btnModal = document.querySelectorAll('[data-btn-modal]');
const modalContainer = document.getElementById('modalContainer');

btnModal.forEach(button => button.addEventListener('click', openModal));

function openModal(e){
    let project = e.target.parentNode.previousElementSibling.textContent;
    projectsDetails.map(item => {
        if(item.name === project){
            modalContainer.innerHTML = '';
            const modal = document.createElement('DIV');
            modal.classList.add('modal');
            modal.innerHTML = `
            <div class="modal__title">
                <p>${item.name}</p>
                <button onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="modal__content">  
                <img src="${item.image}" alt="Print da Tela Projeto ${item.name}">                       
                <p>${item.text}</p>
            </div>
            <div class="modal__links">
                <a href="${item.repository}" target="_blank">Repositório</a>
                <a href="${item.deploy}" target="_blank">Deploy</a>
            </div>            
            `
            modalContainer.appendChild(modal);
            modalContainer.style.display = 'block';

            modalContainer.addEventListener('click', (e) => {
                if(e.target.id === 'modalContainer'){
                    closeModal();
                }
            })

            window.addEventListener('keydown', (e) => {
                if(e.key === 'Escape'){
                    closeModal();
                }
            })
        }
    })
}

function closeModal(){
    modalContainer.style.display = 'none';
}

/* Footer Date */

const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();





