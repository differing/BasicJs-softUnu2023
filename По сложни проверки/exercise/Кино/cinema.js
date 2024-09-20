function cinema(input) {
    let typeProjection = input[0];
    let row = Number(input[1]);
    let col = Number(input[2]);

    let sum = 0.0;
    if(typeProjection === "Premiere" ) {
        sum = row * col * 12.00;
    } 
    else if(typeProjection === "Normal"){
        sum = row * col * 7.50;
    }
    else if(typeProjection === "Discount"){
        sum = row * col * 5.00
    }

    console.log(sum.toFixed(2) + " leva");
    
}
cinema(["Premiere", "10", "12"]);
/*
•	Premiere – премиерна прожекция, на цена 12.00 лева.
•	Normal – стандартна прожекция, на цена 7.50 лева.
•	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
*/