function booksList(input){

    let numPages = Number(input[0]);
    let numPadegsHours = Number(input[1]);
    let numDays = Number(input[1]);

    let numberPagesDay = numPages / numPadegsHours;
    let hoursOfDay = numberPagesDay / numDays; 

    console.log(hoursOfDay * 10);
}

booksList(["212 ","20 ","2"]);