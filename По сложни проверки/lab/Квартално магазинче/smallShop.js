function smallShop(input){
    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    let sum = 0.0;

    if(city === "Sofia"){
        if(product === "coffee"){
            sum = count * 0.50;
        } else if(product === "water"){
            sum = count * 0.80;
        } else if(product === "beer"){
            sum = count * 1.20;
        } else if(product === "sweets"){
            sum = count * 1.45;
        } else if(product === "peanuts"){
            sum = count * 1.60;
        }
    } 
    else if(city === "Plovdiv"){
        if(product === "coffee"){
            sum = count * 0.40;
        } else if(product === "water"){
            sum = count * 0.70;
        } else if(product === "beer"){
            sum = count * 1.15;
        } else if(product === "sweets"){
            sum = count * 1.30;
        } else if(product === "peanuts"){
            sum = count * 1.50;
        }
    } 
    else if(city === "Varna"){
        if(product === "coffee"){
            sum = count * 0.45;
        } else if(product === "water"){
            sum = count * 0.70;
        } else if(product === "beer"){
            sum = count * 1.10;
        } else if(product === "sweets"){
            sum = count * 1.35;
        } else if(product === "peanuts"){
            sum = count * 1.55;
        }
    }
    console.log(sum);
}
smallShop(["coffee", "Varna", "2"]);