let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.header .navbar').classList.add('active');
   }else{
      document.querySelector('.header .navbar').classList.remove('active');
   }
}

const body = document.body

const h1 = document.createElement('h1')

const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee>Daarulhikam@gmail.come website</marquee>'
// fn + windows + titik
const namaKamu = document.createElement('b')

body.append(h1)
body.append(namaSaya)
body.append(namaKamu)

alert('Assalamualaikum sahabat (*/ω＼*)')