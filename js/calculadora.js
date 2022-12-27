function addScreen(n){
    document.getElementById("screen").value += n;
}

function clearScreen(){
    document.getElementById("screen").value = "";
}

function calculate(){
    let operation = document.getElementById("screen").value;
  
    let res = "Err";

    let operatorPos = findOperatorPos(operation);
    if(operatorPos != -1){

        let value1 = operation.substring(0, operatorPos);
        let value2 = operation.substring(operatorPos + 1, operation.length);
        let operator = operation[findOperatorPos(operation)];

        if(
            checkOperator(value1) && 
            checkOperator(value2) 
            ){
                res =  doTheMath(value1, operator, value2);
            }
        console.log(`${value1} `);
        console.log(`${operator} `);
        console.log(`${value2} `);
    }
    document.getElementById("screen").value = res;
} 

// Get operator´s position
function findOperatorPos(operation){ 
    let operatorPos = -1;
    //find the first symbol after a number
    for(let i = 0; i< operation.length && operatorPos == -1; i++){
        if( operation[i+1] != undefined && 
            !isNaN(operation[i])  && //first pos needs to be a number
            isNaN(operation[i + 1]) //second pos needs to be a symbol
            ) {
            operatorPos = i + 1;  
        } 
    }
    return operatorPos;
}

// Calculate
function doTheMath(value1, operator, value2){
    let res = "E";
    switch(operator){
        case "+":
            res = parseInt(value1) + parseInt(value2);
            break;
        case "-":
            res = parseInt(value1) - parseInt(value2);
            break;
        case "*":
            res = parseInt(value1) * parseInt(value2);
            break;
        case "/":
            res = parseInt(value1) / parseInt(value2);
            break;
    }
    return res;
}

//check if value doesn´t include symbols "*"" or "/" as first position, and  there is no other symbol after the numbers.
function checkOperator(value){
    let isCorrect = true;

    if(value[0] == "*" || value[0] == "/"){ 
        isCorrect = false;
    }
    for (let i = 1; i < value.length; i++) { 
        if (isNaN(value[i])) { 
            isCorrect = false;
        }  
      }
      return isCorrect;
}





// operaciones correctas
// 1+2
// 1*63
// -1 * -1
// +1 --1
// 174/-2


// el operador : + - * /
// SIEMPRE
// va a ser primero el simbolo no numerico seguido de un simbolo numerico
// isNaN()

// +1--1
// operador: -
// 1ª operando: +1
// 2ª operando: -1


// operaciones incorrectas: E
// 3+6+5 ..includesThirdValue
// /9*3 // startsWithUnacceptedSymbol
// *3*3 // startsWithUnacceptedSymbol
// 4-/6 // startsWithUnacceptedSymbol
// 7* / *6 //includesDoubleSymbol
// - *5 ..y este //includesDoubleSymbol
