import DICTIONARY from "../dictionary.js";
import * as utils from "../utils.js";
import { getAllClassFeatures } from "./filterModifiers.js";

/**
 * This excludes shields
 * @param {} data
 */
export function isArmored(data) {
  return (
    data.character.inventory.filter(
      (item) =>
        item.equipped &&
        item.definition.armorClass &&
        item.definition.armorTypeId !== 4
    ).length >= 1
  );
}

function getMinimumBaseAC(modifiers) {
  let hasBaseArmor = modifiers.filter(
    (modifier) =>
      modifier.type === "set" &&
      modifier.subType === "minimum-base-armor" &&
      modifier.isGranted
  );
  let baseAC = [];
  hasBaseArmor.forEach((base) => {
    baseAC.push(base.value);
  });
  return baseAC;
}

function getBaseArmor(ac, armorType, name = "Racial") {
  return {
    definition: {
      name: `Base Armor - ${name}`,
      type: armorType,
      armorClass: ac,
      armorTypeId: DICTIONARY.equipment.armorType.find(
        (id) => id.name === armorType
      ).id,
      grantedModifiers: [],
      canAttune: false,
      filterType: "Armor"
    },
    isAttuned: false
  };
}

function getEquippedAC(equippedGear) {
  return equippedGear.reduce((prev, item) => {
    let ac = 0;
    // regular armor
    if (item.definition.armorClass) {
      ac += item.definition.armorClass;
    }

    if (item.definition.grantedModifiers) {
      let isAvailable = false;
      // does an item need attuning
      if (item.definition.canAttune === true) {
        if (item.isAttuned === true) {
          isAvailable = true;
        }
      } else {
        isAvailable = true;
      }

      if (isAvailable) {
        item.definition.grantedModifiers.forEach((modifier) => {
          if (modifier.type === "bonus" && modifier.subType === "armor-class") {
            // add this to armor AC
            ac += modifier.value;
          }
        });
      }
    }
    return prev + ac;
  }, 0);
}

// returns an array of ac values from provided array of modifiers
function getUnarmoredAC(modifiers, character) {
  const characterAbilities = character.abilities;
  let unarmoredACValues = [];
  let isUnarmored = modifiers.filter(
    (modifier) =>
      modifier.type === "set" &&
      modifier.subType === "unarmored-armor-class" &&
      modifier.isGranted
  );
  // if (isUnarmored.length === 0) {
  //   // Some items will have an unarmoured bonus, but won't set a base, so if we are in this
  //   // situation, we add a default base ac
  //   isUnarmored.push({
  //     statId: 2,
  //     value: 0,
  //   });
  // }

  const ignoreDex = modifiers.some(
    (modifier) =>
      modifier.type === "ignore" &&
      modifier.subType === "unarmored-dex-ac-bonus"
  );

  const maxUnamoredDexMods = modifiers
    .filter(
      (modifier) =>
        modifier.type === "set" &&
        modifier.subType === "ac-max-dex-modifier" &&
        modifier.isGranted
    )
    .map((mods) => mods.value);
  const maxUnamoredDexMod = ignoreDex ? 0 : Math.min(...maxUnamoredDexMods, 20);

  isUnarmored.forEach((unarmored) => {
    let unarmoredACValue = 10;
    // +DEX
    // for a case of setting unarmoured ac, the dex won't detract
    unarmoredACValue += Math.max(
      0,
      Math.min(characterAbilities.dex.mod, maxUnamoredDexMod)
    );
    // +WIS or +CON, if monk or barbarian, draconic resilience === null

    // console.log(`Unarmoured AC Value: ${unarmoredACValue}`);
    // console.log(unarmored);

    if (unarmored.statId !== null) {
      let ability = DICTIONARY.character.abilities.find(
        (ability) => ability.id === unarmored.statId
      );
      unarmoredACValue += characterAbilities[ability.value].mod;
    }
    if (unarmored.value) unarmoredACValue += unarmored.value;
    unarmoredACValues.push(unarmoredACValue);
  });
  // console.warn(unarmoredACValues);
  return unarmoredACValues;
}

