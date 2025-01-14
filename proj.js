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




