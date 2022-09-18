let speedtop = document.querySelector('.stop')
let speedbot = document.querySelector('.sbotttom')
let speed = document.querySelector('.sss')
let charge = document.querySelector('.remaining_charge')




speedtop.onclick = () => {
   if (Number(speed.innerHTML) < 300) {
      speed.innerHTML = Number(speed.innerHTML) + 5
      charge.innerHTML = Number(charge.innerHTML) - 8

   } else {
      speed.innerHTML = '300'

   }
}



speedbot.onclick = () => {
   if (Number(speed.innerHTML) > 0) {
      speed.innerHTML = Number(speed.innerHTML) - 5
      charge.innerHTML = Number(charge.innerHTML) + 7

   } else if (Number(speed.innerHTML) === 0) {
      speed.innerHTML = '0'

   }
}

let temp = document.querySelector('.temp')
let temptop = document.querySelector('.temptop')
let tempbot = document.querySelector('.tempbot')
temptop.onclick = () => {
   temp.innerHTML = Number(temp.innerHTML) + 1
   charge.innerHTML = Number(charge.innerHTML) + 4
}

tempbot.onclick = () => {
   temp.innerHTML = Number(temp.innerHTML) - 1
   charge.innerHTML = Number(charge.innerHTML) - 6
}




let topd = document.querySelector('.topd')
let bottomd = document.querySelector('.botttomd')
let size = document.querySelector('.size')
let price = document.querySelector('.price')
let disk = document.querySelector('.coleso1')
let disk2 = document.querySelector('.coleso2')
let zamena1 = document.querySelector('.zamena1')
let zamena2 = document.querySelector('.zamena2')


topd.onclick = () => {
   if (Number(size.innerHTML) <= 19) {
      size.innerHTML = Number(size.innerHTML) + 1
      disk.style.display = 'none'
      disk2.style.display = 'none'
      zamena1.style.display ='block'
      zamena2.style.display ='block'
      price.innerHTML = Number(price.innerHTML) + 1440
   } 
}

bottomd.onclick = () => {
   if (Number(size.innerHTML) === 20) {
      size.innerHTML = Number(size.innerHTML) - 1
      zamena1.style.display = 'none'
      zamena2.style.display = 'none'
      disk.style.display ='block'
      disk2.style.display ='block'
   
      price.innerHTML = Number(price.innerHTML) - 1440
      
   }
}


let konditioner = document.querySelector('.konditioner')
let long = document.querySelector('.long')



long.onclick = () => {
    if (long.checked == false) {
        charge.innerHTML = Number(charge.innerHTML) + 28
    } else {
        charge.innerHTML = Number(charge.innerHTML) - 28
    }
}
konditioner.onclick = () => {
    if (konditioner.checked == false) {
        charge.innerHTML = Number(charge.innerHTML) + 33    
    } else {
        charge.innerHTML = Number(charge.innerHTML) - 33
    }
}






















































































