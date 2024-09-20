function multiplicationTable(input){
    let num = Number(input[0]);
    let prog = 0;
    for(let i = 1; i<=10; i++){
        prog = i * num;
        console.log(`${i} * ${num} = ${prog}`)
    }
}
multiplicationTable("5");