function solve(input){
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let outputNumbers = '';
    for (let i = n; i < m; i++) {
      if(i % 9 === 0){
       // TODO: Add the number to the sum.
       // TODO: Add the number to the outputNumbers.
       sum = sum + i;
       outputNumbers = outputNumbers + i.toString() + "\n";
      }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumbers);
  }