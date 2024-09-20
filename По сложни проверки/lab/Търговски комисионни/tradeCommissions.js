function tradeCommissions(input){
    let tawn = input[0];
    let volumeBay = Number(input[1]);

    let comision = 0.0;

    if(tawn === "Sofia"){
        if(volumeBay >= 0 && volumeBay <= 500){
            comision = volumeBay * 0.05;
        } else if(volumeBay > 500 && volumeBay <= 1000){
            comision = volumeBay * 0.07;
        } else if(volumeBay > 1000 && volumeBay <= 10000){
            comision = volumeBay * 0.08;
        } else if(volumeBay > 10000){
            comision = volumeBay * 0.12;
        } else {
            console.log("error");
        }
    }
    else if( tawn === "Varna"){
        if(volumeBay >= 0 && volumeBay <= 500){
            comision = volumeBay * 0.045;
        } else if(volumeBay > 500 && volumeBay <= 1000){
            comision = volumeBay * 0.075;
        } else if(volumeBay > 1000 && volumeBay <= 10000){
            comision = volumeBay * 0.10;
        } else if(volumeBay > 10000){
            comision = volumeBay * 0.13;
        } else {
            console.log("error");
        }

    }
    else if( tawn === "Plovdiv"){
        if(volumeBay >= 0 && volumeBay <= 500){
            comision = volumeBay * 0.055;
        } else if(volumeBay > 500 && volumeBay <= 1000){
            comision = volumeBay * 0.08;
        } else if(volumeBay > 1000 && volumeBay <= 10000){
            comision = volumeBay * 0.12;
        } else if(volumeBay > 10000){
            comision = volumeBay * 0.145;
        } else {
            console.log("error");
        }

    }
    else {
        console.log("error");
    }

    if(comision > 0.0){
        console.log(comision.toFixed(2));
    }
}
tradeCommissions(["Sofia","1500"]);
tradeCommissions(["Kaspichan", "-50"]);
