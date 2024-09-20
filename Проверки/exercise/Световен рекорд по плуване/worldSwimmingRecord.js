function worldSwimmingRecord(input){
    let recordSec = Number(input[0]);
    let dimensionMeters = Number(input[1]);
    let timeToMetersInSec = Number(input[2]);

    let ivanMeters = dimensionMeters * timeToMetersInSec;
    let ivanTimes = Math.floor(dimensionMeters / 15) * 12.5;

    //console.log(ivanMeters);
    //console.log(ivanTimes);
    let totalTime = ivanMeters + ivanTimes;
    //console.log(totalTime);
   
    let time = 0.0;
    if(recordSec <= totalTime){
         time = totalTime - recordSec;
        console.log(`No, he failed! He was ${time.toFixed(2)} seconds slower.`);
    } else {
        //time = recordSec - totalTime;
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
