import homeIcon from "./images/icon_archive_travel_log.png";
import menuIcon from "./images/icon_inventory_food.png";
import contactIcon from "./images/icon_map.png";

function headerDiv() {
    const header = document.createElement("div");
    header.id = "header";

    const wanmin= document.createElement("h1");
    wanmin.textContent = "Wanmin Restaurant";
    header.appendChild(wanmin);

    const subtext = document.createElement("h5");
    subtext.textContent = "The best food in all of Teyvat!";
    header.appendChild(subtext);

    const links = document.createElement("div");
    links.id = "links";

    const home = document.createElement("img");
    home.src = homeIcon;
    home.id = "home-button";
    links.appendChild(home);

    const menu = document.createElement('img');
    menu.src = menuIcon;
    menu.id = "menu-button";
    links.appendChild(menu);

    const contact = document.createElement("img");
    contact.src = contactIcon;
    contact.id = "contact-button";
    links.appendChild(contact);

    header.appendChild(links);

    return header;
}




function createWebsite() {
    const content = document.querySelector("body");

    content.insertBefore(headerDiv(), content.firstChild);
}

export default createWebsite;