const Rx = require('rxjs');

/*
0--1--2--3--4--5--6--7--8--9|
startWith
99--0--1--2--3--4--5--6--7--8--9|
*/
Rx.Observable.interval(100).take(10).startWith(99).subscribe(x => console.log(x));