const Rx = require('rxjs');

// first emits, then causes silence
// it isn't a transformation operator it's a filter

/**
--0--1--2--3--4--5--6--7--8--9--10--11--12--13--14--15...
throotleTime(1000)
--0-----------------------------10--------------------...
 */

Rx.Observable.interval(100)
    .throttleTime(1000)
    .subscribe(x => console.log(x));