// returns an array of ac values from provided array of modifiers
function getArmoredACBonuses(modifiers, character) {
  let armoredACBonuses = [];
  const armoredBonuses = modifiers.filter(
    (modifier) =>
      modifier.subType === "armored-armor-class" && modifier.isGranted
  );

  armoredBonuses.forEach((armoredBonus) => {
    let armoredACBonus = 0;
    if (armoredBonus.statId !== null) {
      let ability = DICTIONARY.character.abilities.find(
        (ability) => ability.id === armoredBonus.statId
      );
      armoredACBonus += characterAbilities[ability.value].mod;
    } else {
      armoredACBonus += armoredBonus.value;
    }
    armoredACBonuses.push(armoredACBonus);
  });
  return armoredACBonuses;
}

function getDualWieldAC(data, modifiers) {
  const dualWielding = data.character.characterValues.some((cv) => {
    const equipped = data.character.inventory.some(
      (item) => item.equipped && item.id == cv.valueId
    );
    const dualWielding = cv.typeId === 18;
    return equipped && dualWielding;
  });
  let dualWieldBonus = 0;

  if (dualWielding) {
    utils
      .filterModifiers(
        modifiers,
        "bonus",
        "dual-wield-armor-class",
        ["", null],
        true
      )
      .forEach((bonus) => {
        dualWieldBonus += bonus.value;
      });
  }

  return dualWieldBonus;
}

// eslint-disable-next-line complexity
function calculateACOptions(data, character, calculatedArmor) {
  const characterAbilities = character.abilities;
  let actorBase = 10 + characterAbilities.dex.mod;
  // array to assemble possible AC values
  let armorClassValues = [];
  // max holders
  let maxType = "Unarmored";
  let maxValue = actorBase;

  // the presumption here is that you can only wear a shield and a single
  // additional 'armor' piece. in DDB it's possible to equip multiple armor
  // types and it works out the best AC for you
  // we also want to handle unarmored for monks etc.
  // we might have multiple shields "equipped" by accident, so work out
  // the best one
  for (var armor = 0; armor < calculatedArmor.armors.length; armor++) {
    // getEquippedAC fetches any magical AC boost on the items passed
    let armorAC = getEquippedAC([calculatedArmor.armors[armor]]);
    let shieldMod = 0;

    if (calculatedArmor.shields.length !== 0) {
      let maxAC = armorAC;
      for (var shield = 0; shield < calculatedArmor.shields.length; shield++) {
        const combinedAC = getEquippedAC([
          calculatedArmor.armors[armor],
          calculatedArmor.shields[shield]
        ]);
        if (combinedAC > maxAC) {
          shieldMod = combinedAC - armorAC;
          maxAC = combinedAC;
        }
      }
      armorAC = maxAC;
    }

    // Determine final AC values based on AC Type
    // Light Armor: AC + DEX
    // Medium Armor: AC + DEX (max 2)
    // Heavy Armor: AC only
    // Unarmored Defense: Dex mod already included in calculation

    // sometimes the type field can be blank in DDB
    if (
      !calculatedArmor.armors[armor].definition.type ||
      calculatedArmor.armors[armor].definition.type === ""
    ) {
      const armourTypeId = calculatedArmor.armors[armor].definition.armorTypeId;
      const acType = DICTIONARY.equipment.armorType.find(
        (a) => a.id === armourTypeId
      );
      if (acType) calculatedArmor.armors[armor].definition.type = acType.name;
    }
    let acValue;

    switch (calculatedArmor.armors[armor].definition.type) {
      case "Natural Armor": {
        let acCalc = 0;
        // Tortles don't get to add an unarmored ac bonus for their shell
        const ignoreUnarmouredACBonus = utils.filterBaseModifiers(
          data,
          "ignore",
          "unarmored-dex-ac-bonus"
        );
        if (ignoreUnarmouredACBonus) {
          acCalc = armorAC + calculatedArmor.miscACBonus;
          // console.log(armorAC);
          // console.log(gearAC);
          // console.log(miscACBonus);
        } else {
          acCalc =
            armorAC +
            calculatedArmor.miscACBonus +
            calculatedArmor.unarmoredACBonus;
        }
        acValue = {
          name: calculatedArmor.armors[armor].definition.name,
          value: acCalc + calculatedArmor.gearAC,
          type: "Natural",
          acCalc,
          shieldMod
        };
        if (acCalc > actorBase) actorBase = acCalc - shieldMod;
        break;
      }
      case "Unarmored Defense": {
        const acCalc =
          armorAC +
          calculatedArmor.miscACBonus +
          calculatedArmor.unarmoredACBonus;
        acValue = {
          name: calculatedArmor.armors[armor].definition.name,
          value: acCalc + calculatedArmor.gearAC,
          type: "Unarmored Defense",
          acCalc,
          shieldMod
        };
        if (acCalc > actorBase) actorBase = acCalc - shieldMod;
        break;
      }
      case "Unarmored": {
        const base =
          armorAC +
          calculatedArmor.miscACBonus +
          calculatedArmor.unarmoredACBonus;
        const acCalc = base + characterAbilities.dex.mod;
        acValue = {
          name: calculatedArmor.armors[armor].definition.name,
          value: acCalc + calculatedArmor.gearAC,
          type: "Unarmored",
          acCalc,
          shieldMod
        };
        if (acCalc > actorBase) actorBase = acCalc - shieldMod;
        break;
      }
      case "Heavy Armor": {
        const acCalc =
          armorAC + calculatedArmor.gearAC + calculatedArmor.miscACBonus;
        acValue = {
          name: calculatedArmor.armors[armor].definition.name,
          value: acCalc,
          type: "Heavy",
          acCalc,
          shieldMod
        };
        break;
      }
      case "Medium Armor": {
        const maxDexMedium = Math.max(
          ...utils
            .filterBaseModifiers(
              data,
              "set",
              "ac-max-dex-armored-modifier",
              ["", null],
              true
            )
            .map((mod) => mod.value),
          2
        );
        const acCalc =
          armorAC + calculatedArmor.gearAC + calculatedArmor.miscACBonus;
        acValue = {
          name: calculatedArmor.armors[armor].definition.name,
          value: acCalc + Math.min(maxDexMedium, characterAbilities.dex.mod),
          type: "Medium",
          acCalc,
          shieldMod
        };
        break;
      }
      case "Light Armor": {
        const acCalc =
          armorAC + calculatedArmor.gearAC + calculatedArmor.miscACBonus;
        acValue = {
          name: calculatedArmor.armors[armor].definition.name,
          value: acCalc + characterAbilities.dex.mod,
          type: "Light",
          acCalc,
          shieldMod
        };
        break;
      }
      default: {
        const acCalc =
          armorAC + calculatedArmor.gearAC + calculatedArmor.miscACBonus;
        acValue = {
          name: calculatedArmor.armors[armor].definition.name,
          value: acCalc + characterAbilities.dex.mod,
          type: "Other",
          acCalc,
          shieldMod
        };
        break;
      }
    }
    armorClassValues.push(acValue);
    if (acValue.value >= maxValue) {
      maxType = acValue.type;
      maxValue = acValue.value;
    }
  }

  console.log("Final AC Choices:", armorClassValues);
  return {
    actorBase,
    armorClassValues,
    maxType,
    maxValue
  };
}

