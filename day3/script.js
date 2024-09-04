// Difference between undefined & null
console.log("Type of undefined is", typeof(undefined), "\nType of null is", typeof(null));
if (null == undefined) console.log("\nThey have the same value\n");
else console.log("\nThey don't have the same value\n");
if (null === undefined) console.log("They have the same type\n");
else console.log("They don't have the same type");
var variable; // undefined
var variable2 = null; // null



/////////////////////////////
// lab 1
alert("Lab 1!!!!!!!!!!");
var sum = 0;
var number;
while (sum <= 100) {
    number = +prompt ("Enter a number");
    if (number === 0) break;
    sum += number;
}
console.log("Lab 1:: Summation =", sum, "\n");
////////////////////////////

// lab 2
alert("Lab 2!!!!!!!!!!");
var input = prompt("Enter your string");
var cnt = 0;
for (var i = 0; i < input.length; i++) {
    if (input[i] == 'e') cnt++;
}
console.log("Lab 2:: Number of char 'e' in this string =", cnt, "\n");
////////////////////////////

// lab 3
alert("Lab 3!!!!!!!!!!");
while (true) {
    input = prompt("Enter your string or end");
    if (input === "end") break;
    var case_sensitive = confirm("Consider case sensitivity ?");
    if (!case_sensitive) input = input.toLowerCase();
    var size = input.length;
    var isPalindrome = true;
    for (var i = 0; i < size / 2; i++) {
        if (input[i] != input[size - i - 1]) {
            isPalindrome = false;
            break;
        }
    }
    console.log("Lab 3::", input, "is", (isPalindrome ? "Palindrome" : "not Palindrome"), "\n");
}

////////////////////////////

// lab 4
alert("Lab 4!!!!!!!!!!");
input = prompt("Enter text to display in document");
for (var i = 1; i <= 6; i++) document.writeln("<h" + i + ">" + input + "</" + i + ">");