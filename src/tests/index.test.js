import { sortProperties, showSpecialAttacks } from '../index';

let testArr;

beforeEach(() => {
  testArr = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
});

test('sortProperties should return correctly sorted array', () => {
  testArr.special = 'test';

  let sortArr = [
    { key: 'level', value: '3' },
    { key: 'defence', value: '10' },
    { key: 'name', value: 'Лучник' },
    { key: 'attack', value: '40' },
    { key: 'health', value: '50' },
    { key: 'special', value: 'test' },
    { key: 'type', value: 'Bowman' },
  ];

  expect(sortProperties(testArr, ['level', 'defence', 'name'])).toEqual(
    sortArr,
  );

  sortArr = [
    { key: 'attack', value: '40' },
    { key: 'defence', value: '10' },
    { key: 'health', value: '50' },
    { key: 'level', value: '3' },
    { key: 'name', value: 'Лучник' },
    { key: 'special', value: 'test' },
    { key: 'type', value: 'Bowman' },
  ];

  expect(sortProperties(testArr)).toEqual(sortArr);

  expect(sortProperties(testArr, ['agility', 'endurance'])).toEqual(sortArr);
});

test('showSpecialAttacks should return correct array', () => {
  const returnedArr = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];

  expect(showSpecialAttacks(testArr)).toEqual(returnedArr);

  delete testArr.special;
  expect(showSpecialAttacks(testArr)).toEqual(false);
});
