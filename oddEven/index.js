/*
Write a JavaScript for loop that will iterate from 0 to 15. 
For each iteration, it will check if the current number is odd or even,
 and display a message to the screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
--------
----------
*/


for (let index = 0; index < 16; index++) {
    if (index % 2 == 1) {
        const item = document.createElement("h1").innerHTML = `${index} is odd`;
        document.body.append(item)
    }
    else {
        const item = document.createElement("h1").innerHTML = `${index} is even`;
        document.body.append(item)
    }
    document.body.append(document.createElement("br"))
}

