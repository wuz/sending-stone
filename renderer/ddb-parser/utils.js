import DICTIONARY from "./dictionary";

export const getModifierSum = (modifiers, character) => {
  let sum = 0;
  let diceString = "";
  let modBonus = 0;
  modifiers.forEach((modifier) => {
    const fixedBonus = modifier.dice?.fixedValue ? modifier.dice.fixedValue : 0;
    const statBonus = modifier.statId
      ? modifier.statId
      : modifier.abilityModifierStatId
      ? modifier.abilityModifierStatId
      : null;
    if (statBonus) {
      const ability = DICTIONARY.character.abilities.find(
        (ability) => ability.id === modifier.statId
      );
      modBonus += character.data.abilities[ability.value].mod;
    }
    if (modifier.dice) {
      const mod = modifier.dice.diceString;
      diceString += diceString === "" ? mod : " + " + mod;
      if (modifier.dice.diceString) {
        const mod = modifier.dice.diceString + modBonus + fixedBonus;
        diceString += diceString === "" ? mod : " + " + mod;
      } else if (fixedBonus) {
        sum += fixedBonus + modBonus;
      }
    } else if (modifier.fixedValue) {
      sum += modifier.fixedValue;
    } else if (modifier.value) {
      sum += modifier.value;
    } else if (modBonus !== 0) {
      sum += modBonus;
    } else if (
      modifier.modifierTypeId === 1 &&
      modifier.modifierSubTypeId === 218
    ) {
      // prof bonus
      sum += character.data.attributes.prof;
    }
  });
  if (diceString !== "") {
    sum = diceString + " + " + sum;
  }

  return sum;
};

export const getModifiers = (
  data,
  type,
  includeExcludedEffects = false,
  effectOnly = false
) => {
  return data.character.modifiers[type];
};

export const filterModifiers = (
  modifiers,
  type,
  subType = null,
  restriction = ["", null]
) => {
  return modifiers
    .flat()
    .filter(
      (modifier) =>
        modifier.type === type &&
        (subType !== null ? modifier.subType === subType : true) &&
        (!restriction ? true : restriction.includes(modifier.restriction))
    );
};

export const getChosenClassModifiers = (
  data,
  includeExcludedEffects = false,
  effectOnly = false
) => {
  // get items we are going to interact on
  const modifiers = getModifiers(
    data,
    "class",
    includeExcludedEffects,
    effectOnly
  ).filter((mod) => {
    const isClassFeature = data.character.classes.some((klass) =>
      klass.classFeatures.some(
        (feat) =>
          feat.definition.id == mod.componentId &&
          feat.definition.entityTypeId == mod.componentTypeId &&
          // make sure this class feature is not replaced
          !data.character.optionalClassFeatures.some(
            (f) => f.affectedClassFeatureId == feat.definition.id
          )
      )
    );
    // generate a list to check in option check
    const classFeatureIds = data.character.classes
      .map((klass) => klass.classFeatures.map((feat) => feat.definition.id))
      .flat();
    const isClassOption = data.character.options.class.some(
      (option) =>
        // does this class option match a modifier?
        ((option.componentTypeId == mod.componentTypeId &&
          option.componentId == mod.componentId) ||
          (option.definition.entityTypeId == mod.componentTypeId &&
            option.definition.id == mod.componentId)) &&
        // has this feature set been replacd by an optional class feature?
        !data.character.optionalClassFeatures.some(
          (f) => f.affectedClassFeatureId == option.componentId
        ) &&
        // has it been chosen?
        data.character.choices.class.some(
          (choice) =>
            choice.componentId == option.componentId &&
            choice.componentTypeId == option.componentTypeId &&
            choice.optionValue
        ) &&
        // is this option actually part of the class list?
        classFeatureIds.includes(option.componentId)
    );
    // if it's been replaced by a class feature lets check that
    const isOptionalClassOption = data.character.options.class.some(
      (option) =>
        ((option.componentTypeId == mod.componentTypeId &&
          option.componentId == mod.componentId) ||
          (option.definition.entityTypeId == mod.componentTypeId &&
            option.definition.id == mod.componentId)) &&
        // !data.character.optionalClassFeatures.some((f) => f.affectedClassFeatureId == option.definition.id) &&
        (data.character.choices.class.some(
          (choice) =>
            choice.componentId == option.componentId &&
            choice.componentTypeId == option.componentTypeId &&
            choice.optionValue
        ) ||
          data.classOptions?.some(
            (classOption) =>
              classOption.id == option.componentId &&
              classOption.entityTypeId == option.componentTypeId
          )) &&
        data.character.optionalClassFeatures?.some(
          (f) => f.classFeatureId == option.componentId
        )
    );

    // new class feature choice
    const isOptionalClassChoice = data.character.choices.class.some(
      (choice) =>
        choice.componentTypeId == mod.componentTypeId &&
        choice.componentId == mod.componentId &&
        data.character.optionalClassFeatures?.some(
          (f) => f.classFeatureId == choice.componentId
        )
    );

    return (
      isClassFeature ||
      isClassOption ||
      isOptionalClassOption ||
      isOptionalClassChoice
    );
  });

  return modifiers;
};

export const filterBaseCharacterModifiers = (
  data,
  type,
  subType = null,
  restriction = ["", null],
  includeExcludedEffects = false,
  effectOnly = false
) => {
  const modifiers = [
    getChosenClassModifiers(data, includeExcludedEffects, effectOnly),
    getModifiers(data, "race", includeExcludedEffects, effectOnly),
    getModifiers(data, "background", includeExcludedEffects, effectOnly),
    getModifiers(data, "feat", includeExcludedEffects, effectOnly)
  ];

  return filterModifiers(modifiers, type, subType, restriction);
};

export const getActiveItemModifiers = (
  data,
  includeExcludedEffects = false
) => {
  const modifiers = data.character.inventory
    .filter(
      (item) =>
        ((!item.definition.canEquip &&
          !item.definition.canAttune &&
          !item.definition.isConsumable) || // if item just gives a thing and not potion/scroll
        (item.isAttuned && item.equipped) || // if it is attuned and equipped
        (item.isAttuned && !item.definition.canEquip) || // if it is attuned but can't equip
          (!item.definition.canAttune && item.equipped)) && // can't attune but is equipped
        item.definition.grantedModifiers.length > 0
    )
    .flatMap((item) => item.definition.grantedModifiers);

  return modifiers;
};

export const filterBaseModifiers = (
  data,
  type,
  subType = null,
  restriction = ["", null],
  includeExcludedEffects = false,
  effectOnly = false
) => {
  const modifiers = [
    getChosenClassModifiers(data, includeExcludedEffects, effectOnly),
    getModifiers(data, "race", includeExcludedEffects, effectOnly),
    getModifiers(data, "background", includeExcludedEffects, effectOnly),
    getModifiers(data, "feat", includeExcludedEffects, effectOnly),
    getActiveItemModifiers(data, includeExcludedEffects)
  ];

  return filterModifiers(modifiers, type, subType, restriction);
};

export const calculateModifier = (val) => {
  return Math.floor((val - 10) / 2);
};
