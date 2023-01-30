const gohan = {
    firstName: 'Gohan',
    lastName: 'Son',
    birthYear: 1991,
    job: "Fighter",
    friends: ['Piccolo', "Krillin", "Tien"],
    canGoSuperSayian: true,

    //* passed a function as a property of gohan
    calcAge: function(birthYear) {
        console.log(this)
        this.age = 2037 - this.birthYear
        return this.age
    }
}
//* Will console the same thing. Different ways of calling it.
console.log(gohan.age);
console.log(gohan.calcAge(gohan.birthYear));

//* ? if : else
console.log(`${gohan.firstName} is a ${gohan.age}-year old ${gohan.job}, and he ${gohan.canGoSuperSayian ? 'can' : "can't"} go Super Saiyan.`)
