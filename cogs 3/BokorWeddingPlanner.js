

// function howManyGuests(){
//     let numberGuests = prompt ("How many guests will be attending?");
//     let numberTables = prompt ("How many tables will be available?");
//     alert ("There will be "+ numberGuests + " guests attending, with " + numberTables + " tables available.");
//     alert (calculateTables);
//     ////alert ("You will have " + tablesOf4() + " tables of 4, and " + extraTables() + " table of " + tablesRemainder);
//     ////why does this function not run when its called by the alert? it just shows the text1
// }


// function tablesOf4 (){
//     var tablesFor4 = Math.floor(numberGuests/4 + 1);
//     return tablesFor4;
// }

// function otherTables(){
//     var extraTables = numberGuests%4; 
//     return extraTables;
// }

// function calculateTables (){
//     alert ("You will have " + tablesOf4() + " tables of 4, and " + otherTables() + " table of " + extratables);
// }






// var numberGuests = prompt("How many guests will be attending?");
// var numberTables = prompt("How many tables will be available?");

// var tableInput = (numberTables - 1);
// var peopleInput = Math.floor(numberGuests/numberTables + 1);

// //number of full tables (tables of 4)
// function tablesOf4(numberTables){
//     var numberFull = (numberTables - 1);
//     return numberFull;
// }

// //number of people in the full tables 
// function peopleFullTables(numberGuests, numberTables){
//     var peopleFull = Math.floor(numberGuests/numberTables + 1);
//     return peopleFull;
// }

// //number of partial tables (not 4 people)
// function partialTables(numberTables, tableInput){
//     var partialNumber = (numberTables - tableInput);
//     return partialNumber;
// }

// //number of people in partial tables 
// function peoplePartialTables(numberGuests, tableInput, peopleInput){
//     var partialPeople = Math.floor(numberGuests - tableInput * peopleInput);
//     return partialPeople;
// }

// alert ("Your " + numberGuests + " guests attending will be seated as follows: " + tablesOf4(numberTables) + " tables of " + peopleFullTables(numberGuests, numberTables) + " , and " + partialTables(numberTables, tableInput) + " table of " + peoplePartialTables(numberGuests, tableInput, peopleInput) + ".");






function userInputs(){
    let numberGuests = prompt("How many guests will be attending?");
    let numberTables = prompt("How many tables will be available?");

    var tableInput = (numberTables - 1);
    var peopleInput = Math.floor(numberGuests/numberTables + 1);

    //number of full tables (tables of 4)
    function tablesOf4(numberTables){
        var numberFull = (numberTables - 1);
        return numberFull;
    }

    //number of people in the full tables 
    function peopleFullTables(numberGuests, numberTables){
       var peopleFull = Math.floor(numberGuests/numberTables + 1);
        return peopleFull;
    }

    //number of partial tables (not 4 people)
    function partialTables(numberTables, tableInput){
        var partialNumber = (numberTables - tableInput);
         return partialNumber;
}

    //number of people in partial tables 
    function peoplePartialTables(numberGuests, tableInput, peopleInput){
        var partialPeople = Math.floor(numberGuests - tableInput * peopleInput);
        return partialPeople;
}

    alert ("Your " + numberGuests + " guests attending will be seated as follows: " + tablesOf4(numberTables) + " tables of " + peopleFullTables(numberGuests, numberTables) + " , and " + partialTables(numberTables, tableInput) + " table of " + peoplePartialTables(numberGuests, tableInput, peopleInput) + ".");
}