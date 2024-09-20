function tennisRanklist(input){
    let coutTornament = Number(input.shift());
    let points = Number(input.shift());
    let W = 0;
    let startPoins = points;

    for(let i = 0; i<coutTornament; i++){
        let result = input[i];
        if(result === "F"){
            points = points + 1200;
        } else if(result === "SF"){
            points = points + 720;
        } else if(result === "W") {
            points = points + 2000;
            W++;
        }
    }
    console.log(`Final points: ${(points).toFixed(0)}`);
    console.log(`Average points: ${Math.floor((points-startPoins)/coutTornament)}\n${(W / coutTornament * 100).toFixed(2)}%`);
}

tennisRanklist(["5","1400",
"F",
"SF",
"W",
"W",
"SF"]);