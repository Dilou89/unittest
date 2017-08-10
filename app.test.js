const expect = require('expect');
const {Pokemon} = require('./Pokemon');
let {fight} = require('./app');

describe('testing pokemon creation', () => {
  it('should create a pokemon', () => {
    expect(new Pokemon('pikachu', 100, 1)).toExist();
  });

  it('should return an error if wrong input', () => {
    let test = new Pokemon(12, 'egerrhg', 'dzgerzhg');
    expect(test.name).toNotExist();
  });
});

describe('testing fight function', () => {
  it('should let pikachu win', () => {
    let pikachu = new Pokemon('pikachu', 200, 5);
    let rondoudou = new Pokemon('rondoudou', 100, 2);
    expect(fight(pikachu, rondoudou)).toBe(pikachu);
  });

  it('should end with a draw', () => {
    let pikachu = new Pokemon('pikachu', 200, 5);
    expect(fight(pikachu, pikachu)).toBe(undefined);
  })
});
