import wanminMapImage from "./images/wanmin_location.png";
import pepperImage from "./images/item_pepper.png";
import jueyunChiliImage from "./images/item_jueyun_chili.png";
import fishImage from "./images/item_fish.png";
import xianglingImage from "./images/icon_emoji_xiangling_1.png";

function contactDiv() {
    const contactContainer = document.createElement("div");
    contactContainer.id = "contact-container";

    const pepper = document.createElement("img");
    pepper.src = pepperImage;
    pepper.id = "pepper";
    contactContainer.appendChild(pepper);

    const fish = document.createElement("img");
    fish.src = fishImage;
    fish.id = "fish";
    contactContainer.appendChild(fish);

    const mapContainer = document.createElement("div");
    mapContainer.id = "map-container";

    const contactUsTitle = document.createElement("h1");
    contactUsTitle.id = "contact-us-title";
    contactUsTitle.textContent = "Map";
    mapContainer.appendChild(contactUsTitle);

    const wanminMap = document.createElement("img");
    wanminMap.src = wanminMapImage;
    wanminMap.id = "wanmin-map";
    mapContainer.appendChild(wanminMap);

    const contactUsText = document.createElement("p");
    contactUsText.id = "contact-us-text";
    contactUsText.textContent = "You can find us at: 888 Main St., Liyue Harbor, Teyvat"
    mapContainer.appendChild(contactUsText);

    contactContainer.appendChild(mapContainer);

    const jueyun = document.createElement("img");
    jueyun.src = jueyunChiliImage;
    jueyun.id = "jueyun";
    contactContainer.appendChild(jueyun);

    const xiangling = document.createElement("img");
    xiangling.src = xianglingImage;
    xiangling.id = "chibi-xiangling";
    contactContainer.appendChild(xiangling);

    return contactContainer;
}

function contactPage() {
    const content = document.querySelector("#content");
    content.textContent = "";
    content.appendChild(contactDiv());
}

export default contactPage;