function CreatePet(name, species, happiness, energy){
    this.name = name
    this.species = species
    this.happiness = happiness
    this.energy = energy
    this.play = function () {
      this.energy -= 20;
      this.happiness += 10;
      return `You played with ${this.name}! Happiness is now ${this.happiness} and energy is now ${this.energy}`;
    };
     this.feed = function(){
        this.energy += 20; this.happiness +=20;
        return(`You fed ${this.name} ! Happiness is now ${this.happiness} and energy is now ${this.energy}`)
     }
      this.status = function () {
        return `Pet Name: ${this.name}
            Species: ${this.species}
            Happiness : ${this.happiness}
            Energy: ${this.energy}   
            `;
      };

}
    const pet1 = new CreatePet("Fluffy", "Dog", 95, 25 );
    const pet2 = new CreatePet("Taz","Dog", 45, 10);
    const pet3 = new CreatePet("Nyla","Cat", 65, 35);

    let kennel = []
