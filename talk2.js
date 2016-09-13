//1.
var value = 42;
//2.
if (value >= 53) {
  value += 42;
} else {
  value -= 13;
}
console.log('Step 2:', value);
//3.
var string = '11';

value += string;
console.log('Step 3:', value);
//4.
var array = [];

for (i = 0; i < value.length; i++) {
  array.push(value.charAt(i));
}
//5.
array.shift();
array.pop();
//6.
var val2 = 0;
for (i = array.length-1; i >= 0; i--) {
   val2 += array[i];
}
//7.
value = parseInt(value);
val2 = parseInt(val2);

//8.
value += val2;
console.log('Step 8:', value);
//9.
if (value < 60) {
  value = 14;
} else if (value == 2930) {
  value = 27;
} else {
  value = 2;
}
console.log('Step 9:', value);
//10.
var i = 10;
while (i > 0) {
  i--;
  value ++;
}
console.log('Step 10:', value);
//11.
function convert(val) {
val = val.toString();

  if (val.length > 1) {
    val = val.slice(1);
    value = val;
  }
return val;

}
//12.
convert(value);
//13.
console.log(value);
