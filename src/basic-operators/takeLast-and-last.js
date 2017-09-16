const Rx = require('rxjs');

/*
-0-1-2-3-4-5...
take
-0-1-2-3-4-5-6-7-8-9|
takeLast
-----------------(8,9)|
*/
// Rx.Observable.interval(100).take(10).takeLast(2).subscribe(x => console.log(x));

/*
-0-1-2-3-4-5...
take
-0-1-2-3-4-5-6-7-8-9|
takeLast
------------------(9)|
*/
Rx.Observable.interval(100).take(10).last().subscribe(x => console.log(x));