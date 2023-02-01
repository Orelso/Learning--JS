const Orelso = {
    firstName: 'Bo',
    lastName: 'Vitam',
    age: 31,
    job: "Coder",
    friends: ['f', "t", "p"]
}

//* Dot Notation
console.log(Orelso)
console.log(Orelso.firstName) //* Bo
console.log(Orelso.lastName) //* Vitam
console.log(Orelso.age) //* 31
console.log(Orelso.friends[2]) //* p

//* Bracket Notation
const nameKey = 'Name'
console.log(Orelso["last" + nameKey]); //* Vitam

//* Print to UI
for (const property in Orelso) {
    const p = document.createElement("p");
    p.innerHTML = `${property}: ${Orelso[property]}`;
    document.body.appendChild(p);
}

const interestedIn = prompt("What do you want to know about Orelso? type in firstName, lastname, age, job, friends")
//* When user types in one of the Types then bracket notation finds that type in the object and consoles it.
console.log(Orelso[interestedIn])

//* Add location & twitter handle to the object of Orelso
Orelso.location = " Finland";
Orelso['twitter'] = '@orelso';
console.log(Orelso)

const orelsoArray = [
    'Bo',
    'Vitam',
    31,
    "Coder",
    ['f', "t", "p"],
    true
];
console.log('----ONLY STRINGS----');
for (let i = 0; i <= orelsoArray.length; i++) {
    //1 only print the string to the console
    if(typeof orelsoArray[i] !== 'string') continue;
    
    console.log(orelsoArray[i], typeof orelsoArray[1]);
}

export default Orelso;
