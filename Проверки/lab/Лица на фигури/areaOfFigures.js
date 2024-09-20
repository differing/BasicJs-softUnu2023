function areaOfFigures(input) {
    let figure = input[0];
    let dimensionFirst = Number(input[1]);
    let dimensionSecond = Number(input[2]);

    switch(figure){
        case "square" : {
                           let result = dimensionFirst * dimensionFirst;
                           console.log(result.toFixed(3));
                        }
                        break;
        case "rectangle" : {
                                let ressult = dimensionFirst * dimensionSecond;
                                console.log(ressult.toFixed(3));

                            }break;
        case "circle" : { 
                            let ressult = dimensionFirst * dimensionFirst * Math.PI;
                            console.log(ressult.toFixed(3));

                        }break;
        case "triangle" : {

                        let result  = (dimensionFirst * dimensionSecond)/2;
                        console.log(result.toFixed(3));

                        }break;
    }
}

areaOfFigures(["triangle",
"4.5",
"20"]);