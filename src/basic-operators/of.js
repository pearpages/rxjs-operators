const Rx = require('rxjs');

/*
(12345)|
*/
Rx.Observable.of(1, 2, 3, 4, 5).subscribe(x => console.log(x));
