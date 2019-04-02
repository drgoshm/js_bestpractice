/* TYPEs */

const val = 1 + ""; // Number to String
const str1 = +"15"; // String to Number
const str2 = ~~"15"; // String to Number



/* BITWISE OPERATION */
~15; // -16 = -n-1
~~15; // 15




/* BOOLEANs */
const true  = !0;
const false = !1;
const alsoFalse = !!0;


/* ARRAYs */

// instead slice(), splice() or pop()
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4;
 


/* MATH.pow(2, n) */
var pow2 = 2 << (n - 1);


/* MATH.round */
var rounded = (0.5 + somenum) << 0;
// or
var rounded = (0.5 + somenum) | 0;



/* MATH.floor */
var float = 367.9987;

float | 0 //367
float << 0 //367
float >> 0 //367
float >>> 0 //367
// nice looks - two bitwise NOT
~~float;

1553 / 10   | 0  // 155
1553 / 100  | 0 // 15
1553 / 1000 | 0 // 1


// Compute nearest lower power of 2 for n in [1, 2**31-1]:
function nearestPowerOf2(n) {
  return 1 << 31 - Math.clz32(n);
}


/* LOOPs */
//good: length cached 
for (var i = 0, l = arr.length; i < l; i++) {}

//backwards forloop + caching the length - the BEST
for (var length = arr.length, i = length - 1; i >= 0; --i) {}



/* CANVAS */
/* Clearing */
ctx.clearRect(0, 0, c.width, c.height);


