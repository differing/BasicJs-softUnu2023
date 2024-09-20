function toyShop(input){

    const pricePuzeel = 2.60;
    const priceSpeakDili = 3;
    const priceBear = 4.10;
    const priceMinions = 8.20;
    const priceKamion = 2;

    let priceTrip = Number(input[0]);
    let countPuzzels = Number(input[1]);
    let countSpeakDoli = Number(input[2]);
    let countBear = Number(input[3]);
    let countMinions = Number(input[4]);
    let countKamion = Number(input[5]);

    let ostapka = 0.0;
    let countToys = countBear + countKamion + countMinions + countPuzzels + countSpeakDoli;
    let sumPrice = countBear * priceBear + countKamion * priceKamion  + countMinions * priceMinions + countPuzzels * pricePuzeel + countSpeakDoli * priceSpeakDili;

    if(countToys >= 50) {
        sumPrice = sumPrice - sumPrice * 0.25;
    }

    let totalSum = sumPrice - sumPrice * 0.10;
  //  totalSum = totalSum - priceTrip;
    
    if(priceTrip > totalSum){
        totalSum = priceTrip - totalSum;
        console.log(`Not enough money! ${totalSum.toFixed(2)} lv needed.`);
    } else {
        totalSum = totalSum - priceTrip;
    console.log(`Yes! ${totalSum.toFixed(2)} lv left.`);
    }

}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
