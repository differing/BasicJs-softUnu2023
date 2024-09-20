function sum(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let mgicNum = Number(input[2]);
    let counterCombin = 0;
    let isFout= false;
    for(let i = start; i <= end; i++){
        for(let y = start; y <= end; y++){
            let sum = i+y;
            counterCombin++;
            if(sum === mgicNum){
                console.log(`Combination N:${counterCombin} (${i} + ${y} = ${mgicNum})`);
            
                isFout = true;
                break;
            }
        }
        if(isFout){
            break;
        }
    }
    if(isFout === false){
    console.log(`${counterCombin} combinations - neither equals ${mgicNum}`);
    }
}

sum(["1",
"10",
"5"]);
