function cinemaTickets(input){
    let index = 0;
    let command = input[index];
    index++;
    let studentTicket = 0;
    let standartTicket = 0;
    let kidTicket = 0;

    while(command !== "Finish"){
        let moveName = command;
        let freeSeats = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let soldTickets = 0;

        while(ticketType !== "End"){
            switch(ticketType){
                case "standard": standartTicket++; break;
                case "kid": kidTicket++; break;
                case "student": studentTicket++; break;
            }
            soldTickets++;
            if(soldTickets >= freeSeats){
                break;
            }
            ticketType = input[index];
            index++;
        }
        let precent = soldTickets / freeSeats * 100;
        console.log(`${moveName} - ${precent.toFixed(2)}% full.`);
        command = input[index];
        index++;
    }
    let totalTickets = kidTicket + standartTicket+ studentTicket;
    console.log(`Total tickets: ${totalTickets}`);

    let studetProc = studentTicket / totalTickets * 100;
    console.log(`${studetProc.toFixed(2)}% student tickets.`);

    let standardProc = standartTicket / totalTickets * 100;
    console.log(`${standardProc.toFixed(2)}% standard tickets.`);

    let kidProc = kidTicket / totalTickets * 100;
    console.log(`${kidProc.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);
