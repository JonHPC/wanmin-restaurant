import xianglingImage from "./images/character_xiangling_portrait.png";
import guobaImage from "./images/npc_guoba_portrait.png";
import wanminImage from "./images/wanmin_restaurant.jpeg";

function homeDiv() {
    const homeContainer = document.createElement("div");
    homeContainer.id = "home-container";

    const middleContainer = document.createElement("div");
    middleContainer.id = "middle-container";

    const subtext = document.createElement("h3");
    subtext.textContent = "Come enjoy the best food in all of Liyue!"
    subtext.id = "subtext";
    middleContainer.appendChild(subtext);

    const wanmin = document.createElement("img");
    wanmin.src = wanminImage;
    wanmin.id = "home-wanmin";
    middleContainer.appendChild(wanmin);

    const guobaContainer = document.createElement("div");
    guobaContainer.id = "guoba-container";

    const guoba = document.createElement("img");
    guoba.src = guobaImage;
    guoba.id = "guoba";
    guobaContainer.appendChild(guoba);

    const hoursContainer = document.createElement("div");
    hoursContainer.id = "hours-container";

    const hoursList = document.createElement("ul");
    hoursList.id = "hours-list";

    const monday = document.createElement("li");
    monday.textContent = "MON: 7:00 AM - 10:00 PM";
    hoursList.appendChild(monday);

    const tuesday = document.createElement("li");
    tuesday.textContent = "TUE: 7:00 AM - 10:00 PM";
    hoursList.appendChild(tuesday);

    const wednesday = document.createElement("li");
    wednesday.textContent = "WED: 7:00 AM - 10:00 PM";
    hoursList.appendChild(wednesday);

    const thursday = document.createElement("li");
    thursday.textContent = "THU: 7:00 AM - 10:00 PM";
    hoursList.appendChild(thursday);

    const friday = document.createElement("li");
    friday.textContent = "FRI: 7:00 AM - 10:00 PM";
    hoursList.appendChild(friday);

    const saturday = document.createElement("li");
    saturday.textContent = "SAT: 7:00 AM - 10:00 PM";
    hoursList.appendChild(saturday);

    const sunday = document.createElement("li");
    sunday.textContent = "SUN: 7:00 AM - 10:00 PM";
    hoursList.appendChild(sunday);
    
    hoursContainer.appendChild(hoursList);

    middleContainer.appendChild(hoursContainer);

    const xianglingContainer = document.createElement("div");
    xianglingContainer.id = "xiangling-container";

    const xiangling = document.createElement("img");
    xiangling.src = xianglingImage;
    xiangling.id = "xiangling";
    xianglingContainer.appendChild(xiangling);


    homeContainer.appendChild(guobaContainer);
    homeContainer.appendChild(middleContainer);
    homeContainer.appendChild(xianglingContainer);

    return homeContainer;
}


function homePage() {
    const content = document.querySelector("#content");
    content.textContent = "";
    content.appendChild(homeDiv());
}

export default homePage;