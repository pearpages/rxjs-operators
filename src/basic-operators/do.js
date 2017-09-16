const Rx = require('rxjs');

/**
It implicitly returns the same value that gets
--0--1--2--3--4...
do
--0--1--2--3--4...
 */

// Rx.Observable.interval(500).do(console.log(x));


/**
--0--1--2--3--4--5...
do
--0--1--2--3--4--5...
map
--0--1--2--3--4--5...
 */

Rx.Observable.interval(500).do(x => 10).map(x => x).subscribe(x => console.log(x));