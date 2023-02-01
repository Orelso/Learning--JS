// console.log('lifting weights 1 🏋️')
// console.log('lifting weights 2 🏋️')
// console.log('lifting weights 3 🏋️')
// console.log('lifting weights 4 🏋️')
// console.log('lifting weights 5 🏋️')
// console.log('lifting weights 6 🏋️')
// console.log('lifting weights 7 🏋️')
// console.log('lifting weights 8 🏋️')
// console.log('lifting weights 9 🏋️')

//1 for loop keeps running while condition is TRUE (rep <= 10)
for(let rep = 1; rep <= 10;rep ++ ) {
    console.log(`lifting weights ${rep} 🏋️`)
}
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const OrelsoArray = [
    'Bo',
    'Vitam',
    31,
    "Coder",
    ['f', "t", "p"],
    true
];
const types = []

for(let i = 0; i <= OrelsoArray.length; i++) {
    //1 Reading from orelso array
    console.log(OrelsoArray[i], typeof OrelsoArray[1]);

    //1 Filling types array
    types[i] = typeof OrelsoArray[i]
    //1 Filling types array
    types.push(typeof OrelsoArray[i])
}
console.log(types);
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const years =[1991, 2007, 1969, 2022]
const ages = []

for(let i = 0; i < years.length; i++) {
   ages.push(2023 - years[i])
}
console.log(ages); //1 [32, 16, 54, 1]
/* -------------------------------------------------------------------------------------------------------------------------------------------------(continue and break)------------------------------------------------------------------------------------------------------------------------------------------------------*/
console.log('----ONLY STRINGS----');
for (let i = 0; i <= OrelsoArray.length; i++) {
    if(typeof OrelsoArray[i] !== 'string') continue;

    console.log(OrelsoArray[i], typeof OrelsoArray[1]);
}

console.log('----BREAK WITH NUMBER----');
for (let i = 0; i <= OrelsoArray.length; i++) {
    if(typeof OrelsoArray[i] === 'number') break;

    console.log(OrelsoArray[i], typeof OrelsoArray[1]);
}

export default OrelsoArray;