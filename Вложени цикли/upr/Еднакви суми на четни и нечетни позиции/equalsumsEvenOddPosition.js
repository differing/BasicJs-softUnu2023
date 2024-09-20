function equalSumsEvenOddPosition(input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let printline = "";
   
    for(let currentNum = startNum; currentNum <= endNum; currentNum++){
        let numAsString = String(currentNum);
        let evenSum = 0;
        let oddSum = 0;
       
        for(let index = 0; index < numAsString.length; index++ ){
            let currentDigit = Number(numAsString[index]);
            let position = index + 1;

            if(position % 2 === 0){
                evenSum += currentDigit;

            } else {
                oddSum += currentDigit;
            }
        }

        if(evenSum === oddSum){
            printline += `${numAsString} `;
         //   console.log(currentNum);
        }
      
    }
    console.log(printline);
}

equalSumsEvenOddPosition(["100000",
"100050"]);
