var button = document.getElementById("attack");
button.addEventListener("click", attackButton)
function attackButton(event) {
  document.getElementById("sprite").src="assets/pikachu-attack.png"
  window.setTimeout(setSprite, 1000)
  pikachu.special(chardizard)
  document.getElementById("hp2").innerHTML = chardizard.hp + " hp"
}

function setSprite() {
  document.getElementById("sprite").src="assets/pikachu.png"

}
var chardizard = new pokemon("Chardizard", "fire", 120, 10)
var pikachu = new pokemon("Pikachu", "electric", 100, 10)
window.onload = function() {
  document.getElementById("name").innerHTML = pikachu.name
  document.getElementById("type").innerHTML = pikachu.type
  document.getElementById("hp").innerHTML = pikachu.hp + " hp"
  document.getElementById("level").innerHTML = "Level " + pikachu.level
  document.getElementById("name2").innerHTML = chardizard.name
  document.getElementById("type2").innerHTML= chardizard.type
  document.getElementById("hp2").innerHTML = chardizard.hp + " hp"
  document.getElementById("level2").innerHTML= "Level " + chardizard.level
}


function pokemon(name, type, hp, level) {
  this.name = name
  this.type = type
  this.hp = hp
  this.level = level
  this.attack = function (pokemon) {
  pokemon.hp = pokemon.hp - 10
 }
  this.heal = function () {
    this.hp += 10
    return this.hp + " health"
  }
  this.special = function (pokemon) {
    if (this.type === "electric") {
      var damage = Math.floor(25 * Math.random())
      if (pokemon.type === "water") {
        damage = Math.floor(35 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " electricutes " + pokemon.name + " for: " + damage +" Damage"
    } else if (this.type === "fire") {
      var damage = Math.floor(20 * Math.random())
      if (pokemon.type === "grass") {
        damage = Math.floor(30 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " burns " + pokemon.name + " for: " + damage + " Damage"
    } else if (this.type === "grass") {
      var damage = Math.floor(15 * Math.random())
      if (pokemon.type === "grass") {
        damage = Math.floor(25 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " cuts " + pokemon.name + " for: " + damage + " Damage"
    } else if (this.type === "normal") {
      pokemon.hp = pokemon.hp - 25
      return this.name + " smashes " + pokemon.name + " for: 25 Damage"
    } else if (this.type === "psychic") {
      var damage = Math.floor(40 * Math.random())
      if (pokemon.type === "fighting") {
        damage = Math.floor(50 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " destroys " + pokemon.name + " for: " + damage + " Damage"
    } else if (this.type === "water") {
      var damage = Math.floor(35 * Math.random())
      if (pokemon.type === "fire") {
        damage = Math.floor(45 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " waters " + pokemon.name + " for: " + damage + " Damage"
    } else if (this.type === "fighting") {
      var damage = Math.floor(10 * Math.random())
      if (pokemon.type === "normal") {
        damage = Math.floor(20 * Math.random())
      }
      pokemon.hp = pokemon.hp - damage
      return this.name + " punches " + pokemon.name + " for: " + damage + " Damage"
    }
  }
}

var chardizard = new pokemon("Chardizard", "fire", 120, 10)
var squirtle = new pokemon("Squirtle", "water", 125, 10)
var hitmachamp = new pokemon("Hitmachamp", "fighting", 125, 10)
var mewtwo = new pokemon("Mewtwo", "psychic", 125, 10)
var geodude = new pokemon("Geodude", "normal", 125, 10)
var bulbasaur = new pokemon("Bulbasaur", "grass", 125, 10)
