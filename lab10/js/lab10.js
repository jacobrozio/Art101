/**
 * Author:   Jacob Rozio
 * Created:   2.15.2021
 *
 * (c) Copyright by NA
 **/

 //find button
 var button = document.getElementById("my-button");
 //add event listener to button

 button.addEventListener('click', function() {
 //find input value
 var inputValue = document.getElementById('the-input').value;
   //  console.log("You input:", inputValue);
 //split
 var nameArray = inputValue.split("");
     //sort
 var nameArraySort = nameArray.sort();
       //join the sorted array back to string
 var sortedName = nameArraySort.join("");

 console.log(sortedName);
  output.innerHTML = sortedName
 });
