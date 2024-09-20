function animalType(input){

    let nemeAnimal = input[0];

    if(nemeAnimal === "dog"){
        console.log("mammal");
    } else if(nemeAnimal === "crocodile"  || nemeAnimal ==="tortoise" || nemeAnimal === "snake"){
        console.log("reptile");
    }else {
        console.log("unknown");
    }
    

} 
animalType(["dog"]);