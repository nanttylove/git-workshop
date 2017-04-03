const { print } = require('./utils')

class Animal {
  constructor(name, sound) {
    this.name = name
    this.sound = sound
  }

  noise() {
    return `Pui: ${this.sound}`
  }
}

const pui = new Animal('Pui', 'Hong hong')
print(pui.noise())
