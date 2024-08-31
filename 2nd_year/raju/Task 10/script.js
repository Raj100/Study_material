let A=1000;
let P=500;
let r=0.1;
let n=1;
let t= prompt("Enter the time in years: ");

let interest= (P*r*n*t)/100;
let compound_interest= P*(Math.pow((1+r/n),n*t));
console.log("Compound Interest is: ");

console.log("Compound Interest is: "+ compound_interest + "\nAmount = " + A + "\nPrincipal = " + P + "\nRate = " + r + "\nTime = " + t + "\nNumber of times interest applied per time year = " + n);
