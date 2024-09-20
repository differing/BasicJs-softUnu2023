function examPreparation(input){
    let index = 0;
    let notEvaluation = Number(input[index]);
    index++;
 
    let evaluation = 0;
    let nameProblem = input[index];
    index++;

    let indexNotEval = 0;
    let coutProblems = 0;
    let average = 0;
    let lastname = "";
   while(nameProblem !== "Enough"){
        evaluation = Number(input[index]);
        index++;
        lastname = nameProblem;
        if(evaluation <= 4 ){
            indexNotEval++;
            if(notEvaluation === indexNotEval){
            console.log(`You need a break, ${indexNotEval} poor grades.`);
            break;
            }
        }
        average = average + evaluation;
      
        nameProblem = input[index];
        
        coutProblems++;
        index++;

   }
    if(notEvaluation > indexNotEval){
        console.log(`Average score: ${(average/coutProblems).toFixed(2)}`);
        console.log(`Number of problems: ${coutProblems}`);
        console.log(`Last problem: ${lastname}`);
    }

}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);
