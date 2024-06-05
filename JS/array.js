const array = [100, 200, 45, 37, 39, 92, 675, 87];
// Highest value 1
const maxValue1 = Math.max(...array);
console.log('Highest value 1: ', maxValue1);

// Highest value 2
let maxValue = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue)
        maxValue = array[i]
}
console.log('Highest value 2: ',maxValue);

console.log(array.sort((a, b) => b - a)[0]);

// Average
let sum = 0;
array.forEach(value => {
    sum += value
    // console.log(sum);
})

const average = sum / array.length;
console.log("Average: ",average);

// Even numbers
array.forEach(number => {
    if (number % 2 === 0) {
        console.log("Even Number: ",number);
    }
})