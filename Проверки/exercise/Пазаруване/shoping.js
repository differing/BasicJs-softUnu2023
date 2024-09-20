function shoping(input){
    let priceVideoCard = 250;

    let bujetPetyr = Number(input[0]);
    let countVideoCart = Number(input[1]);
    let countProcessor = Number(input[2]);
    let countRAM = Number(input[3]);

    let priceProcessor = (countVideoCart * priceVideoCard) * 0.35;
    let priceRAM = (countVideoCart * priceVideoCard) * 0.10;
    
    let sumVideo = countVideoCart * priceVideoCard;
    let sumProcessor = countProcessor * priceProcessor;
    let sumRAM = countRAM * priceRAM;

    let totalSum = sumVideo + sumProcessor + sumRAM;

    if(countVideoCart > countProcessor){
        totalSum = totalSum - (totalSum * 0.15);
    }

    if(bujetPetyr >= totalSum){
        totalSum = bujetPetyr - totalSum;
        console.log(`You have ${totalSum.toFixed(2)} leva left!`);
    } else {
        totalSum = totalSum - bujetPetyr;
        console.log(`Not enough money! You need ${totalSum.toFixed(2)} leva more!`);
    }
   
}

shoping(["900", "2", "1", "3"]);
shoping(["920.45", "3", "1", "1"]);
