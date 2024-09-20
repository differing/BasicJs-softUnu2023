function cleverLily(input){
    let oldLili = Number(input[0]);
    let priceP = Number(input[1]);
    let priceTroy = Number(input[2]);

    let sum = 0;
    let y = 1;
    for(let i = 1; i <= oldLili; i++){
        if(i % 2 === 0){
            sum = sum + (10 * y) - 1;
            y++;
        } else {
            sum = sum + priceTroy;
        }
    }
    
    if(sum >= priceP){
        console.log(`Yes! ${(sum - priceP).toFixed(2)}`);
    } else {
       console.log(`No! ${(priceP - sum).toFixed(2)}`);
    }
}
cleverLily(["10", "170.00", "6"]);