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

/* swip projets */

// Créer la structure du bouton et du lien
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

// Créer le bouton
const button = document.createElement('button');
button.classList.add('swip-projets');

// Créer le lien
const link = document.createElement('a');
link.classList.add('gal');
link.href = 'quiz.html';
link.textContent = 'Projets suivant';

// Ajouter le lien au bouton
button.appendChild(link);

// Ajouter le bouton au conteneur
buttonContainer.appendChild(button);

// Ajouter le conteneur à l'élément body (ou à un autre conteneur spécifique)
document.body.appendChild(buttonContainer);
