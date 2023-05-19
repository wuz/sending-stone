import getCharacter from "./character/index.js";
// import getActions from "./features/actions.js";
// import getFeatures from "./features/features.js";
// import { removeActionFeatures } from "./features/special.js";
// import getClasses from "./classes/index.js";
// import { getCharacterSpells } from "./spells/getCharacterSpells.js";
// import { getItemSpells } from "./spells/getItemSpells.js";
// import getInventory from "./inventory/index.js";

export async function parseData(ddb) {
  try {
    let character = getCharacter({ character: ddb });
    // console.log("Character parse complete");
    // let race = await getDDBRace(ddb);
    // console.log("Race parse complete");
    // let features = [race, ...(await getFeatures(ddb, character))];
    // console.log("Feature parse complete");
    // let classes = getClasses(ddb, character);
    // console.log("Classes parse complete");
    // let spells = getCharacterSpells(ddb, character);
    // console.log("Character Spells parse complete");
    // let actions = await getActions(ddb, character);
    // console.log("Action parse complete");
    // let itemSpells = getItemSpells(ddb, character);
    // console.log("Item Spells parse complete");
    // let inventory = getInventory(ddb, character, itemSpells);
    // console.log("Inventory parse complete");

    // [actions, features] = removeActionFeatures(actions, features);

    let characterJSON = {
      character
      // features,
      // classes,
      // inventory,
      // spells,
      // actions,
      // itemSpells
    };

    return characterJSON;
  } catch (error) {
    console.error(error);
    console.error("Error during parse:", error.message);
    throw error;
  }
}
