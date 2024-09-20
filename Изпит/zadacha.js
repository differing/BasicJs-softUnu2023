function grandpaStavri(input){
    let n = Number(input[0]);
    let sumLiters = 0;
    let gradus = 0; 
    for(let i = 1; i<=n; i++){
        sumLiters += Number(input[i]);
        i++;
        console.log(sumLiters);
        
    }
    console.log(sumLiters);
    //console.log(gradus/2);

}
grandpaStavri(["3",
"100",
"45",
"50",
"55",
"150",
"36"]);
//grandpaStavri(["2",
//"200",
//"43",
//"200",
//"40"]);

