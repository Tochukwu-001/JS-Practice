const fibonacciSeries = [0, 1, 1, 2, 3, 5, 8, 13, 21];
const goldenRatios = [];

for(i=2; i<fibonacciSeries.length; i++){
    const ratio = fibonacciSeries[i] / fibonacciSeries[i-1]
    goldenRatios.push(ratio)
}
console.log(goldenRatios);

goldenRatios.forEach(ratio => console.log(ratio))