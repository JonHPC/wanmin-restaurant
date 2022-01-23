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

function menuDiv() {
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    const grilledTigerFish = document.createElement("img");
    grilledTigerFish.src = grilledTigerFishImage;
    grilledTigerFish.id = "grilled-tiger-fish";
    menuContainer.appendChild(grilledTigerFish);

    const riceBuns = document.createElement("img");
    riceBuns.src = riceBunsImage;
    riceBuns.id = "rice-buns";
    menuContainer.appendChild(riceBuns);

    const jueyunChiliChicken = document.createElement("img");
    jueyunChiliChicken.src = jueyunChiliChickenImage;
    jueyunChiliChicken.id = "jueyun-chili-chicken";
    menuContainer.appendChild(jueyunChiliChicken);
    
    const crystalShrimp = document.createElement("img");
    crystalShrimp.src = crystalShrimpImage;
    crystalShrimp.id = "crystal-shrimp";
    menuContainer.appendChild(crystalShrimp);

    const mintSalad = document.createElement("img");
    mintSalad.src = mintSaladImage;
    mintSalad.id = "mint-salad";
    menuContainer.appendChild(mintSalad);

    const crabRoeTofu = document.createElement("img");
    crabRoeTofu.src = crabRoeTofuImage;
    crabRoeTofu.id = "crab-roe-tofu";
    menuContainer.appendChild(crabRoeTofu);

    const squirrelFish = document.createElement("img");
    squirrelFish.src = squirrelFishImage;
    squirrelFish.id = "squirrel-fish";
    menuContainer.appendChild(squirrelFish);

    const universalPeace = document.createElement("img");
    universalPeace.src = universalPeaceImage;
    universalPeace.id = "universal-peace";
    menuContainer.appendChild(universalPeace);

    const mintyMeatRolls = document.createElement("img");
    mintyMeatRolls.src = mintyMeatRollsImage;
    mintyMeatRolls.id = "minty-meat-rolls";
    menuContainer.appendChild(mintyMeatRolls);

    const dragonBeardNoodles = document.createElement("img");
    dragonBeardNoodles.src = dragonBeardNoodlesImage;
    dragonBeardNoodles.id = "dragon-beard-noodles";
    menuContainer.appendChild(dragonBeardNoodles);

    return menuContainer;

}

function menuPage() {
    const content = document.querySelector("#content");
    content.textContent = "";
    content.appendChild(menuDiv());
}

export default menuPage;