const Rx = require('rxjs');

const interval1$ = Rx.Observable.interval(100).take(5);
const interval2$ = Rx.Observable.interval(200).take(5);

/*
--0--1--2--3--4|
----0----1----2----3----4|
combineLatest
----00--02-3--48---12---16|

(0,0),(1,0),(2,0)(2,1)(3,1)(4,1)(4,2)(4,3)(4,4)
*/
Rx.Observable.combineLatest(interval1$, interval2$, (x,y) => x * y).subscribe(x => console.log(x));