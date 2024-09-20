function sumNumbers(input){

    let num = Number(input[0]);
    let sum = 0;
    let index = 1;

    while(sum < num){
        let num2 = Number(input[index]);
        sum = sum + num2;
        index++;
        console.log(sum);
    }
    console.log(sum);

}

sumNumbers(["100",
"10",
"20",
"30",
"40"]);
