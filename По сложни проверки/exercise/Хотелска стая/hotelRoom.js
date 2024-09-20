function hotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);

    let apartamentPrice = 0;
    let studioPrice = 0;

    if(month === 'May' || month === 'October'){
        apartamentPrice = 65 * nights;
        studioPrice = 50 * nights;

        if(nights > 7 && nights <=14){
            studioPrice = studioPrice * 0.95;

        }else if(nights > 14){
            studioPrice = studioPrice * 0.70;
        }

    }else if(month === "June" || month === "September"){
        studioPrice = nights * 75.20;
        apartamentPrice = nights * 68.70;
        if(nights > 14){
            studioPrice = studioPrice * 0.80;
        }
    } else {
        studioPrice = nights * 76;
        apartamentPrice = nights * 77;
    }

    if(nights > 14){
        apartamentPrice = apartamentPrice * 0.90;
    }
    console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["May", "15"]);
