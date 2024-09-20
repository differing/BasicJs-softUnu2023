function  calculete(input){
    let depositSum = Number(input[0]);
    let timeDepozit = Number(input[1]);
    let yearProcent = Number(input[2]);
    
    let npatpanaLihva = depositSum * yearProcent / 100;
    let lihvaforMont = npatpanaLihva / 12;
    let sum = depositSum + (timeDepozit * lihvaforMont);

    console.log(sum);
}

calculete(["200 ", "3 ", "5.7 "]);