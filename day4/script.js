//////////////////////////////////////////// 1 ///////////////////////////////////////////
alert("Lab 1!!!!!!!!!!!!!");
var again;
do {
    var input = prompt("Enter your text");
    var search_word = prompt("Enter the word to be searched");
    input = input.trim();
    search_word = search_word.trim();
    search_word = " " + search_word + " ";
    var position = input.indexOf(search_word);
    if (position == -1) alert(search_word + " doesn't exist");
    else alert(search_word + " exists at position " + (position + 1));
    again = confirm("Again ?");
} while(again);
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// 2 ///////////////////////////////////////////
alert("Lab 2!!!!!!!!!!!!!");
var arr = [];
for (var i = 0; i < 5; i++) {
    number = prompt("Enter a value");
    arr.push(number);
}
var num = prompt("Enter number to be searched");
position = arr.indexOf(num, 0);
console.log(arr);
console.log("positions::")
while(position != -1) console.log(position + 1), position = arr.indexOf(num, ++position);
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// 3 ///////////////////////////////////////////
alert("Lab 3!!!!!!!!!!!!!");
var arr = [];
for (var i = 0; i < 5; i++) {
    number = prompt("Enter a value");
    arr.push(number);
}
var temparr = [...arr];
console.log("Lab 3:: Array in ascending order =", arr.sort(), "\nArray in descending order =", [...arr].reverse(),
            "\nOriginal Array =", temparr);
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// 4 ///////////////////////////////////////////
document.writeln("<hr><hr><h1>Lab 4!!!!!!!</h1>");
var arr1 = [1, 2, 3];
var arr2 = [5, 6, 7];
document.writeln(`<h2>arr1 = ${arr1}<br>arr2 = ${arr2}</h2>`);
var arr3;

arr3 = arr1.push(...arr2); // arr3 = length of arr1 = 6 (type of arr3 is converted to number)
                           // && arr1 = [1, 2, 3, 5, 6, 7] 
document.writeln("<hr><h2>arr3 = arr1.push(...arr2)</h2>")
document.writeln(`<h3>
                        Value of arr1 = ${arr1}<br>Length of arr1 = ${arr1.length}
                        <br>Value of arr3 = ${arr3}<br>Type of arr3 = ${typeof arr3}
                </h3>`);
arr3 = arr1.push(arr2); // arr3 = length of arr1 = 7 (same as above)
                        // && arr1 = [1, 2, 3, 5, 6, 7, [5, 6, 7]]
document.writeln("<h2>After arr3 = arr1.push(arr2)</h2>")
document.writeln(`<h3>
                    Value of arr1 = ${arr1}<br>Length of arr1 = ${arr1.length}
                    <br>Value of arr3 = ${arr3}<br>Type of arr3 = ${typeof arr3}
                </h3>`);
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////// 5 ///////////////////////////////////////////
document.writeln("<br><hr><hr><h1>Lab 5: Difference between splice() and slice()</h1>");
arr1 = [1, 2, 3, 4];
document.writeln(`<h2>arr1 = ${arr1}</h2><hr>`);
arr2 = arr1.splice(1, 2); // it will remove elements starting in pos 1 and count 2 elements from original arr && return them as new array
document.writeln("<h2>arr2 = arr1.splice(1, 2)</h2>");
document.writeln(`<h3>arr1 = ${arr1}<br>arr2 = ${arr2}</h3>`);

// arr1 = [1, 2, 3, 4];
arr2 = arr1.splice(1, 0, 2, 3);
arr2 = arr1.slice(1, 2) // it will return elements from pos 1 to pos 2 (not including)
document.writeln("<h2>arr2 = arr1.splice(1, 0, 2, 3);<br>arr2 = arr1.slice(1, 2)</h2>");
document.writeln(`<h3>arr1 = ${arr1}<br>arr2 = ${arr2}</h3>`);