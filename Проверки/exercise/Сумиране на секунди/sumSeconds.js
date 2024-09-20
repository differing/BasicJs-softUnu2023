function sumSeconds(input){
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThrid = Number(input[2]);

    let sumTime = timeFirst + timeSecond + timeThrid;
    let minutes = sumTime / 60;
    let seconds = sumTime % 60;

   // console.log(minutes);
  //  console.log(seconds);

    if(minutes < 1 && seconds < 10){
        console.log(`${0}:0${seconds}`);
        return;
    } else if(minutes <1){
        console.log(`${0}:${seconds}`);
        return;
    } 

    if(seconds < 10){
        console.log(`${Math.floor(minutes)}:0${seconds}`);
        return;
    } else {
        console.log(`${Math.floor(minutes)}:${seconds}`);
        return;
    }
    
}

//sumSeconds(["35", "45", "44"]);

sumSeconds(["14","12","10"]);