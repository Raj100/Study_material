

let t=prompt("Enter the number ");

let t2=t;
let sum=0;
let asmtrong=0;
while(t2!=0){
    sum=sum+parseInt(t2%10);
    asmtrong=asmtrong+Math.pow(t2%10,3);
    t2=parseInt(t2/10);
}
console.log("The sum of the digits of the number is: "+sum);
if(asmtrong==t){
    console.log("The number is an Armstrong number");
} 
else{
    console.log("The number is not an Armstrong number");
}
let flag=0;
for(let i=2;i<t;i++){
    if(t%i===0){
        flag=1;
    }
}
if(flag===0){
    console.log("The number is a prime number");
}
else{
    console.log("The number is not a prime number");
}
console.log("The factors of the number are: ");
for(let i=1;i<=t;i++){
    if(t%i===0){
        console.log(i + " ");
    }
}