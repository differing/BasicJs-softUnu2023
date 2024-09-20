function bonusScore(input){
    let point = Number(input[0]);
    let bonusPoint = 0.0;
    
    if(point % 2 == 0){
        bonusPoint = bonusPoint + 1;
    }
    if(point % 10 == 5) {
        bonusPoint = bonusPoint + 2;
    }


    if(point <= 100){
        bonusPoint = bonusPoint + 5;
    } else if(point > 100 && point <= 1000){
        bonusPoint = bonusPoint + (point * 0.20);
    } else if(point > 1000){
        bonusPoint = bonusPoint + (point * 0.10);
    }
    console.log(bonusPoint);
    console.log(point + bonusPoint);
}
bonusScore(["20"]);