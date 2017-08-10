class Dresseur {
  constructor(name){
    if (typeof name === 'string'){
      this.name = name;
      this.pokemons = [];
    } else {
      console.log("Wrong input.");
    }
  }

  catch(pokemon) {
    this.pokemons.push(pokemon);
  }
}

module.exports.Dresseur = Dresseur;
