//Display sum of all odd numbers from 81 to 131:

let num = 81;
sum = 0;
while(num<=131){
    if(num %2 !==0){
        sum = sum+num;
        console.log(sum);
    }
    num++;
}

// Display sum of all even numbers from 206 to 311.

let num = 206;
sum = 0;
while(num<=311){
    if(num % 2 === 0){
        sum = sum+ num;
        console.log(sum);
    }
    num++;
}