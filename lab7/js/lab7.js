/**
 * Author:   Jacob Rozio
 * Created:   2/3/2021
 *
 * (c) Copyright NA
 **/  q1s2


//Output
document.writeln("Heya, here's your new name");

function sortNames() {
   var userName = window.prompt("Hello. Please give me your name so I can fix it for you ");
   console.log("userName =", userName);
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   return nameSorted;
}
