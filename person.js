const { print } = require('./utils')

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

latt = new Person('lattapon', 'yodsuwan')
print(latt.fullName())
