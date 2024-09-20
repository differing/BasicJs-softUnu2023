function oscars(input){
    let nameActior = input.shift();
    let countPoint = Number(input.shift());
    let numJuri = Number(input.shift());

   for(let i = 0; i<numJuri; i++){
        let name = input.shift();
        countPoint = countPoint + (Number(input.shift()) * Number(name.length))/2;
    //    console.log(countPoint); 
        if(countPoint >= 1250.5){
            break;
        }
   }

   if(countPoint < 1250.5){
        console.log(`Sorry, ${nameActior} you need ${(1250.5 - countPoint).toFixed(1)} more!`)
   } else {
        console.log(`Congratulations, ${nameActior} got a nominee for leading role with ${countPoint.toFixed(1)}!`);
   }


}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]);

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);
