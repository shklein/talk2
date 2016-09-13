var value = 42;

if (value >= 53) {
  value += 42;
} else {
  value -= 13;
}

console.log(value);

var string = "11";

value += string;

console.log(value);

var array = [];

//Create an array, loop through 'value' using charAt, set array[i] to each value

for (var i = 0; i < value.length; i++) {
  array.push(value.charAt(i));
}

array.pop();
array.shift();

console.log(array);

//6. Create a new variable. Loop backwards through the array and store each value into the new Variable, combining each of the values of that array (backwards remember!)
var newVar = " ";

for (var i = array.length-1; i >= 0; i--) {
  newVar += array[i];
}

console.log(newVar);

//parseInt both the 'value' and the new variable created in Step 6, ensure that both 'value' and the new variable are set to these new parsed values;

value = parseInt(value);
console.log(value);

newVar = parseInt(newVar);
console.log(newVar);

value += newVar;
console.log(value);

//If the new value of 'value' is less than 60, set 'value' equal to 14. If not, check to see if it is equal to 2930, if it is, set 'value' equal to 27. If neither of these are true, set the value to 2.

if (value < 60) {
  value = 14;
} else if (value == 2930) {
  value = 27;
} else {
  value = 2;
}

console.log(value);

var i = 10;

while (i > 0) {
  i--;
  value++;
}

console.log(value);

//Create a function that accepts an argument 'val'. The function should convert 'val' to a String, then drop the first character off the String, but only if there is more than 1 character in the String. Return 'val' and set the 'value' to the returned value.

function stringMe(val) {
  val = val.toString();
  if (val.length > 1) {
    val = val.slice(1);
    value = val;
}
  return val;
}



stringMe(value);

console.log(value);
