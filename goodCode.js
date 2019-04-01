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
// nice looks
~~float;

// Compute nearest lower power of 2 for n in [1, 2**31-1]:
function nearestPowerOf2(n) {
  return 1 << 31 - Math.clz32(n);
}


/* LOOPs */
//good: length cached 
for (var i = 0, l = arr.length; i < l; i++) {}

//backwards forloop + caching the length - the BEST
for (var length = arr.length, i = length - 1; i >= 0; --i) {}



