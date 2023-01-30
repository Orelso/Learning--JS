const person1 = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function(mass, height) {
        console.log(this)
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI
    }
}

console.log(person1.calcBMI(person1.height))

const person2 = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function(mass, height) {
        console.log(this)
        this.BMI = this.mass / (this.height * this.height)
        return this.BMI
    }
}

console.log(person2.calcBMI(person1.height))
if(person1.BMI > person2.BMI){
    console.log(`Hello ${person1.firstName} ${person1.lastName} your BMI ${person1.BMI}is much higher than ${person2.firstName} ${person2.lastName} ${person2.BMI}`)
} else {
    console.log(`Hello ${person2.firstName} ${person2.lastName} your BMI ${person2.BMI} is much higher than ${person1.firstName} ${person1.lastName} ${person1.BMI}`);
}