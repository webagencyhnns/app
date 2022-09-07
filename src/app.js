import '@fortawesome/fontawesome-free/js/all'


// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.png/opti.png';

// function component() {
//     const element = document.createElement('div');

//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');
//      // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);
//     return element;
//   }

//   document.body.appendChild(component());

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
// console.log(menu, liste);
// import Menu from './component/menu';
// Menu();
