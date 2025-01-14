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

