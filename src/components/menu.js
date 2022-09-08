const menu = document.getElementById("menu");
const nav = document.getElementById("nav-mobile");
const root = document.getElementById("root");
const Menu = () => {
    const showMenu = () => { 
        nav.classList.toggle("hidden");
    };

    const root = () => {

    }
    menu.addEventListener("click", showMenu)
}

export default Menu;
