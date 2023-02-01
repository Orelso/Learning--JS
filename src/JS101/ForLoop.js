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
/* -------------------------------------------------------------------------------------------------------------------------------------------------(Looping backwards)------------------------------------------------------------------------------------------------------------------------------------------------------*/
for(let i = OrelsoArray.length - 1; i >= 0; i--){
    console.log(i, OrelsoArray[i]);
}
/* -------------------------------------------------------------------------------------------------------------------------------------------------(Loop inside a loop)------------------------------------------------------------------------------------------------------------------------------------------------------*/
for (let ex = 1; ex < 4; ex++) {
    console.log(`----------Starting ex ${ex}-----------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${ex}: Lifting weight repetition ${rep}🏋️`);
    }
}

let calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

for( let i = 0; i < bills.length; i++){
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);

}
console.log(bills, tips, totals);

let average = function (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}
console.log(average(totals))


export default OrelsoArray;