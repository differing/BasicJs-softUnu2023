function journey(input){

    let bujet = Number(input[0]);
    let sessoan = input[1];

    let sum = 0.0;

    if(bujet <= 100){
        if(sessoan === "summer"){
            sum = bujet * 0.30;
            console.log("Somewhere in Bulgaria");
            console.log(`Camp - ${sum.toFixed(2)} `);
        } else if(sessoan === "winter") {
            sum = bujet * 0.70;
            console.log("Somewhere in Bulgaria");
            console.log(`Hotel - ${sum.toFixed(2)} `);
        }
    }
    else if(bujet > 100 && bujet <= 1000){
        if(sessoan === "summer"){
            sum = bujet * 0.40;
            console.log("Somewhere in Balkans");
            console.log(`Camp - ${sum.toFixed(2)} `);
        } else if(sessoan === "winter") {
            sum = bujet * 0.80;
            console.log("Somewhere in Balkans");
            console.log(`Hotel - ${sum.toFixed(2)} `);
        }

    }
    else if(bujet > 1000){
     //   if(sessoan === "summer"){
            sum = bujet * 0.90;
            console.log("Somewhere in Europe");
            console.log(`Hotel - ${sum.toFixed(2)} `);
    //    } else if(sessoan === "winter") {
     //       sum = bujet - bujet * 0.90;
       //     console.log("Somewhere in Europe");
         //   console.log(`Hotel - ${sum.toFixed(2)} `);
        //}
    }
    

}
journey(["50", "summer"]);