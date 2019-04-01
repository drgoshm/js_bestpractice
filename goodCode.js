/* Math.round */

var rounded = (0.5 + somenum) << 0;
// or
var rounded = (0.5 + somenum) | 0;

/* Math.floor */

var float = 367.9987;

float | 0 //367
float << 0 //367
float >> 0 //367
float >>> 0 //367
// nice looks
~~float;
