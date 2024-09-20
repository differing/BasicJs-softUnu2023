function trainTheTrainers(input){
    let index = 0;
    let juriCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalScore = 0;
    let scoreCount = 0;
    while(command !== "Finish"){
        let presentationName = command;
        let avgScore = 0;
        for(let judge = 1; judge <= juriCount; judge++){
            let currentScore = Number(input[index]);
            index++;
            avgScore += currentScore;
        }
        let avgScoreTotal = avgScore / juriCount;
        console.log(`${presentationName} - ${avgScoreTotal.toFixed(2)}.`);

        totalScore += avgScoreTotal;
        scoreCount++;
        command = input[index];
        index++;
    }
    let finalAvgScore = totalScore / scoreCount;
    console.log(`Student's final assessment is ${finalAvgScore.toFixed(2)}.`)
}

trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);
