const Rx = require('rxjs');

/*
---0---1---2---3|
*/
Rx.Observable.interval(1000).take(4).subscribe(x => console.log(x));

/*
---0---1---2---3...
*/
// Rx.Observable.interval(1000).subscribe(x => console.log(x));

