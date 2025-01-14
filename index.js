/*------Page projets-----*/

const projs = [
  {
      img: "images/italie.png",
      legend: "italie"
  },
  {
      img: "images/quiz.png", 
      legend:"Quiz images"

  },
  { 
      img:"images/cache.png",
      legend:"Cache cache"

  },
  {
      img:"images/frappe.png",
      legend:"Jeu de frappe"
  }
]



/* Button carousel */
window.onload = () => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', 
    loop: true, 
    navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev', 
    },
  });

  console.log(swiper);  
};

/* swip projets sur italie.html */


const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');


const button = document.createElement('button');
button.classList.add('swip-projets');


const link = document.createElement('a');
link.classList.add('gal');
link.href = 'quiz.html';
link.textContent = 'Projets suivant';

button.appendChild(link);

buttonContainer.appendChild(button);


document.body.appendChild(buttonContainer);


/* swip sur quiz.html*/

// Créer le conteneur pour les boutons
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

// Créer le premier bouton (Projets précédent)
const buttonPrev = document.createElement('button');
buttonPrev.classList.add('swip-projets');

// Créer le lien pour "Projets précédent"
const linkPrev = document.createElement('a');
linkPrev.classList.add('gal');
linkPrev.href = 'italie.html';
linkPrev.textContent = 'Projets précédent';

// Ajouter le lien au premier bouton
buttonPrev.appendChild(linkPrev);

// Créer le deuxième bouton (Projets suivant)
const buttonNext = document.createElement('button');
buttonNext.classList.add('swip-projets');

// Créer le lien pour "Projets suivant"
const linkNext = document.createElement('a');
linkNext.classList.add('gal');
linkNext.href = 'cache.html';
linkNext.textContent = 'Projets suivant';

// Ajouter le lien au deuxième bouton
buttonNext.appendChild(linkNext);

// Ajouter les boutons au conteneur
buttonContainer.appendChild(buttonPrev);
buttonContainer.appendChild(buttonNext);

// Ajouter le conteneur au corps du document (ou autre conteneur)
document.body.appendChild(buttonContainer);
