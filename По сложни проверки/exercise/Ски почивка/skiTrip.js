function skiTrip(input){
    let day = Number(input[0]) -1;
    let typeHause = input[1];
    let value = input[2];

    let price = 0.0;
    if(typeHause === "room for one person"){
        if(day < 10){
            price = 18 * day;
        } else if(day >= 10 && day < 15){
            price = 18 * day;
        } else if(day >= 15){
            price = 18 * day;
        }
        if(value === "positive") {
            price = price + price * 0.25;
        } else if(value == "negative"){
            price = price - price * 0.10;
        }
    }
    else if(typeHause === "apartment"){
        if(day < 10){
            price = (25 * day) - (25 * day) * 0.30;
        } else if(day >= 10 && day < 15){
            price = (25 * day) - (25 * day) * 0.35;
        } else if(day >= 15){
            price = (25 * day) - (25 * day) * 0.50;
        }
        if(value === "positive") {
            price = price + price * 0.25;
        } else if(value == "negative"){
            price = price - price * 0.10;
        }
    }
    else if(typeHause === "president apartment"){
        if(day < 10){
            price = (35 * day) - (35 * day) * 0.10;
        } else if(day >= 10 && day < 15){
            price = (35 * day) - (35 * day) * 0.15;
        } else if(day >= 15){
            price = (35 * day) - (35 * day) * 0.20;
        }
        if(value === "positive") {
            price = price + price * 0.25;
        } else if(value == "negative"){
            price = price - price * 0.10;
        }
    }
    console.log(price.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
