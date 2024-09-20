function fruitShop(input){

    let product = input[0];
    let day = input[1];
    let count = Number(input[2]);

    let sum = 0.0;

    if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        if(product === "banana"){
            sum = count * 2.50;
        } else if(product === "apple"){
            sum = count * 1.20;
        } else if(product ==="orange"){
            sum = count * 0.85;
        } else if(product === "grapefruit"){
            sum = count * 1.45;
        } else if(product === "kiwi"){
            sum = count * 2.70;
        } else if(product === "pineapple"){
            sum = count * 5.50;
        } else if(product === "grapes"){
            sum = count * 3.85;
        } else {
            console.log("error");
        }
    }
    else if(day === "Saturday" || day === "Sunday"){
        if(product === "banana"){
            sum = count * 2.70;
        } else if(product === "apple"){
            sum = count * 1.25;
        } else if(product ==="orange"){
            sum = count * 0.90;
        } else if(product === "grapefruit"){
            sum = count * 1.60;
        } else if(product === "kiwi"){
            sum = count * 3.00;
        } else if(product === "pineapple"){
            sum = count * 5.60;
        } else if(product === "grapes"){
            sum = count * 4.20;
        } else {
            console.log("error");
        }
    }
    else {
        console.log("error");
    }

    if(sum > 0.0) {
        console.log(sum.toFixed(2));
    }
}

//fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["tomato", "Monday", "0.5"]);
