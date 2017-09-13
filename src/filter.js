const Rx = require('rxjs');

/**
0--1--2--3--4--5...
filter
0-----2-----4---...
 */

Rx.Observable.interval(500).filter(x => x % 2 == 0).subscribe(x => console.log(x));