export function getArmorClass(ddb, character) {
  const overRideAC = ddb.character.characterValues.find(
    (val) => val.typeId === 1
  );

  if (overRideAC) {
    return {
      fixed: {
        type: "Number",
        label: "Armor Class",
        value: overRideAC.value
      },
      base: overRideAC.value,
      override: {
        flat: overRideAC.value,
        calc: "default",
        formula: ""
      },
      auto: {
        flat: overRideAC.value,
        calc: "default",
        formula: ""
      }
    };
  }

  // get a list of equipped armor
  // we make a distinction so we can loop over armor
  let equippedArmor = ddb.character.inventory.filter(
    (item) => item.equipped && item.definition.filterType === "Armor"
  );
  let baseAC = 10;
  // for things like fighters fighting style
  let miscACBonus = 0;
  // lets get equipped gear
  const equippedGear = ddb.character.inventory.filter(
    (item) => item.equipped && item.definition.filterType !== "Armor"
  );
  const unarmoredACBonus = utils
    .filterBaseModifiers(ddb, "bonus", "unarmored-armor-class")
    .reduce((prev, cur) => prev + cur.value, 0);

  // lets get the AC for all our non-armored gear, we'll add this later
  const gearAC = getEquippedAC(equippedGear);

  // While not wearing armor, lets see if we have special abilities
  if (!isArmored(ddb)) {
    // unarmored abilities from Class/Race?
    const unarmoredSources = [
      utils.getChosenClassModifiers(ddb),
      ddb.character.modifiers.race,
      ddb.character.modifiers.feat,
      utils.getActiveItemModifiers(ddb, true)
    ];
    unarmoredSources.forEach((modifiers) => {
      const unarmoredAC = Math.max(getUnarmoredAC(modifiers, character));
      if (unarmoredAC) {
        // we add this as an armored type so we can get magical item bonuses
        // e.g. ring of protection
        equippedArmor.push(
          getBaseArmor(unarmoredAC, "Unarmored Defense", "Unarmored defense")
        );
      }
    });
  } else {
    // check for things like fighters fighting style defense
    const armorBonusSources = [
      utils.getChosenClassModifiers(ddb),
      ddb.character.modifiers.race
    ];
    armorBonusSources.forEach((modifiers) => {
      const armoredACBonuses = getArmoredACBonuses(modifiers, character);
      miscACBonus += armoredACBonuses.reduce((a, b) => a + b, 0);
    });
  }

  // Generic AC bonuses like Warforfed Integrated Protection
  // item modifiers are loaded by ac calcs
  const miscModifiers = [
    utils.getChosenClassModifiers(ddb),
    ddb.character.modifiers.race,
    ddb.character.modifiers.background,
    ddb.character.modifiers.feat
  ];

  utils
    .filterModifiers(miscModifiers, "bonus", "armor-class", ["", null], true)
    .forEach((bonus) => {
      miscACBonus += bonus.value;
    });

  miscACBonus += ddb.character.characterValues
    .filter((value) => value.typeId === 3 || value.typeId === 2)
    .map((val) => val.value)
    .reduce((a, b) => a + b, 0);

  miscACBonus += getDualWieldAC(ddb, miscModifiers);

  // Each racial armor appears to be slightly different!
  // We care about Tortles and Lizardfolk here as they can use shields, but their
  // modifier is set differently
  switch (ddb.character.race.fullName) {
    case "Lizardfolk":
      baseAC = Math.max(
        getUnarmoredAC(ddb.character.modifiers.race, character)
      );
      equippedArmor.push(
        getBaseArmor(baseAC, "Natural Armor", ddb.character.race.fullName)
      );
      break;
    case "Loxodon":
    case "Tortle":
      baseAC = Math.max(
        getMinimumBaseAC(ddb.character.modifiers.race, character),
        getUnarmoredAC(ddb.character.modifiers.race, character)
      );
      equippedArmor.push(
        getBaseArmor(baseAC, "Natural Armor", ddb.character.race.fullName)
      );
      break;
    default:
      equippedArmor.push(getBaseArmor(baseAC, "Unarmored"));
  }

  const shields = equippedArmor.filter(
    (shield) => shield.definition.armorTypeId === 4
  );
  const armors = equippedArmor.filter(
    (armour) => armour.definition.armorTypeId !== 4
  );

  console.log("Calculated GearAC: " + gearAC);
  console.log("Unarmoured AC Bonus:" + unarmoredACBonus);
  console.log("Calculated MiscACBonus: " + miscACBonus);
  console.log("Equipped AC Options: ", equippedArmor);
  console.log("Armors: ", armors);
  console.log("Shields: ", shields);

  const calculatedArmor = {
    gearAC,
    unarmoredACBonus,
    miscACBonus,
    equippedArmor,
    armors,
    shields
  };
  const results = calculateACOptions(ddb, character, calculatedArmor);

  console.log("Final AC Results:", results);
  // get the max AC we can use from our various computed values
  // const max = Math.max(...results.armorClassValues.map((type) => type.value));

  const classFeatures = getAllClassFeatures(ddb.character);

  let calc = "default";
  let flat = null;
  if (
    classFeatures.some(
      (kf) =>
        kf.className === "Sorcerer" &&
        kf.subclassName === "Draconic Bloodline" &&
        kf.name === "Draconic Resilience"
    )
  )
    calc = "draconic";

  if (
    classFeatures.some(
      (kf) =>
        kf.className === "Monk" &&
        kf.subclassName === null &&
        kf.name === "Unarmored Defense"
    )
  )
    calc = "unarmoredMonk";

  if (
    classFeatures.some(
      (kf) =>
        kf.className === "Barbarian" &&
        kf.subclassName === null &&
        kf.name === "Unarmored Defense"
    )
  )
    calc = "unarmoredBarb";

  if (results.maxType === "Natural") {
    calc = "natural";
    flat = results.actorBase;
  }

  const acResults = {
    fixed: {
      type: "Number",
      label: "Armor Class",
      value: results.maxValue
    },
    base: results.actorBase,
    override: {
      flat: results.maxValue,
      calc: "default",
      formula: ""
    },
    auto: {
      flat,
      calc,
      formula: ""
    }
  };
  console.log("AC Results:", acResults);

  return acResults;
}
