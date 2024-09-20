function basketballEquipment(input){

    let priceYear = Number(input[0]);
    let basketBallKec = priceYear - priceYear * 0.40;
    let basketBallEkip = basketBallKec - basketBallKec * 0.20;
    let basketBallBall = basketBallEkip / 4;
    let acssesoar = basketBallBall / 5;

    let sum = basketBallKec + basketBallEkip + basketBallBall + acssesoar + priceYear;

    console.log(sum);

}
basketballEquipment(["365 "]);