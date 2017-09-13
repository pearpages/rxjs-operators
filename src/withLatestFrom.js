const Rx = require('rxjs');

/*
(Hello)|
zip(inteval(100))
--H--e--l--l--o|
*/
const hello$ = Rx.Observable.from('Hello'.split('')).zip(Rx.Observable.interval(100), (x,y) => x);

/**
--0--1--2...
map
--true--false---true...
 */
const interval$ = Rx.Observable.interval(99).map(x => x % 2  == 0);

/**
--H--e--l--l--o|
--1--0--1--0--1|
withLatestFrom
--H--e--L--l--O|
 */
hello$.withLatestFrom(interval$, (hello, interval) => interval ? hello.toUpperCase() : hello).subscribe(x => console.log(x));

