const {Pokemon} = require('./Pokemon');


let pikachu = new Pokemon('pikachu', 200, 1, 50);
let rondoudou = new Pokemon('rondoudou', 100, 2, 0);

let fight = (a,b) => {

  let i = 0;

  while(a.hitpoints > 0 && b.hitpoints > 0){
    if (i % 5 != 0){
      a.hitpoints -= b.attack;
      b.hitpoints -= a.attack;
    } else {
      a.hitpoints -= b.charged_attack;
      b.hitpoints -= a.charged_attack;
    }
    i++;
  }

  // let winner = a.hitpoints>0?a:b;
  let winner;
  if (a.hitpoints > 0 && b.hitpoints <= 0){
    console.log('winner: '+ a.name);
    return a;
  } else if (a.hitpoints <= 0 && b.hitpoints <= 0){
    console.log('draw');
  } else {
    console.log('winner: '+ b.name);
    return b;
  }

  return winner;
};

let tournament = (a, ...contestants) => {
  let winner = a;
  contestants.forEach((item) => {
    winner = fight(winner, item);
  });
  return winner;
};

// tournament(pikachu, rondoudou, rondoudou, rondoudou, rondoudou);

module.exports = {
  fight,
  tournament
}
