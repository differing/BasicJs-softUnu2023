function torta(input){
    let index = 0;
    
    let length = Number(input[index]);
    index++;
    let heaght = Number(input[index]); 
    index++;

    let command = "";

    let area = length * heaght;
    let price = 0;
    while(area > 0){
        command = input[index];
        price = input[index];
        index++;
        if(command !== "STOP"){
        area = area - Number(price);
        }
        if(command === "STOP"){
            console.log(`${area} pieces are left.`)
            break;
        } 

    }
    if(area <= 0){
    console.log(`No more cake left! You need ${Math.abs(area)} pieces more.`);
    }
}

torta(["10",
"10",
"20",
"20",
"20",
"20","21"]);

torta(["10",
"2",
"2",
"4",
"6",
"STOP"]);
