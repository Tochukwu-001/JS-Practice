let load = Number(prompt("Please enter the load of consumption in Watts: "));
let time = Number(prompt("Enter the time spent in hours: "));
let tarrif = 100;

let KWLoad = load/1000;
let consumption = KWLoad * time;

let totalCost = consumption * tarrif

console.log(`You would pay a total of ${totalCost} naira`);