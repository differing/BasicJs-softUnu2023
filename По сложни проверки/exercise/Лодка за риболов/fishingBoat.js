function fishingBoat(input){
    let bujetGrup = Number(input[0]);
    let sesson = input[1];
    let countPerson = Number(input[2]);

    let sum = 0.0;

    if(sesson === "Spring"){
        if(countPerson <=6){
            sum = 3000 - 3000 * 0.10;
        } else if(countPerson >= 7 && countPerson <= 11) {
            sum = 3000 - 3000 * 0.15;
        } else if(countPerson >= 12){
            sum = 3000 - 3000 * 0.25;
        }
        if(countPerson % 2 === 0){
        sum = sum - sum * 0.05;
        }
    }
    else if(sesson === "Summer"){
        if(countPerson <=6){
            sum = 4200 - 4200 * 0.10;
        } else if(countPerson >= 7 && countPerson <= 11) {
            sum = 4200 - 4200 * 0.15;
        } else if(countPerson >= 12){
            sum = 4200 - 4200 * 0.25;
        }
        if(countPerson % 2 === 0){
            sum = sum - sum * 0.05;
            }
    }
    else if(sesson === "Autumn"){
        if(countPerson <=6){
            sum = 4200 - 4200 * 0.10;
        } else if(countPerson >= 7 && countPerson <= 11) {
            sum = 4200 - 4200 * 0.15;
        } else if(countPerson >= 12){
            sum = 4200 - 4200 * 0.25;
        }
    }
    else if(sesson === "Winter"){
        if(countPerson <=6){
            sum = 2600 - 2600 * 0.10;
        } else if(countPerson >= 7 && countPerson <= 11) {
            sum = 2600 - 2600 * 0.15;
        } else if(countPerson >= 12){
            sum = 2600 - 2600 * 0.25;
        }
        if(countPerson % 2 === 0){
            sum = sum - sum * 0.05;
            }
    }

    if(bujetGrup < sum){
        console.log(`Not enough money! You need ${(sum - bujetGrup).toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${(bujetGrup - sum).toFixed(2)} leva left.`);
    }
}

fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);