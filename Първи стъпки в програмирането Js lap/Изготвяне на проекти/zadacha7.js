function answer(input){
    let name = String(input[0]);
    let numProj = Number(input[1]);
    
    let hours = numProj * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${numProj} project/s.`);
}

answer(['Julian', '4']);