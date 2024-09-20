function salary(input){
    let n = Number(input.shift());
    let salary = Number(input.shift());
    let n1 = input.length;
   // console.log(n1);
    for(let i = 0; i<n1; i++){
        if(input[i] === "Facebook" ){
            salary = salary - 150;
        } else if( input[i] === "Instagram" ){
            salary = salary - 100;
        } else if( input[i] === "Reddit"){
            salary = salary - 50;
        }
    }

    if(salary <= 0){
        console.log("You have lost your salary.");
    } else {
    console.log(salary.toFixed(0));
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"]);

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]);

