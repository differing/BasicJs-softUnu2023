function operationsBetweenNumbers(input){

    let acumulatorA = Number(input[0]);
    let acumulatorB = Number(input[1]);
    let operant  = input[2];

    let oldEven = "";
    let result = 0.0;
    
    
    if(operant === "+"){
        
        result = acumulatorA + acumulatorB;
        if(result % 2 === 0){
            oldEven = "even"
        } else {
            oldEven = "odd"
        }
        console.log(`${acumulatorA} + ${acumulatorB} = ${result} - ${oldEven} `);
    }
    else if(operant === "-"){
        result = acumulatorA - acumulatorB;
        if(result % 2 === 0){
            oldEven = "even"
        } else {
            oldEven = "odd"
        }
        console.log(`${acumulatorA} - ${acumulatorB } = ${result} - ${oldEven} `);
    }
    else if(operant === "*"){
        result = acumulatorA * acumulatorB;
        if(result % 2 === 0){
            oldEven = "even"
        } else {
            oldEven = "odd"
        }
        console.log(`${acumulatorA} * ${acumulatorB} = ${result} - ${oldEven} `);
    }
    else if(operant === "/"){

        if(acumulatorA != 0 && acumulatorB !=0){
        result = acumulatorA / acumulatorB;
        console.log(`${acumulatorA} / ${acumulatorB } = ${result.toFixed(2)}`);
        } else {
            let value = Math.max(acumulatorA, acumulatorB);
            console.log(`Cannot divide ${value} by zero`);
        }
    }
    else if(operant === "%"){
        if(acumulatorA != 0 && acumulatorB !=0){
            result = acumulatorA % acumulatorB;
            console.log(`${acumulatorA} % ${acumulatorB} = ${result}`);
            } else {
                let value = Math.max(acumulatorA, acumulatorB);
                console.log(`Cannot divide ${value} by zero`);
            }
    }

}
operationsBetweenNumbers(["10", "12", "+"]);