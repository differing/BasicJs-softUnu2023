function newHouse(input){

    let typeFloar = input[0];
    let countFloar = Number(input[1]);
    let bujet = Number(input[2]);

    let sum = 0.0;

    if(typeFloar === "Roses"){
        if(countFloar > 80){
            sum = (countFloar * 5) - (countFloar * 5 * 0.10);
        } else {
            sum = countFloar * 5;
        }
    }
    else if(typeFloar === "Dahlias"){
        if(countFloar > 90) {
            sum = (countFloar * 3.80) - (countFloar * 3.80 * 0.15);
        } else {
            sum = countFloar * 3.80;
        }
    }
    else if(typeFloar === "Tulips"){
        if(countFloar > 80) {
            sum = (countFloar * 2.80) - (countFloar * 2.80 * 0.15);
        } else {
            sum = countFloar * 2.80;
        }

    }
    else if(typeFloar === "Narcissus"){
        if(countFloar < 120) {
            sum = (countFloar * 3.00) + (countFloar * 3.00 * 0.15);
        } else {
            sum = countFloar * 3.00;
        }
    }
    else if(typeFloar === "Gladiolus"){
        if(countFloar < 80) {
            sum = (countFloar * 2.50) + (countFloar * 2.50 * 0.20);
        } else {
            sum = countFloar * 2.50;
        }

    }
    if(bujet < sum){
    console.log(`Not enough money, you need ${(sum - bujet).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${countFloar} ${typeFloar} and ${(bujet - sum).toFixed(2)} leva left.`);
    }

}
newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
/*
    •	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
•	Брой цветя - цяло число в интервала [10…1000]
•	Бюджет - цяло число в интервала [50…2500]

*/