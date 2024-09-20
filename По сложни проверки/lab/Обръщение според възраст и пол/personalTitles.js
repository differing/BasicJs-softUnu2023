function personalTitles(input){

    let year = Number(input[0]);
    let sex = input[1];

    if(sex === "m"){
        if(year >= 16){
            console.log("Mr.");
        } else {
            console.log("Master");
        }
    }

    if(sex === "f"){
        if(year >= 16){
            console.log("Ms.");
        } else {
            console.log("Miss");
        }
    }

}

personalTitles(["12","f"]);
