const While = [
];
/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// let rep = 1
// while(rep <= 30) {
//     console.log(`lifting weights ${rep} 🏋️`)
// rep++
// }
// /* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice);

// while(dice !== 6) {
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) +1
//     if( dice === 6) console.log('Loop is about to end...');
// }

let calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

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

export default While;