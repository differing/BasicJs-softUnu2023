function godzillaVsKong(input){
    
    let bujetFilm = Number(input[0]);
    let countStatis = Number(input[1]);
    let priceDrehi = Number(input[2]);

    let sumDecor = bujetFilm * 0.10;
    let sumDrehi = countStatis * priceDrehi;
    //console.log(sumDecor);
    //console.log(sumDrehi);
    if(countStatis >= 150) {
        sumDrehi = sumDrehi - sumDrehi * 0.10;
    }

    let priceFilm = sumDecor + sumDrehi;
   // console.log(priceFilm);
    if(bujetFilm < priceFilm){
        bujetFilm = priceFilm - bujetFilm;
        console.log("Not enough money!");
        console.log(`Wingard needs ${bujetFilm.toFixed(2)} leva more.`);
    } else {
        bujetFilm = bujetFilm - priceFilm;
        console.log("Action!"); 
        console.log(`Wingard starts filming with ${bujetFilm.toFixed(2)} leva left.`);
    }


}

godzillaVsKong(["20000", "120","55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
