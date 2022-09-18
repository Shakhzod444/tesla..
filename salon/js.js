let iphones = {
   black: 'https://teslaone.com.ua/img/tesla-x/configurator/photo-salon-black.jpg',
   white: 'https://teslaone.com.ua/img/tesla-x/configurator/photo-salon-white.jpg',
   bejic: 'https://teslaone.com.ua/img/tesla-x/configurator/photo-salon-beige.jpg',
}



let rnd = document.querySelectorAll('div[data-color]')
let img = document.querySelector('.imgs')
let color = document.querySelector('.cls')
let txt = document.querySelectorAll('[data-txt]')


rnd.forEach(btn => {
   btn.onclick = () => {
      let key = btn.getAttribute('data-color')
      img.style.backgroundImage = `url("${iphones[key]}")`


   }
})




// let black = document.querySelector('.main-right-color-green')
// let white = document.querySelector('.main-right-color-silver')
// let bejic = document.querySelector('.main-right-color-gold')
// let price = document.querySelector('.price')


// black.onclick = () => {



//    price.innerHTML = Number(price.innerHTML) + 0

// }   

// white.onclick = () => {

//    price.innerHTML = Number(price.innerHTML) + 1760 

// }

// bejic.onclick = () => {

//    price.innerHTML = Number(price.innerHTML) + 1460

// }














