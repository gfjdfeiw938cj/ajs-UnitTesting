export function sortProperties(obj, properties = []) {
  const arr = [];
  const alphOrder = Object.keys(obj).sort();

  properties.forEach((prop) => {
    if (alphOrder.some((item) => item === prop)) {
      arr.push({ key: `${prop}`, value: `${obj[`${prop}`]}` });
    }
  });

  alphOrder.forEach((prop) => {
    if (!properties.some((item) => item === prop)) {
      arr.push({ key: `${prop}`, value: `${obj[`${prop}`]}` });
    }
  });

  return arr;
}

export function showSpecialAttacks(obj) {
  let specialAttacks;
  if (Object.hasOwnProperty.call(obj, 'special')) {
    return obj.special.map((skill) => {
      const {
        id,
        name,
        icon,
        description = 'Описание недоступно',
      } = skill;
      return {
        id,
        name,
        icon,
        description,
      };
    });
  }
  return false;
}
