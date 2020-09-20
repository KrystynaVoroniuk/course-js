let inputN1 = +prompt("Enter an integer number1:");
let operation = prompt("Enter symbol operation(+,-,*,/):");
let inputN2 = +prompt("Enter an integer number2:");

switch(operation){
    case "+":
        console.log(`Result ${inputN1} + ${inputN2} = ${inputN1 + inputN2}`);
        break;
    case "-":
        console.log(`Result ${inputN1} - ${inputN2} = ${inputN1 - inputN2}`);
        break;    
    case "*":
        console.log(`Result ${inputN1} * ${inputN2} = ${inputN1 * inputN2}`);
        break;
    case "/":
        console.log(`Result ${inputN1}/${inputN2} = ${inputN1 / inputN2}`);
        break;
    default:
        console.log("Please, try again!");
        break;            

}