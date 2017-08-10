const expect = require('expect');
const {Pokemon} = require('./Pokemon');
const {Dresseur} = require('./Dresseur');
let {fight, tournament} = require('./app');

describe('testing pokemon creation', () => {
  it('should create a pokemon', () => {
    expect(new Pokemon('pikachu', 100, 1, 10)).toExist();
  });

  it('should return an error if parameter missing', () => {
    let test = new Pokemon('test', 100, 1);
    expect(test.name).toNotExist();
  });

  it('should return an error if wrong input', () => {
    let test = new Pokemon(12, 'egerrhg', 'dzgerzhg', 'gzrhgrz');
    expect(test.name).toNotExist();
  });
});

describe('testing fight function', () => {
  it('should let pikachu win', () => {
    let pikachu = new Pokemon('pikachu', 200, 5, 50);
    let rondoudou = new Pokemon('rondoudou', 100, 2, 0);
    expect(fight(pikachu, rondoudou)).toBe(pikachu);
  });

  it('should end with a draw', () => {
    let pikachu = new Pokemon('pikachu', 200, 5, 50);
    expect(fight(pikachu, pikachu)).toBe(undefined);
  });

  it('should let rondoudou win if charged_attack', () => {
    let pikachu = new Pokemon('pikachu', 200, 5, 50);
    let rondoudou = new Pokemon('rondoudou', 100, 2, 200);
    expect(fight(pikachu, rondoudou)).toBe(rondoudou);
  });
});

describe('testing tournament function', () => {
  it('should let pikachu win against rondoudou', () => {
    let pikachu = new Pokemon('pikachu', 200, 5, 50);
    let rondoudou = new Pokemon('rondoudou', 100, 2, 0);
    expect(tournament(pikachu, rondoudou)).toBe(pikachu);
  });
});

describe('testing Dresseurs', () => {
  it('should create Sasha', () => {
    expect(new Dresseur('Sasha')).toExist();
  });

  it('should not accept wrong input format', () => {
    let test = new Dresseur(123);
    expect(test.name).toNotExist();
  });

  it('should catch pikachu', () => {
    let sasha = new Dresseur('Sasha');
    let pikachu = new Pokemon('pikachu', 200, 5, 50);
    sasha.catch(pikachu);
    expect(sasha.pokemons[0]).toBe(pikachu);
  });
});
