function shcool(input){

    let countPencel = Number(input[0]) * 5.80;
    let countMarkers = Number(input[1]) * 7.20;
    let litersPreparat = Number(input[2]) * 1.20;
    let procent = Number(input[3])/100;


    let sum = countMarkers + countPencel + litersPreparat;

    sum = sum - (sum * procent);
    
    console.log(sum);
    
}

shcool(["10",
    "11",
    "4",
    "8"]
);