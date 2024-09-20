function lunchBreak(input){
    
    let nameFilm = input[0];
    let filmTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeLunch = breakTime * (1/8);
    let time = breakTime * (1/4);

    let overTime = breakTime - timeLunch - time;
    let result = overTime - filmTime;

    if(result < 0){
        console.log(`You don't have enough time to watch ${nameFilm}, you need ${Math.ceil(result * -1)} more minutes.`);
    } else { 
        console.log(`You have enough time to watch ${nameFilm} and left with ${Math.ceil(result)} minutes free time.`);
    }

}

lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);