//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){ 
    for (let i = 0; i < dog_names.length; i++) { // loop through names by starting at 0 and incrementing
        if (dog_string.includes(dog_names[i])) { // if the string includes the dog name
            console.log(`Matched ${dog_names[i]}`); // print matched + dog name
            break
        } else {
            console.log("No Matches"); // if no matches are present, print no matches
        }
    }
}

findWords(dog_string, dog_names)
//Call method here with parameters


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr) {
    let modifiedArr = []; // create a new array to store modified values
    for (let i = 0; i < arr.length; i++) { 
        if (i % 2 === 0) { 
            modifiedArr.push("even index"); // push "even index" to the new array
        } else {
            modifiedArr.push(arr[i]); // push original value to the new array for odd indices
        }
    }
    return modifiedArr; // return the modified array
}

console.log(replaceEvens(Given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// function evenOrOdd(number) {
//     if(number % 2 === 0){
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   }

// https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript

// function multiply(a, b){
//     let x = a * b;
//     return x
//   }
  