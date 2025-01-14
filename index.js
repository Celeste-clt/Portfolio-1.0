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


let suivant=0;

let swip=document.querySelector("#suiv")

const swipButton=document.querySelector("#swip-projets")

swipButton.addEventListener("click", () => {
    
    suivant = suivant +1
      swip.innerHTML=suivant
  })


/* Button carousel */
window.onload = () => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal', // Direction de défilement (horizontal ou vertical)
    loop: true, // Pour faire une boucle infinie
    navigation: {
      nextEl: '.swiper-button-next', // Bouton suivant
      prevEl: '.swiper-button-prev', // Bouton précédent
    },
  });

  console.log(swiper);  // Affiche l'instance de Swiper dans la console pour vérifier
};

