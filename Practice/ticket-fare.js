// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk
// */

let childrenAge = 22;
let seniorCitizenAge = 50;
let students = false;
let ticketFate = 800;

if(childrenAge<10){
    console.log("Free bus fare");
}
else if(students){
    let discount = 800*50/100;
    console.log("Your discount is" +discount);
    let totalFee = 800-discount;
    console.log("Now Pay: "+totalFee);
}
else if(seniorCitizenAge>=60){
    let seniorDiscount = 800 * 15 / 100;
    console.log("Your discount" +seniorDiscount);
    let payable = 800 - seniorDiscount;
    console.log(payable);
}
else{
    console.log("You have to pay regular free: 800 taka");
}