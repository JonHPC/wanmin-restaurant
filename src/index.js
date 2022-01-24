import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";
import createWebsite from "./website";
import './styles/style.css';

createWebsite();
homePage();

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

homeButton.addEventListener('click', () => {
    homePage();
});

menuButton.addEventListener('click', () => {
    menuPage();
});

contactButton.addEventListener('click', () =>{
    contactPage();
});

home.addEventListener('mouseover', addHoverClass);
menu.addEventListener('mouseover', addHoverClass);
contact.addEventListener('mouseover', addHoverClass);

function addHoverClass(){
    target.classList.add('hover');
}

home.addEventListener('mouseout', removeHoverClass);
menu.addEventListener('mouseout', removeHoverClass);
contact.addEventListener('mouseout', removeHoverClass);

function removeHoverClass(){
    target.classList.remove('hover');
}

