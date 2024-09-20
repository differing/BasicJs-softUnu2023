function time15Minutes(intput){
    let hours = Number(intput[0]);
    let minutes = Number(intput[1]);

    let sumMinutes = minutes + 15;
 //   console.log(sumMinutes);

    if(sumMinutes > 59){
        hours++;
        minutes = sumMinutes % 60;
    } else {
        minutes = sumMinutes;
    }
    if(hours == 24){
        hours=0;
    }
   // let sumMinutes = minutes + 15;
    if(minutes < 10){
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}

time15Minutes(["1", "46"]);
time15Minutes(["0", "01"]);
time15Minutes(["23", "59"]);
time15Minutes(["11", "08"]);
time15Minutes(["12", "49"]);