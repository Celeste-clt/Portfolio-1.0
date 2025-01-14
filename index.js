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

const button=document.querySelector("#swip-projets")

button.addEventListener("click", () => {
    
    suivant = suivant +1
      swip.innerHTML=suivant
  })


/* Button carousel "fleche"*/
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

