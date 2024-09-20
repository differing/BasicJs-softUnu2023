function oldBooks(input){
    let favouriteBook = input[0];
    let index = 1;
    let bookIsFoud = false;

    let nextBookName = input[index];
    while(nextBookName !== "No More Books"){
        if(nextBookName === favouriteBook){
            bookIsFoud = true;
            break;
        }
        index++;
        nextBookName = input[index];
    }
    if(bookIsFoud === false){
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"]);
