function passwordGuess(input){

    const pass = "s3cr3t!P@ssw0rd";

    let passWord = input[0];

    if(pass == passWord){
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }

}

passwordGuess(["s3cr3t!P@ssw0rd"]);