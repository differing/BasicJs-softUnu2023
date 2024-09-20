function fishTank(input){

    let lengtCm = Number(input[0]);
    let wiht = Number(input[1]);
    let hing = Number(input[2]);
    let procent = Number(input[3])/100;

    let kobici = (lengtCm * wiht * hing) / 1000;
    kobici = kobici *(1 - procent);

    console.log(kobici);

}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]
);