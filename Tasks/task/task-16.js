function mynum(number){
    return number % 3 === 0;
}
let num = 10900
if(mynum(num)){
    console.log(`${num} is multiple of 3`)
} else{
    console.log(`${num} is not multiple of 3`)
}
// 2. check particular sub-word exist in a string or not e.g. i am learning js: 'js' exit or not

let a = "i am learning js"
console.log(a.includes('js'))
console.log(a.includes("hello are there"))

// 3. calculate complex interest ((p/r )* t) / 100 ): take principle, rate and time from user

function CompoundInterest(principal, rate, time, n) {
    const amount = principal * Math.pow((1 + rate / (n * 100)), n * time);
    const interest = amount - principal;
    return interest;
  }
  const principal = parseFloat(prompt("Enter the principal amount: "));
  const rate = parseFloat(prompt("Enter the annual interest rate (in %): "));
  const time = parseFloat(prompt("Enter the time (in years): "));
  const n = parseInt(prompt("Enter the number of times interest is compounded per year: "));
  
  const interest = CompoundInterest(principal, rate, time, n);
  console.log(`The compound interest is: ${interest.toFixed(2)}`);

  