function traveling(input){
    let index = 0;
    let command = input[0];
    index++;

    while(command !== "End"){
        let destination = command;
        let budjet = Number(input[index]);
        index++;
        let sum = 0;
        while(sum < budjet){
            let money = Number(input[index]);
            index++;
            sum += money;
        }

        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
    }

}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);
