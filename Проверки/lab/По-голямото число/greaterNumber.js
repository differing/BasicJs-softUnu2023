function greaterNumber(input){
    let numberFirst = Number(input[0]);
    let numberSecond = Number(input[1]);

    if(numberFirst >= numberSecond){
        console.log(numberFirst);
    } else {
        console.log(numberSecond);
    }

}
greaterNumber(["10","10"]);