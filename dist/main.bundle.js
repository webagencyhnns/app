(self["webpackChunkwebagence2"] = self["webpackChunkwebagence2"] || []).push([["main"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

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
console.log("script ok");
var button = document.getElementById("dark-mode");
var body = document.querySelector("body");

function darkMode() {
  body.classList.toggle("bg-black");
  body.classList.toggle("text-white");
}

button.addEventListener("click", darkMode);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUVBLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxJQUFJQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixNQUF2QixDQUFYOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7RUFDakJGLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxNQUFmLENBQXNCLFVBQXRCO0VBQ0FKLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxNQUFmLENBQXNCLFlBQXRCO0FBQ0Y7O0FBRURQLE1BQU0sQ0FBQ1EsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNILFFBQWpDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYWdlbmNlMi8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbi8vIGltcG9ydCBJY29uIGZyb20gJy4vaWNvbi5wbmcvb3B0aS5wbmcnO1xyXG5cclxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xyXG4vLyAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIFxyXG4vLyAgICAgLy8gTG9kYXNoLCBjdXJyZW50bHkgaW5jbHVkZWQgdmlhIGEgc2NyaXB0LCBpcyByZXF1aXJlZCBmb3IgdGhpcyBsaW5lIHRvIHdvcmtcclxuLy8gICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xyXG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xyXG4vLyAgICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cclxuLy8gICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcclxuLy8gICBteUljb24uc3JjID0gSWNvbjtcclxuXHJcbi8vICAgZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xyXG4vLyAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xyXG5cclxuY29uc29sZS5sb2coXCJzY3JpcHQgb2tcIik7XHJcblxyXG5sZXQgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW1vZGVcIik7XHJcbmxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG5mdW5jdGlvbiBkYXJrTW9kZSgpIHtcclxuICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYmctYmxhY2tcIik7XHJcbiAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcInRleHQtd2hpdGVcIik7XHJcbn1cclxuXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGFya01vZGUpOyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZGFya01vZGUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==