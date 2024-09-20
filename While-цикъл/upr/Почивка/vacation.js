function vacation(input){
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let savings = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let days = 0;
    let spendCounter = 0;

    while(savings < neededMoney){
        let current = Number(input[index]);
        index++;
        days++;

        if(command === "spend"){
            savings -= current;
            spendCounter++;

            if(savings < 0){
                savings = 0;
            }
        } else {
            savings += current;
            spendCounter = 0;
        }

        if(spendCounter === 5) {
            break;
        }

        command = input[index];
        index++;
    }

    if(spendCounter === 5){
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"]);

