// DOM

// foma 1

// const btnOpen = document.querySelector('.btn__open')
// const btnClose = document.querySelector('.btn__close')
// const menu = document.querySelector('.header__menu')

// btnOpen.addEventListener('click', function () {
//   menu.classList.toggle('show__menu')
// })

// btnClose.addEventListener('click', function () {
//   menu.classList.remove('show__menu')
// })


// forma 2

const headerNav = document.querySelector('.header__nav')
const menu = document.querySelector('.header__menu')

// Delegación de eventos
headerNav.addEventListener('click', function (e) {
  if (e.target.closest('.btn__open')) {
    menu.classList.toggle('show__menu')
  }

  if (e.target.closest('.btn__close')) {
    menu.classList.remove('show__menu')
  }

  if (e.target.closest('.list__link')) {
    menu.classList.remove('show__menu')

    const links = document.querySelectorAll('.list__link')
    const arrLinks = Array.from(links)

    for(const link of arrLinks) {
      link.classList.remove('active')

    }

    e.target.classList.add('active')
  }
  
})



document.addEventListener('keydown', function (e) {
if (e.key === 'Escape') {
  menu.classList.remove('show__menu')
}

})




// BOM //

const html = document.documentElement

// console.log(html.scrollHeight) // Altura de la página//
// console.log(html.clientHeight) // Altura de la ventana//
// console.log(html.scrollTop) // Altura que se ha desplazado el scroll//

const progress = document.querySelector('.progress')

window.addEventListener('scroll', function (e) {
const alturaPagina = html.scrollHeight - html.clientHeight

const scrollActual = html.scrollTop

const progreso = scrollActual / alturaPagina

progress.style.width = Math.round(progreso * 100) + '%'

})


const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
  e.preventDefault()


  //forma nueva de hacerlo//

  const formData = new FormData(this)

  console.log({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  })

// forma tradicional//

  // console.log(e.target.elements)
//   const input = e.target.elements

//   console.log({
//     name: input.name.value,
//     email: input.email.value,
//     message: input.message.value
//   })


})


// swiper pasar paragraf



const swiper = new Swiper('.reviews .swiper', {
 // Optional parameters
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.button--next',
    prevEl: '.button--prev',
  },


  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    1024: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
  },


})


// ScrollReveal efettos 

const SR = ScrollReveal()

SR.reveal('.hero__img', {
  duration: 1000,
  origin: 'left',
  distance: '300px',
  // reset: true,
})


SR.reveal('.hero .content', {
    duration: 1000,
    origin: 'right',
    distance: '300px',
    // reset: true,
})

SR.reveal('.section__title', {
  duration: 1200,
  origin: 'left',
  distance: '300px',
  // reset: true,
})

SR.reveal('.about__text', {
  duration: 1200,
  origin: 'bottom',
  distance: '300px',
  // reset: true,
})

SR.reveal('.portfolio__item:nth-child(even)', {
  duration: 1200,
  origin: 'left',
  distance: '300px',
  // reset: true,
})

SR.reveal('.portfolio__item:nth-child(odd)', {
  duration: 1200,
  origin: 'right',
  distance: '300px',
  // reset: true,
})

SR.reveal('.swiper', {
  duration: 1200,
  origin: 'bottom',
  distance: '300px',
  // reset: true,
})

SR.reveal('.contact .container', {
  duration: 1200,
  origin: 'bottom',
  distance: '300px',
  // reset: true,
})


// louder cargar de un documento
// loading,interactvie, complete


const loader = document.getElementById('loader')

window.addEventListener('load', function () {
  loader.classList.add('hidden')
})

// document.addEventListener('DOMContentLoaded', function () {
//   console.log(document.readyState)
// })

// console.log(document.readyState)

  


