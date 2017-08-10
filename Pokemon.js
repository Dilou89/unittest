class Pokemon {
  constructor(name, hitpoints, attack, charged_attack){
    if(typeof name === 'string' && typeof hitpoints === 'number' && typeof attack === 'number' && typeof charged_attack === 'number'){
      this.name = name;
      this.hitpoints = hitpoints;
      this.attack = attack;
      this.charged_attack = charged_attack;
    } else {
      console.log("Wrong input.");
    }
  }
};

module.exports.Pokemon = Pokemon;
