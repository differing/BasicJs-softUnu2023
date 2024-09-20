function yardGreening(input){

    let meters = Number(input[0]);

    let finalPrice = meters * 7.61;
    let discount = finalPrice * 0.18;

    let finalPriceAndDiscont = finalPrice - discount;

    console.log(`The final price is: ${finalPriceAndDiscont} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);