function summerOutfit(input){
    let gradus = Number(input[0]);
    let time = input[1];

    if(time === "Morning"){
        if(gradus >= 10 && gradus <= 18){
            console.log(`It's ${gradus} degrees, get your Sweatshirt and Sneakers.`);
        } else if(gradus > 18 && gradus <= 24){
            console.log(`It's ${gradus} degrees, get your Shirt and Moccasins.`);
        } else if(gradus >= 25){
            console.log(`It's ${gradus} degrees, get your T-Shirt and Sandals.`);

        }
    }
    else if(time === "Afternoon"){
        if(gradus >= 10 && gradus <= 18){
            console.log(`It's ${gradus} degrees, get your Shirt and Moccasins.`);
        } else if(gradus > 18 && gradus <= 24){
            console.log(`It's ${gradus} degrees, get your T-Shirt and Sandals.`);
        } else if(gradus >= 25){
            console.log(`It's ${gradus} degrees, get your Swim Suit and Barefoot.`);
        }

    }
    else if(time === "Evening"){
        if(gradus >= 10 && gradus <= 18){
            console.log(`It's ${gradus} degrees, get your Shirt and Moccasins.`);
        } else if(gradus > 18 && gradus <= 24){
            console.log(`It's ${gradus} degrees, get your Shirt and Moccasins.`);
        } else if(gradus >= 25){
            console.log(`It's ${gradus} degrees, get your Shirt and Moccasins.`);
        }

    }
}

summerOutfit(["16", "Morning"]);