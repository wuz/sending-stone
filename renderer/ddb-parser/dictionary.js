const DICTIONARY = {
  types: {
    equipment: ["equipment", "consumable", "tool", "loot", "backpack"],
    inventory: [
      "equipment",
      "consumable",
      "tool",
      "loot",
      "backpack",
      "weapon"
    ],
    monster: [
      "equipment",
      "consumable",
      "tool",
      "loot",
      "backpack",
      "weapon",
      "feat"
    ]
  },
  numbers: [
    { num: 1, natural: "a" },
    { num: 1, natural: "one" },
    { num: 2, natural: "two" },
    { num: 3, natural: "three" },
    { num: 4, natural: "four" },
    { num: 5, natural: "five" },
    { num: 6, natural: "six" },
    { num: 7, natural: "seven" },
    { num: 8, natural: "eight" },
    { num: 9, natural: "nine" },
    { num: 10, natural: "ten" },
    { num: 11, natural: "eleven" },
    { num: 12, natural: "twelve" },
    { num: 13, natural: "thirteen" },
    { num: 14, natural: "fourteen" },
    { num: 15, natural: "fifteen" },
    { num: 16, natural: "sixteen" },
    { num: 17, natural: "seventeen" },
    { num: 18, natural: "eighteen" },
    { num: 19, natural: "nineteen" },
    { num: 20, natural: "twenty" }
  ],
  magicitems: {
    rechargeUnits: [
      { id: 1, value: "r4" },
      { id: "ShortRest", value: "r4" },
      { id: 2, value: "r5" },
      { id: "LongRest", value: "r5" },
      { id: "Dawn", value: "r2" },
      { id: "Dusk", value: "r3" },
      { id: "Sunset", value: "r3" },
      { id: "Consumable", value: "" },
      { id: "Other", value: "" },
      { id: "Daily", value: "r1" },
      { id: "sr", value: "r4" },
      { id: "lr", value: "r5" }
    ],
    nums: [
      { id: "once", value: 1 },
      { id: "twice", value: 2 },
      { id: "thrice", value: 3 },
      { id: "one", value: 1 },
      { id: "two", value: 2 },
      { id: "three", value: 3 }
    ]
  },
  resets: [
    { id: 1, value: "sr" },
    { id: "ShortRest", value: "sr" },
    { id: "Short", value: "sr" },
    { id: "short", value: "sr" },
    { id: 2, value: "lr" },
    { id: "LongRest", value: "lr" },
    { id: "Long", value: "lr" },
    { id: "long", value: "lr" },
    { id: "Day", value: "day" },
    { id: "day", value: "day" },
    { id: "Dawn", value: "day" },
    { id: "dusk", value: "day" },
    { id: "Consumable", value: "charges" },
    { id: "Other", value: "charges" },
    { id: "", value: "" },
    { id: null, value: "" },
    { id: 3, value: "day" },
    { id: 4, value: "charges" }
  ],
  character: {
    abilities: [
      { id: 1, value: "str", long: "strength" },
      { id: 2, value: "dex", long: "dexterity" },
      { id: 3, value: "con", long: "constitution" },
      { id: 4, value: "int", long: "intelligence" },
      { id: 5, value: "wis", long: "wisdom" },
      { id: 6, value: "cha", long: "charisma" }
    ],
    skills: [
      {
        name: "acr",
        label: "Acrobatics",
        ability: "dex",
        subType: "acrobatics",
        valueId: 3
      },
      {
        name: "ani",
        label: "Animal Handling",
        ability: "wis",
        subType: "animal-handling",
        valueId: 11
      },
      {
        name: "arc",
        label: "Arcana",
        ability: "int",
        subType: "arcana",
        valueId: 6
      },
      {
        name: "ath",
        label: "Athletics",
        ability: "str",
        subType: "athletics",
        valueId: 2
      },
      {
        name: "dec",
        label: "Deception",
        ability: "cha",
        subType: "deception",
        valueId: 16
      },
      {
        name: "his",
        label: "History",
        ability: "int",
        subType: "history",
        valueId: 7
      },
      {
        name: "ins",
        label: "Insight",
        ability: "wis",
        subType: "insight",
        valueId: 12
      },
      {
        name: "itm",
        label: "Intimidation",
        ability: "cha",
        subType: "intimidation",
        valueId: 17
      },
      {
        name: "inv",
        label: "Investigation",
        ability: "int",
        subType: "investigation",
        valueId: 8
      },
      {
        name: "med",
        label: "Medicine",
        ability: "wis",
        subType: "medicine",
        valueId: 13
      },
      {
        name: "nat",
        label: "Nature",
        ability: "int",
        subType: "nature",
        valueId: 9
      },
      {
        name: "prc",
        label: "Perception",
        ability: "wis",
        subType: "perception",
        valueId: 14
      },
      {
        name: "prf",
        label: "Performance",
        ability: "cha",
        subType: "performance",
        valueId: 18
      },
      {
        name: "per",
        label: "Persuasion",
        ability: "cha",
        subType: "persuasion",
        valueId: 19
      },
      {
        name: "rel",
        label: "Religion",
        ability: "int",
        subType: "religion",
        valueId: 10
      },
      {
        name: "slt",
        label: "Sleight of Hand",
        ability: "dex",
        subType: "sleight-of-hand",
        valueId: 4
      },
      {
        name: "ste",
        label: "Stealth",
        ability: "dex",
        subType: "stealth",
        valueId: 5
      },
      {
        name: "sur",
        label: "Survival",
        ability: "wis",
        subType: "survival",
        valueId: 15
      }
    ],
    customSkillProficiencies: [
      // typeId:26
      // value not: 1, half 2, prof: 3, expertise 4
      { value: 1, proficient: 0 },
      { value: 2, proficient: 0.5 },
      { value: 3, proficient: 1 },
      { value: 4, proficient: 2 }
    ],
    alignments: [
      { id: 1, name: "Lawful Good", value: "lg" },
      { id: 2, name: "Neutral Good", value: "ng" },
      { id: 3, name: "Chaotic Good", value: "cg" },
      { id: 4, name: "Lawful Neutral", value: "ln" },
      { id: 5, name: "True Neutral", value: "tn" },
      { id: 6, name: "Chaotic Neutral", value: "cn" },
      { id: 7, name: "Lawful Evil", value: "le" },
      { id: 8, name: "Neutral Evil", value: "ne" },
      { id: 9, name: "Chaotic Evil", value: "ce" }
    ],
    actorSizes: [
      { id: 2, name: "Tiny", value: "tiny" }, // wild guess
      { id: 3, name: "Small", value: "sm" }, // consistent
      { id: 4, name: "Medium", value: "med" }, // consistent
      { id: 5, name: "Large", value: "lg" }, // wild guess
      { id: 6, name: "Huge", value: "huge" }, // wild guess
      { id: 7, name: "Gargantuan", value: "grg" } // wild guess
    ],
    senses: [
      { id: 1, name: "Blindsight" },
      { id: 2, name: "Darkvision" },
      { id: 3, name: "Tremorsense" },
      { id: 4, name: "Truesight" }
    ],
    speeds: [
      { id: 1, type: "walk", innate: "walking" },
      { id: 2, type: "burrow", innate: "burrowing" },
      { id: 3, type: "climb", innate: "climbing" },
      { id: 4, type: "fly", innate: "flying" },
      { id: 5, type: "swim", innate: "swimming" }
    ],
    languages: [
      { name: "Common", value: "common" },
      { name: "Aarakocra", value: "aarakocra" },
      { name: "Abyssal", value: "abyssal" },
      { name: "Aquan", value: "aquan" },
      { name: "Auran", value: "auran" },
      { name: "Celestial", value: "celestial" },
      { name: "Deep Speech", value: "deep" },
      { name: "Draconic", value: "draconic" },
      { name: "Druidic", value: "druidic" },
      { name: "Dwarvish", value: "dwarvish" },
      { name: "Elvish", value: "elvish" },
      { name: "Giant", value: "giant" },
      { name: "Gith", value: "gith" },
      { name: "Gnomish", value: "gnomish" },
      { name: "Goblin", value: "goblin" },
      { name: "Gnoll", value: "gnoll" },
      { name: "Halfling", value: "halfling" },
      { name: "Ignan", value: "ignan" },
      { name: "Infernal", value: "infernal" },
      { name: "Orc", value: "orc" },
      { name: "Primordial", value: "primordial" },
      { name: "Terran", value: "terran" },
      { name: "Sylvan", value: "sylvan" },
      { name: "Thieves' Cant", value: "cant" },
      { name: "Thieves’ Cant", value: "cant" },
      { name: "Undercommon", value: "undercommon" }
    ],
    armorTypes: [
      { name: "Clothing", value: "clothing" },
      { name: "Light Armor", value: "light" },
      { name: "Medium Armor", value: "medium" },
      { name: "Heavy Armor", value: "heavy" },
      { name: "Magical Bonus", value: "bonus" },
      { name: "Natural Armor", value: "natural" },
      { name: "Shield", value: "shield" }
    ],
    damageTypes: [
      {
        id: 1,
        type: 2,
        kind: "resistance",
        name: "Bludgeoning",
        value: "bludgeoning"
      },
      {
        id: 2,
        type: 2,
        kind: "resistance",
        name: "Piercing",
        value: "piercing"
      },
      {
        id: 3,
        type: 2,
        kind: "resistance",
        name: "Slashing",
        value: "slashing"
      },
      {
        id: 4,
        type: 2,
        kind: "resistance",
        name: "Lightning",
        value: "lightning"
      },
      { id: 5, type: 2, kind: "resistance", name: "Thunder", value: "thunder" },
      { id: 6, type: 2, kind: "resistance", name: "Poison", value: "poison" },
      { id: 7, type: 2, kind: "resistance", name: "Cold", value: "cold" },
      { id: 8, type: 2, kind: "resistance", name: "Radiant", value: "radiant" },
      { id: 9, type: 2, kind: "resistance", name: "Fire", value: "fire" },
      {
        id: 10,
        type: 2,
        kind: "resistance",
        name: "Necrotic",
        value: "necrotic"
      },
      { id: 11, type: 2, kind: "resistance", name: "Acid", value: "acid" },
      {
        id: 12,
        type: 2,
        kind: "resistance",
        name: "Psychic",
        value: "psychic"
      },
      {
        id: 13,
        type: 2,
        kind: "resistance",
        name: "Physical",
        value: "bludgeoning-piercing-and-slashing-from-nonmagical-weapons",
        foundryValue: "physical"
      },
      {
        id: 14,
        type: 2,
        kind: "resistance",
        name: "Physical",
        value:
          "bludgeoning-piercing-and-slashing-from-nonmagical-attacks-that-arent-silvered",
        foundryValue: "physical"
      },
      {
        id: 15,
        type: 2,
        kind: "resistance",
        name: "Physical",
        value:
          "bludgeoning-piercing-and-slashing-from-nonmagical-attacks-that-arent-adamantine",
        foundryValue: "physical"
      },
      // { id: 16, type: 2, kind: "resistance", name: "Physical", value: "piercing-and-slashing-from-nonmagical-attacks-that-arent-adamantine", foundryValue: "physical" },
      {
        id: 17,
        type: 2,
        kind: "immunity",
        name: "Bludgeoning",
        value: "bludgeoning"
      },
      {
        id: 18,
        type: 2,
        kind: "immunity",
        name: "Piercing",
        value: "piercing"
      },
      {
        id: 19,
        type: 2,
        kind: "immunity",
        name: "Slashing",
        value: "slashing"
      },
      {
        id: 20,
        type: 2,
        kind: "immunity",
        name: "Lightning",
        value: "lightning"
      },
      { id: 21, type: 2, kind: "immunity", name: "Thunder", value: "thunder" },
      { id: 22, type: 2, kind: "immunity", name: "Poison", value: "poison" },
      { id: 23, type: 2, kind: "immunity", name: "Cold", value: "cold" },
      { id: 24, type: 2, kind: "immunity", name: "Radiant", value: "radiant" },
      { id: 25, type: 2, kind: "immunity", name: "Fire", value: "fire" },
      {
        id: 26,
        type: 2,
        kind: "immunity",
        name: "Necrotic",
        value: "necrotic"
      },
      { id: 27, type: 2, kind: "immunity", name: "Acid", value: "acid" },
      { id: 28, type: 2, kind: "immunity", name: "Psychic", value: "psychic" },
      {
        id: 29,
        type: 2,
        kind: "immunity",
        name: "Physical",
        value: "bludgeoning-piercing-and-slashing-from-nonmagical-weapons",
        foundryValue: "physical"
      },
      {
        id: 30,
        type: 2,
        kind: "immunity",
        name: "Physical",
        value:
          "bludgeoning-piercing-and-slashing-from-nonmagical-attacks-that-arent-silvered",
        foundryValue: "physical"
      },
      {
        id: 31,
        type: 2,
        kind: "immunity",
        name: "Physical",
        value:
          "bludgeoning-piercing-and-slashing-from-nonmagical-attacks-that-arent-adamantine",
        foundryValue: "physical"
      },
      // { id: 32, type: 2, kind: "immunity", name: "Physical", value: "piercing-and-slashing-from-nonmagical-attacks-that-arent-adamantine", foundryValue: "physical" },
      {
        id: 33,
        type: 2,
        kind: "vulnerability",
        name: "Bludgeoning",
        value: "bludgeoning"
      },
      {
        id: 34,
        type: 2,
        kind: "vulnerability",
        name: "Piercing",
        value: "piercing"
      },
      {
        id: 35,
        type: 2,
        kind: "vulnerability",
        name: "Slashing",
        value: "slashing"
      },
      {
        id: 36,
        type: 2,
        kind: "vulnerability",
        name: "Lightning",
        value: "lightning"
      },
      {
        id: 37,
        type: 2,
        kind: "vulnerability",
        name: "Thunder",
        value: "thunder"
      },
      {
        id: 38,
        type: 2,
        kind: "vulnerability",
        name: "Poison",
        value: "poison"
      },
      { id: 39, type: 2, kind: "vulnerability", name: "Cold", value: "cold" },
      {
        id: 40,
        type: 2,
        kind: "vulnerability",
        name: "Radiant",
        value: "radiant"
      },
      { id: 41, type: 2, kind: "vulnerability", name: "Fire", value: "fire" },
      {
        id: 42,
        type: 2,
        kind: "vulnerability",
        name: "Necrotic",
        value: "necrotic"
      },
      { id: 43, type: 2, kind: "vulnerability", name: "Acid", value: "acid" },
      {
        id: 44,
        type: 2,
        kind: "vulnerability",
        name: "Psychic",
        value: "psychic"
      },

      { id: 47, type: 2, kind: "resistance", name: "Force", value: "force" },
      { id: 48, type: 2, kind: "immunity", name: "Force", value: "force" },
      { id: 49, type: 2, kind: "vulnerability", name: "Force", value: "force" },
      { id: 51, type: 2, kind: "resistance", name: "Ranged attacks" },
      { id: 52, type: 2, kind: "resistance", name: "Damage dealt by traps" },
      {
        id: 54,
        type: 2,
        kind: "resistance",
        name: "Bludgeoning from non magical attacks"
      },

      { id: 1, type: 1, kind: "immunity", name: "Blinded", value: "blinded" },
      { id: 2, type: 1, kind: "immunity", name: "Charmed", value: "charmed" },
      { id: 3, type: 1, kind: "immunity", name: "Deafened", value: "deafened" },
      {
        id: 4,
        type: 1,
        kind: "immunity",
        name: "Exhaustion",
        value: "exhaustion"
      },
      {
        id: 5,
        type: 1,
        kind: "immunity",
        name: "Frightened",
        value: "frightened"
      },
      { id: 6, type: 1, kind: "immunity", name: "Grappled", value: "grappled" },
      {
        id: 7,
        type: 1,
        kind: "immunity",
        name: "Incapacitated",
        value: "incapacitated"
      },
      {
        id: 8,
        type: 1,
        kind: "immunity",
        name: "Invisible",
        value: "invisible"
      },
      {
        id: 9,
        type: 1,
        kind: "immunity",
        name: "Paralyzed",
        value: "paralyzed"
      },
      {
        id: 10,
        type: 1,
        kind: "immunity",
        name: "Petrified",
        value: "petrified"
      },
      {
        id: 11,
        type: 1,
        kind: "immunity",
        name: "Poisoned",
        value: "poisoned"
      },
      { id: 12, type: 1, kind: "immunity", name: "Prone", value: "prone" },
      {
        id: 13,
        type: 1,
        kind: "immunity",
        name: "Restrained",
        value: "restrained"
      },
      { id: 14, type: 1, kind: "immunity", name: "Stunned", value: "stunned" },
      {
        id: 15,
        type: 1,
        kind: "immunity",
        name: "Unconscious",
        value: "unconscious"
      },
      // In DDB it is disease, but in FVTT ut is diseased
      {
        id: 16,
        type: 1,
        kind: "immunity",
        name: "Diseased",
        value: "disease",
        foundryValue: "diseased"
      }
    ],
    proficiencies: [
      // Armor
      { name: "Studded Leather", type: "Armor", subType: "Light Armor" },
      { name: "Scale Mail", type: "Armor", subType: "Medium Armor" },
      { name: "Shield", type: "Armor", subType: "Shield" },
      { name: "Padded", type: "Armor", subType: "Light Armor" },
      { name: "Leather", type: "Armor", subType: "Light Armor" },
      { name: "Hide", type: "Armor", subType: "Medium Armor" },
      { name: "Chain Shirt", type: "Armor", subType: "Medium Armor" },
      { name: "Breastplate", type: "Armor", subType: "Medium Armor" },
      { name: "Half Plate", type: "Armor", subType: "Medium Armor" },
      { name: "Ring Mail", type: "Armor", subType: "Heavy Armor" },
      { name: "Chain Mail", type: "Armor", subType: "Heavy Armor" },
      { name: "Splint", type: "Armor", subType: "Heavy Armor" },
      { name: "Plate", type: "Armor", subType: "Heavy Armor" },
      { name: "Spiked Armor", type: "Armor", subType: "Medium Armor" },

      // Weapons
      {
        name: "Crossbow, Hand",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Glaive",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Dagger",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Longsword",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Club",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Greatclub",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Handaxe",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Javelin",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Light Hammer",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Mace",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Quarterstaff",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Sickle",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Spear",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Crossbow, Light",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Dart",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Shortbow",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Sling",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Battleaxe",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Flail",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Greataxe",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Greatsword",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Halberd",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Lance",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Maul",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Morningstar",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Pike",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Rapier",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Scimitar",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Shortsword",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Trident",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "War Pick",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Warhammer",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Whip",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Blowgun",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Crossbow, Heavy",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Longbow",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Net",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Boomerang",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Yklwa",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },
      {
        name: "Pistol",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Musket",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Pistol, Automatic",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Revolver",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Rifle, Hunting",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Rifle, Automatic",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Shotgun",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Laser Pistol",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Antimatter Rifle",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Laser Rifle",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Double-Bladed Scimitar",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Revenant Double-Bladed Scimitar",
        type: "Weapon",
        subType: "Martial Weapon",
        foundryValue: ""
      },
      {
        name: "Ammunition",
        type: "Weapon",
        subType: "Simple Weapon",
        foundryValue: ""
      },

      // Tools and Instruments and Stuff
      {
        name: "Carpenter's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "carpenter",
        toolType: "art"
      },
      {
        name: "Cartographer's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "cartographer",
        toolType: "art"
      },
      {
        name: "Cobbler's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "cobbler",
        toolType: "art"
      },
      {
        name: "Cook's Utensils",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "wis",
        baseTool: "cook",
        toolType: "art"
      },
      {
        name: "Glassblower's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "glassblower",
        toolType: "art"
      },
      {
        name: "Jeweler's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "jeweler",
        toolType: "art"
      },
      {
        name: "Leatherworker's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "leatherworker",
        toolType: "art"
      },
      {
        name: "Mason's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "mason",
        toolType: "art"
      },
      {
        name: "Navigator's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "int",
        baseTool: "navg",
        toolType: ""
      },
      {
        name: "Potter's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "potter",
        toolType: "art"
      },
      {
        name: "Smith's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "smith",
        toolType: "art"
      },
      {
        name: "Thieves' Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "thief",
        toolType: ""
      },
      {
        name: "Tinker's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "tinker",
        toolType: "art"
      },
      {
        name: "Weaver's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "weaver",
        toolType: "art"
      },
      {
        name: "Woodcarver's Tools",
        type: "Tool",
        subType: "Artisan's Tools",
        ability: "dex",
        baseTool: "woodcarver",
        toolType: "art"
      },
      {
        name: "Dice Set",
        type: "Tool",
        subType: "Gaming Set",
        ability: "int",
        baseTool: "dice",
        toolType: "game"
      },
      {
        name: "Dragonchess Set",
        type: "Tool",
        subType: "Gaming Set",
        ability: "int",
        baseTool: "chess",
        toolType: "game"
      },
      {
        name: "Playing Card Set",
        type: "Tool",
        subType: "Gaming Set",
        ability: "int",
        baseTool: "card",
        toolType: "game"
      },
      {
        name: "Three-Dragon Ante Set",
        type: "Tool",
        subType: "Gaming Set",
        ability: "int",
        baseTool: "card",
        toolType: "game"
      },
      {
        name: "Disguise Kit",
        type: "Tool",
        subType: "Kit",
        ability: "int",
        baseTool: "disg",
        toolType: ""
      },
      {
        name: "Forgery Kit",
        type: "Tool",
        subType: "Kit",
        ability: "int",
        baseTool: "forge",
        toolType: ""
      },
      {
        name: "Herbalism Kit",
        type: "Tool",
        subType: "Kit",
        ability: "int",
        baseTool: "herb",
        toolType: ""
      },
      {
        name: "Poisoner's Kit",
        type: "Tool",
        subType: "Kit",
        ability: "int",
        baseTool: "pois",
        toolType: ""
      },
      {
        name: "Bagpipes",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "con",
        baseTool: "bagpipes",
        toolType: "music"
      },
      {
        name: "Birdpipes",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "con",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Drum",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "drum",
        toolType: "music"
      },
      {
        name: "Dulcimer",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "dulcimer",
        toolType: "music"
      },
      {
        name: "Flute",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "flute",
        toolType: "music"
      },
      {
        name: "Glaur",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Hand Drum",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Horn",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "horn",
        toolType: "music"
      },
      {
        name: "Longhorn",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Lute",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "lute",
        toolType: "music"
      },
      {
        name: "Lyre",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "lyre",
        toolType: "music"
      },
      {
        name: "Pan Flute",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Shawm",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Songhorn",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Tantan",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Thelarr",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Tocken",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Viol",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "viol",
        toolType: "music"
      },
      {
        name: "Wargong",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Yarting",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Zulkoon",
        type: "Tool",
        subType: "Musical Instrument",
        ability: "dex",
        baseTool: "",
        toolType: "music"
      },
      {
        name: "Alchemist's Supplies",
        type: "Tool",
        subType: "Supplies",
        ability: "int",
        baseTool: "alchemist",
        toolType: "art"
      },
      {
        name: "Brewer's Supplies",
        type: "Tool",
        subType: "Supplies",
        ability: "int",
        baseTool: "brewer",
        toolType: "art"
      },
      {
        name: "Calligrapher's Supplies",
        type: "Tool",
        subType: "Supplies",
        ability: "dex",
        baseTool: "calligrapher",
        toolType: "art"
      },
      {
        name: "Painter's Supplies",
        type: "Tool",
        subType: "Supplies",
        ability: "dex",
        baseTool: "painter",
        toolType: "art"
      },
      {
        name: "Vehicles (Land)",
        type: "Tool",
        subType: "Vehicles",
        ability: "dex",
        baseTool: "land",
        toolType: ""
      },
      {
        name: "Vehicles (Air)",
        type: "Tool",
        subType: "Vehicles",
        ability: "dex",
        baseTool: "air",
        toolType: ""
      },
      {
        name: "Vehicles (Water)",
        type: "Tool",
        subType: "Vehicles",
        ability: "dex",
        baseTool: "water",
        toolType: ""
      }
    ],
    characterValuesLookup: [
      { name: "pactWeapon", typeId: 28 },
      { name: "hexWarrior", typeId: 29 }
    ],
    // Supported Warlock Pact Weapon options
    pactFeatures: ["Improved Pact Weapon", "Lifedrinker"]
  },
  item: {
    characterValues: [
      { typeId: 8, value: "name" },
      //   { typeId: 9, value: 'notes'},  // note: Not supported by Foundry right now, skipping
      { typeId: 19, value: "price" },
      { typeId: 22, value: "weight" }
    ]
  },
  items: [
    {
      filterType: "Armor",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/item_types/armor.jpg"
    },
    {
      filterType: "Potion",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/item_types/potion.jpg"
    },
    {
      filterType: "Ring",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/item_types/ring.jpg"
    },
    {
      filterType: "Rod",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/item_types/rod.jpg"
    },
    {
      filterType: "Scroll",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/item_types/scroll.jpg"
    },
    {
      filterType: "Staff",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/item_types/staff.jpg"
    },
    {
      filterType: "Wand",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/item_types/wand.jpg"
    },
    {
      filterType: "Weapon",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/item_types/weapon.jpg"
    },
    {
      filterType: "Wondrous item",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/item_types/wondrousitem.jpg"
    }
  ],
  genericItemIcons: [
    {
      name: "Adventuring Gear",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/adventuring-gear.jpg"
    },
    {
      name: "Tool",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/tool.jpg"
    },
    {
      name: "Gemstone",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/gemstone.jpg"
    },
    {
      name: "Holy Symbol",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/holy-symbol.jpg"
    },
    {
      name: "Weapon",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/weapon.jpg"
    },
    {
      name: "Arcane Focus",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/arcane-focus.jpg"
    },
    {
      name: "Druidic Focus",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/druidic-focus.jpg"
    },
    {
      name: "Ammunition",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/ammunition.jpg"
    },
    {
      name: "Poison",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/poison.jpg"
    },
    {
      name: "Mount",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/mount.jpg"
    },
    {
      name: "Potion",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/potion.jpg"
    },
    {
      name: "Equipment Pack",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/pack.jpg"
    },
    // Vehicle (Land)/(Water)
    {
      name: "Vehicle",
      img:
        "https://www.dndbeyond.com/content/1-0-1358-0/skins/waterdeep/images/icons/equipment/vehicle.jpg"
    }
  ],
  equipment: {
    armorType: [
      { name: "Light Armor", id: 1, value: "light" },
      { name: "Medium Armor", id: 2, value: "medium" },
      { name: "Heavy Armor", id: 3, value: "heavy" },
      { name: "Shield", id: 4, value: "shield" },
      { name: "Unarmored", id: 0, value: null },
      { name: "Unarmored Defense", id: -1, value: null },
      { name: "Natural Armor", id: -2, value: "natural" },
      { name: "Magical Bonus", id: -3, value: "bonus" },
      { name: "Clothing", id: -4, value: "clothing" }
    ]
  },
  weapon: {
    weaponRange: [
      { attackType: 1, value: "M" },
      { attackType: 2, value: "R" },
      { attackType: null, value: "R" }
    ],
    weaponType: [
      { categoryId: 1, value: "simple" },
      { categoryId: 2, value: "martial" },
      { categoryId: 3, value: "martial" }, // this is not 100% correct. a martialF for "Martial Firearms" would be better
      { categoryId: 0, value: "simple" } // this is totally incorrect, this is of type ammunition
    ],
    properties: [
      { name: "Ammunition", value: "amm" },
      { name: "Ammunition (Firearms)", value: "fir" },
      { name: "Finesse", value: "fin" },
      { name: "Heavy", value: "hvy" },
      { name: "Light", value: "lgt" },
      { name: "Loading", value: "lod" },
      { name: "Range", value: "fir" },
      { name: "Reach", value: "rch" },
      { name: "Reload", value: "rel" },
      { name: "Special", value: "spc" },
      { name: "Thrown", value: "thr" },
      { name: "Two-Handed", value: "two" },
      { name: "Versatile", value: "ver" },
      { name: "Returning", value: "ret" },
      { name: "Focus", value: "foc" },
      { name: "Adamantine", value: "ada" },
      { name: "Magical", value: "mgc" },
      { name: "Silvered", value: "sil" }
    ]
  },
  actions: {
    activationTypes: [
      { id: 0, value: "none" },
      { id: 1, value: "action" },
      { id: 2, value: "action" },
      { id: 3, value: "bonus" },
      { id: 4, value: "reaction" },
      { id: 5, value: "action" },
      { id: 6, value: "minute" },
      { id: 7, value: "hour" },
      { id: 8, value: "special" }
    ],
    attackTypes: [
      //  natural improv
      // { attackSubtype: 1, value: "" },
      { attackSubtype: 2, value: "natural" },
      { attackSubtype: 3, value: "simpleM" } // unarmed
    ],
    damageType: [
      { name: "bludgeoning", id: 1 },
      { name: "piercing", id: 2 },
      { name: "slashing", id: 3 },
      { name: "necrotic", id: 4 },
      { name: "acid", id: 5 },
      { name: "cold", id: 6 },
      { name: "fire", id: 7 },
      { name: "lightning", id: 8 },
      { name: "thunder", id: 9 },
      { name: "poison", id: 10 },
      { name: "psychic", id: 11 },
      { name: "radiant", id: 12 },
      { name: "force", id: 13 },
      { name: null, id: null }
    ],
    aoeType: [
      { id: 1, value: "cone" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "line" }
      // presumably others here too! add when found
    ]
  },
  spell: {
    schools: [
      {
        id: "abj",
        name: "abjuration",
        img:
          "https://www.dndbeyond.com/content/1-0-1337-0/skins/waterdeep/images/spell-schools/35/abjuration.png"
      },
      {
        id: "con",
        name: "conjuration",
        img:
          "https://www.dndbeyond.com/content/1-0-1337-0/skins/waterdeep/images/spell-schools/35/conjuration.png"
      },
      {
        id: "div",
        name: "divination",
        img:
          "https://www.dndbeyond.com/content/1-0-1337-0/skins/waterdeep/images/spell-schools/35/divination.png"
      },
      {
        id: "enc",
        name: "enchantment",
        img:
          "https://www.dndbeyond.com/content/1-0-1337-0/skins/waterdeep/images/spell-schools/35/enchantment.png"
      },
      {
        id: "evo",
        name: "evocation",
        img:
          "https://www.dndbeyond.com/content/1-0-1337-0/skins/waterdeep/images/spell-schools/35/evocation.png"
      },
      {
        id: "ill",
        name: "illusion",
        img:
          "https://www.dndbeyond.com/content/1-0-1337-0/skins/waterdeep/images/spell-schools/35/illusion.png"
      },
      {
        id: "nec",
        name: "necromancy",
        img:
          "https://www.dndbeyond.com/content/1-0-1337-0/skins/waterdeep/images/spell-schools/35/necromancy.png"
      },
      {
        id: "trs",
        name: "transmutation",
        img:
          "https://www.dndbeyond.com/content/1-0-1337-0/skins/waterdeep/images/spell-schools/35/transmutation.png"
      }
    ],
    progression: [
      { name: "Artificer", value: "artificer" },
      { name: "Artificer (UA)", value: "artificer" },
      { name: "Bard", value: "full" },
      { name: "Barbarian", value: "none" },
      { name: "Blood Hunter", value: "pact" },
      { name: "Blood Hunter (archived)", value: "pact" },
      { name: "Cleric", value: "full" },
      { name: "Druid", value: "full" },
      { name: "Fighter", value: "third" },
      { name: "Hunter", value: "half" },
      { name: "Paladin", value: "half" },
      { name: "Ranger", value: "half" },
      { name: "Rogue", value: "third" },
      { name: "Sorcerer", value: "full" },
      { name: "Warlock", value: "pact" },
      { name: "Wizard", value: "full" },
      { name: "Monk", value: "none" }
    ],
    preparationModes: [
      { name: "Artificer", value: "prepared" },
      { name: "Artificer (UA)", value: "prepared" },
      { name: "Bard", value: "always" },
      { name: "Blood Hunter", value: "pact" },
      { name: "Blood Hunter (archived)", value: "pact" },
      { name: "Cleric", value: "prepared" },
      { name: "Druid", value: "prepared" },
      { name: "Fighter", value: "always" },
      { name: "Hunter", value: "always" },
      { name: "Paladin", value: "prepared" },
      { name: "Ranger", value: "always" },
      { name: "Rogue", value: "always" },
      { name: "Sorcerer", value: "always" },
      { name: "Warlock", value: "pact" },
      { name: "Wizard", value: "prepared" },
      { name: "Monk", value: "always" }
    ],
    activationTypes: [
      { activationType: 0, value: "none", name: "No Action" }, // doesn't exist an more
      { activationType: 1, value: "action", name: "Action" }, // action
      { activationType: 2, value: "none", name: "No Action" }, // no action
      { activationType: 3, value: "bonus", name: "Bonus Action" }, // bonus action
      { activationType: 4, value: "reaction", name: "Reaction" }, // reaction
      { activationType: 5, value: "special", name: "Unknown" }, // no longer exists
      { activationType: 6, value: "minute", name: "Minute" }, // minute
      { activationType: 7, value: "hour", name: "Hour" }, // hour
      { activationType: 8, value: "special", name: "Special" } // special
    ]
  }
};

export default DICTIONARY;
