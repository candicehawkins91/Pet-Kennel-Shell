
let pet = {
    name: "Taz",
    species: "Dog",
    happiness: 55,
    play: function() {
        this.happiness +=10
        return("You played with " + pet.name + "!" + " Happpiness is now " + this.happiness + ".")
    },
    feed: function() {
        this.happiness += 20
        return("You fed " + pet.name +"! " +"Happiness is now " + this.happiness +".")
    }
}
console.log(pet.feed())


