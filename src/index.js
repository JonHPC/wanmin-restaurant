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

/*
homeButton.addEventListener('mouseover', addHoverClass);
menuButton.addEventListener('mouseover', addHoverClass);
contactButton.addEventListener('mouseover', addHoverClass);

function addHoverClass(){
    target.classList.add('hover');
}

homeButton.addEventListener('mouseout', removeHoverClass);
menuButton.addEventListener('mouseout', removeHoverClass);
contactButton.addEventListener('mouseout', removeHoverClass);

function removeHoverClass(){
    target.classList.remove('hover');
}*/

