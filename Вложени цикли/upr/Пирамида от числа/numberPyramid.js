function numberPyramid(input){
    let num = Number(input[0]);

    let count = 1;
    let isBiger = false;
    for(let i=1; i<=num; i++){
        let buff = "";
        for(let j = 1; j<=i; j++){
            buff += count + " ";
            count++;
            if(count>num){
                isBiger = true;
                break;
            }
        }
        console.log(buff);
        if(isBiger){
            break;
        }
    }
}

numberPyramid(["7"]);
numberPyramid(["12"]);
numberPyramid(["15"]);