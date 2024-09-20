function readText(input){

    let text = input[0];
    let i = 1;
    if(text != "Stop"){
    console.log(text);
    }
    while(text != "Stop"){
        text = input[i];
        if(text != "Stop"){
        console.log(text);
        }
        i++;
    }

}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);

