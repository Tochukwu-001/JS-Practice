const btn = document.getElementById("btn");
const myForm = document.getElementById("form")

function fibonacci(n) {
    if (n < 0) return [];
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    let fib = [0, 1]; 
    for (let i = 2; i <= n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]); 
    }
    return fib;
}

function displayNumber() {
    myForm.addEventListener("submit", function(event){
        event.preventDefault()
    })
    const number = Number(document.getElementById("inputNumber").value)
    console.log(number);
    if (number <= 0) {
        alert("Please enter a non-zero valid number")
        return
    }
    const fibNum = fibonacci(number)
    document.querySelector("#result").textContent = `Fibonacci number at ${number} is ${fibNum[number]}`
    console.log(fibNum);

}

btn.addEventListener("click", ()=>{
    displayNumber()
})
// displayNumber();

// console.log(fibonacci(10));
// console.log(fibonacci(10)[12]);
