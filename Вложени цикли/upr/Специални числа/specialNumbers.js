function specialNumbers(input){
    let startNum = 1111;
    let endNum = 9999;
    let strFinal = "";
    let n = Number(input[0]);
    let str = "";
    for(let i = startNum; i <= endNum; i++){
        let numb = i.toString();
       for(let strNum = 0; strNum < numb.length; strNum++){
            if(n % numb[strNum] === 0){
                str += numb[strNum];
            } else {
                break;
            }
          //  console.log(str + " ");
       }
       if(str.length === 4){
        strFinal += str + " ";
       }
       str = "";
       
    }
    console.log(strFinal);
}

specialNumbers(["3"]);
//specialNumbers(["11"]);
//specialNumbers(["16"]);