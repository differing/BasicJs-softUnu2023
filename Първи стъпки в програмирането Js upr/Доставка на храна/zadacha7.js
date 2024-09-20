function footD(input){

    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);

    let priceChikenMenu = chikenMenu * 10.35;
    let pricefishMenu = fishMenu * 12.40;
    let priceVeganMenu = veganMenu * 8.15;

    let desert = (priceChikenMenu + pricefishMenu + priceVeganMenu) * 0.20;
    let dostavka = 2.50;

    let sum = priceChikenMenu + pricefishMenu + priceVeganMenu + desert + dostavka;
    console.log(sum);
}

footD(["2 ",
"4 ",
"3 "]
);