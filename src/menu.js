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
            "text": "A fish kebab grilled over an open flame. The fish is a fresh catch stright from the harbor, lightly picked and swifty grilled.",
            "img": grilledTigerFishImage,
            "currency": moraImage,
            "price": "1,250",
            "rarity": oneStarImage
        },
        {
            "id": 1,
            "name": "Rice Buns",
            "text": "Soft and fluffy food. The rice and horsetail have been ground into flour and kneaded into dough before being put in a steaming basket.",
            "img": riceBunsImage,
            "currency": moraImage,
            "price": "1,250",
            "rarity": oneStarImage
        },
        {
            "id": 2,
            "name": "Jueyun Chili Chicken",
            "text": "The finesse technique used in mixing the dish retained the freshness of the delightful juice contained within the chicken.",
            "img": jueyunChiliChickenImage,
            "currency": moraImage,
            "price": "2,500",
            "rarity": twoStarImage
        },
        {
            "id": 3,
            "name": "Crystal Shrimp",
            "text": "The stuffing is taken from whole fresh shrimp, and the glistening quality of the flour can be guessed at from the translucence of the outer skin.",
            "img": crystalShrimpImage,
            "currency": moraImage,
            "price": "2,500",
            "rarity": twoStarImage
        },
        {
            "id": 4,
            "name": "Mint Salad",
            "text": "A fragrant salad dish. Finely chopped Jueyun Chilis blended with a sauce and mixed with Mint leaves.",
            "img": mintSaladImage,
            "currency": moraImage,
            "price": "2,500",
            "rarity": twoStarImage
        },
        {
            "id": 5,
            "name": "Crab Roe Tofu",
            "text": "A dish with a tender mouthfeel. Crab roe is stir-fried till the oil within oozes out before being added to boiled tofu and accented with broth.",
            "img": crabRoeTofuImage,
            "currency": moraImage,
            "price": "2,500",
            "rarity": twoStarImage
        },
        {
            "id":6,
            "name": "Squirrel Fish",
            "text": "Deboned fish with crisscross cuts on the skin. Coated in flour and deep-fried to a golden-brown color, then served with ketchup drizzled on top.",
            "img": squirrelFishImage,
            "currency": moraImage,
            "price": "5,000",
            "rarity": threeStarImage
        },
        {
            "id": 7,
            "name": "Universal Peace",
            "text": "A colorful staple dish that maintains a perfect balance between soft and fragrant rice mixed with all kinds of carefully selected sweet ingredients.",
            "img": universalPeaceImage,
            "currency": moraImage,
            "price": "5,000",
            "rarity": threeStarImage
        },
        {
            "id": 8,
            "name": "Minty Meat Rolls",
            "text": "The marinated meat has been thinly sliced and rolled into mint leaves, before being brushed with a sauce blend containing Jueyun Chilis.",
            "img": mintyMeatRollsImage,
            "currency": moraImage,
            "price": "5,000",
            "rarity": threeStarImage
        },
        {
            "id": 9,
            "name": "Dragon Beard Noodles",
            "text": "Noodles that are as slender as the hairs on a dragon's beard. The green onion is fried in a wok before the soup and condiments are added.",
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
        food.className = "food-image";
        foodContainer.appendChild(food);

        //create text for the name of each food
        const name = document.createElement("h2");
        name.textContent = foodArray[i].name;
        name.className = "food-name";
        foodContainer.appendChild(name);

        //create a text description for each foor
        const text = document.createElement("p");
        text.textContent = foodArray[i].text;
        text.className = "food-text";
        foodContainer.appendChild(text);

        //create a currency image for each foodContainer
        const currency = document.createElement("img");
        currency.src = foodArray[i].currency;
        currency.className = "food-currency";
        foodContainer.appendChild(currency);

        //create text for the price of each food
        const price = document.createElement("p");
        price.textContent = foodArray[i].price;
        price.className = "food-price";
        foodContainer.appendChild(price);

        //create an image for the rarity of each food
        const rarity = document.createElement("img");
        rarity.src = foodArray[i].rarity;
        rarity.className = "food-rarity";
        foodContainer.appendChild(rarity);

        //assign the rarity class to the foodContainer based on the value
        if(foodArray[i].rarity === oneStarImage){
            foodContainer.classList.add("one-star");
        } else if (foodArray[i].rarity === twoStarImage){
            foodContainer.classList.add("two-star");
        } else if(foodArray[i].rarity === threeStarImage){
            foodContainer.classList.add("three-star");
        }

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