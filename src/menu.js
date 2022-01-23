import grilledTigerFishImage from "./images/grilled_tiger_fish.png";
import riceBunsImage from "./images/rice_buns.png";
import jueyunChiliChickenImage from "./images/jueyun_chili_chicken.png";
import crystalShrimpImage from "./images/crystal_shrimp.png";
import mintSaladImage from "./images/mint_salad.png";
import crabRoeTofuImage from "./images/crab_roe_tofu.png";
import squirrelFishImage from "./images/squirrel_fish.png";
import universalPeaceImage from "./images/universal_peace.png";
import mintyMeatRollsImage from "./images/minty_meat_rolls.png";
import dragonBeardNoodlesImage from "./images/dragon_beard_noodles.png";
import moraImage from "./images/item_mora.png";
import oneStarImage from "./images/icon_1_star.png";
import twoStarImage from "./images/icon_2_stars.png";
import threeStarImage from "./images/icon_3_stars.png";
import fourStarImage from "./images/icon_4_stars.png";
import fiveStarImage from "./images/icon_5_stars.png";

function menuDiv() {
    //create a container for all the menu items
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    //store all the food images in an array
    /*const foodArray = [
        grilledTigerFishImage,
        riceBunsImage,
        jueyunChiliChickenImage,
        crystalShrimpImage,
        mintSaladImage,
        crabRoeTofuImage,
        squirrelFishImage,
        universalPeaceImage,
        mintyMeatRollsImage,
        dragonBeardNoodlesImage
    ]*/

    //create an object for each food and store it in the array
    let foodArray = [
        {
            "id": 0,
            "name": "Grilled Tiger Fish",
            "img": grilledTigerFishImage,
            "currency": moraImage,
            "price": "1,250",
            "rarity": oneStarImage
        },
        {
            "id": 1,
            "name": "Rice Buns",
            "img": riceBunsImage,
            "currency": moraImage,
            "price": "1,250",
            "rarity": oneStarImage
        },
        {
            "id": 2,
            "name": "Jueyun Chili Chicken",
            "img": jueyunChiliChickenImage,
            "currency": moraImage,
            "price": "2,500",
            "rarity": twoStarImage
        },
        {
            "id": 3,
            "name": "Crystal Shrimp",
            "img": crystalShrimpImage,
            "currency": moraImage,
            "price": "2,500",
            "rarity": twoStarImage
        },
        {
            "id": 4,
            "name": "Mint Salad",
            "img": mintSaladImage,
            "currency": moraImage,
            "price": "2,500",
            "rarity": twoStarImage
        },
        {
            "id": 5,
            "name": "Crab Roe Tofu",
            "img": crabRoeTofuImage,
            "currency": moraImage,
            "price": "2,500",
            "rarity": twoStarImage
        },
        {
            "id":6,
            "name": "Squirrel Fish",
            "img": squirrelFishImage,
            "currency": moraImage,
            "price": "5,000",
            "rarity": threeStarImage
        },
        {
            "id": 7,
            "name": "Universal Peace",
            "img": universalPeaceImage,
            "currency": moraImage,
            "price": "5,000",
            "rarity": threeStarImage
        },
        {
            "id": 8,
            "name": "Minty Meat Rolls",
            "img": mintyMeatRollsImage,
            "currency": moraImage,
            "price": "5,000",
            "rarity": threeStarImage
        },
        {
            "id": 9,
            "name": "Dragon Beard Noodles",
            "img": dragonBeardNoodlesImage,
            "currency": moraImage,
            "price": "5,000",
            "rarity": threeStarImage
        },

    ]

    for(let i = 0; i < foodArray.length; i++){
        //create a container for each of the food items
        const foodContainer = document.createElement("div");
        foodContainer.className = "food-container";

        //create an img for each of the food items
        const food = document.createElement("img");
        food.src = foodArray[i].img;
        food.id = `${foodArray[i].name}`;

        //append each food to the foodContainer
        foodContainer.appendChild(food);

        //create text for the name of each food
        const name = document.createElement("h5");
        name.textContent = foodArray[i].name;

        //append each food name to the foodContainer
        foodContainer.appendChild(name);

        //create a currency image for each foodContainer
        const currency = document.createElement("img");
        currency.src = foodArray[i].currency;
        foodContainer.appendChild(currency);

        //create text for the price of each food
        const price = document.createElement("p");
        price.textContent = foodArray[i].price;
        foodContainer.appendChild(price);

        //create an image for the rarity of each food
        const rarity = document.createElement("img");
        rarity.src = foodArray[i].rarity;
        foodContainer.appendChild(rarity);



        //append the foodContainer to the MenuContainer
        menuContainer.appendChild(foodContainer);
    }

    return menuContainer;
}

function menuPage() {
    const content = document.querySelector("#content");
    content.textContent = "";
    content.appendChild(menuDiv());
}

export default menuPage;