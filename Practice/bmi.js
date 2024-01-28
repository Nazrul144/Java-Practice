/**
 * Calculating BMI with using condition:
 */


// I have used both condition to solve the problem. nested and simple condition

// if(BMI < 18.5){
//     console.log("You are underwieght");
// }
// else if(BMI >18.5 && BMI <24.9){
//     console.log("You are normal")
// }
// else if(BMI > 25 && BMI <29.9){
//     console.log("You are overweithgt")
// }
// else{
//     console.log("You are obse.")
// }

// const weight = 90;
// const height = 5;

// const BMI = weight/(height*height);
// console.log(BMI);

const BMI = 24;

if(BMI <18.5 ){
    console.log("You are underweithgt");
}
else{
    if(BMI > 18.5 && BMI <24.9){
        console.log("You are normal");
    }
    else{
        if(BMI >= 25 && BMI <29.9){
            console.log("You are overweighted")
        }
        else{
            console.log("You are obse");
        }
    }
}