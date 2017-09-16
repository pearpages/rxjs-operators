const Rx = require('rxjs');


/*
--0--01--02--03...
map
--0--10--10--10...
*/

// Rx.Observable.interval(500).mapTo(10).subscribe(x => console.log(x));

/*
--0--01--02--03...
map
--0--10--20--30...
*/

Rx.Observable.interval(500).map(x => x * 10).subscribe(x => console.log(x));