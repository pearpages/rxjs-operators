const Rx = require('rxjs');

/**
(987654321)|
take
(987)|
 */
// Rx.Observable.of(9,8,7,6,5,4).take(3).subscribe(x => console.log(x));

/**
(987654321)|
take
(9)|
 */
// Rx.Observable.of(9,8,7,6,5,4).first().subscribe(x => console.log(x));

/**
(987654321)|
take
(8)|
 */
Rx.Observable.of(9,8,7,6,5,4).first(x => x % 2 == 0).subscribe(x => console.log(x));
