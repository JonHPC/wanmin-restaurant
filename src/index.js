import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";
import createWebsite from "./website";
import './styles/_default.scss';

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



