class Pokemon {
  constructor(name, hitpoints, attack){
    if(typeof name === 'string' && typeof hitpoints === 'number' && typeof attack === 'number'){
      this.name = name;
      this.hitpoints = hitpoints;
      this.attack = attack;
    } else {
      console.log("Wrong input.");
    }
  }
};

module.exports.Pokemon = Pokemon;
