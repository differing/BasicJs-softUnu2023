function petShop(input){

    let numsDogPack = Number(input[0]);
    let numsCatsPack = Number(input[1]);

    let priceDog = numsDogPack * 2.50;
    let priceCat = numsCatsPack * 4;


    console.log(`${priceDog + priceCat} lv.`);
}

petShop(["5", "4"]);