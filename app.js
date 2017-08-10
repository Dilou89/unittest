const {Pokemon} = require('./Pokemon');


let pikachu = new Pokemon('pikachu', 200, 1);
let rondoudou = new Pokemon('rondoudou', 100, 2);

let fight = (a,b) => {
  while(a.hitpoints > 0 && b.hitpoints > 0){
    a.hitpoints -= b.attack;
    b.hitpoints -= a.attack;
  }

  // let winner = a.hitpoints>0?a:b;
  let winner;
  if (a.hitpoints > 0 && b.hitpoints <= 0){
    console.log('winner: '+ a.name);
    return a;
  } else if (a.hitpoints == 0 && b.hitpoints == 0){
    console.log('draw');
  } else {
    console.log('winner: '+ b.name);
    return b;
  }

  return winner;
};



module.exports.fight = fight;
