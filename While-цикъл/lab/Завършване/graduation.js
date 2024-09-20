function graduation(input) {
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 0;
    while (grades <= 12) {
       index++;
       let grade = Number(input[index]);
       if (grade < 4.00) {
          // TODO: increase excluded count and break if is more than 1
          excluded++;
          if(excluded == 2){
            console.log(`${name} has been excluded at ${grades} grade`)
            break;
          }
          continue;
       }
    // TODO: add grade to sum and increase grades count
       sum = sum + grade;
       grades++;
    }
    let average = sum / 12;    //TODO: print the output
    if(grades > 12){
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    }
 }

 graduation(["Gosho", 
 "5",
 "5.5",
 "6",
 "5.43",
 "5.5",
 "6",
 "5.55",
 "5",
 "6",
 "6",
 "5.43",
 "5"]);
 