import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import '@fortawesome/fontawesome-free/js/all'
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }

const menu = document.getElementById("menu");
const liste = document.getElementById('liste');
menu.addEventListener("click", () => {
    liste.classList.toggle('hidden');
   
    // p.classList.toggle('color');
})

const allLinks = document.querySelectorAll('.li-nav');

allLinks.forEach(link => {
    link.addEventListener("click", () => {
        liste.classList.toggle('hidden');
    })
})
