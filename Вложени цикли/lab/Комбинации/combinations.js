function combinations(input){
    let n = Number(input[0]);
    let index = 0;
    for(let i = 0; i <= n; i++){
        for (let y = 0; y <= n; y++) {
            for(let k = 0; k <= n; k++){
                if(i+y+k == n){
                    index++;
                }

            }
            
        }
    }
    console.log(`${index}`);
}

combinations(["25"]);