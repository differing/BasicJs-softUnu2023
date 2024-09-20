function repainting(input) {
    let plastik = Number(input[0]);
    let paint = Number(input[1]);
    let concentrat = Number(input[2]);
    let hours = Number(input[3]);

    plastik = (plastik + 2) * 1.50;
    paint = (paint + paint * 0.10) * 14.50;
    concentrat = concentrat * 5.00;
    let sumMaterial = plastik + paint + concentrat + 0.40;
    let sumMasters = (sumMaterial*0.30) * hours;
    let sum = sumMaterial + sumMasters;
    console.log(sum); 

}
repainting(["10", "11","4 ","8 "]);