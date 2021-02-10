/**
 * Author:   Jacob Rozio
 * Created:   2/3/2021
 *
 * (c) Copyright NA
 **/
 function sortNames() {
    var jacobRozio = window.prompt("Hello. Please give me your name so I can fix it for you ");
    console.log("jacobRozio =", jacobRozio);
    var jacobRozioArray = jacobRozio.split('');
    console.log("jacobRozioArray =", jacobRozioArray);
    var jacobRozioSort = jacobRozioSort.sort();
    console.log("jacobRozioSort =", jacobRozioSort);
    var jacobRozioSorted = jacobRozioSort.join('');
    console.log("jacobRozioSorted =", jacobRozioSorted);
    return jacobRozioSorted;
 }


//Output
document.writeln("Hello! Here is your new Name: ", sortNames(), "</br>");
