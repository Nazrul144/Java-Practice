//Find the all odd number from 61 to 100.
let sum = 0;
for(let n = 61; n<100; n++){
    if(n % 2 !== 0 ){
        sum = sum + n;
    }
}
console.log(sum);

// Find the all even number from 78 to 98

let count = 0;
for(let number = 78; number<=100; number++){
    if(number % 2 === 0){
        count = count + number;
    }
}
console.log(count);