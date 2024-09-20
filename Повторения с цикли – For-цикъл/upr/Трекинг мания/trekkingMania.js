function trekkingMania(input){
    let num = input.shift();

    let fullPeople = 0;
    for(let i = 0; i<num; i++){
        fullPeople = fullPeople + Number(input[i]);
    }
   // console.log(fullPeople);
   let musala = 0;
   let monban = 0;
   let kilimanjaro = 0;
   let k2 = 0;
   let everest = 0;

    for(let i = 0; i<num; i++){
        if(Number(input[i]) <= 5){
            musala = musala + Number(input[i]);
        //    console.log(musala);
        }else if (Number(input[i]) >=6 && Number(input[i])<=12){
            monban = monban + Number(input[i]);
       //     console.log(monban);
        }else if (Number(input[i]) >=13 && Number(input[i])<=25){
            kilimanjaro = kilimanjaro + Number(input[i]);
        }else if (Number(input[i]) >=26 && Number(input[i])<=40){
            k2 = k2 + Number(input[i]);
        } else {
            everest = everest + Number(input[i]);
        }
    }

    console.log(`${(musala / fullPeople * 100).toFixed(2)}%`);
    console.log(`${(monban / fullPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / fullPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / fullPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / fullPeople * 100).toFixed(2)}%`);
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"]);
