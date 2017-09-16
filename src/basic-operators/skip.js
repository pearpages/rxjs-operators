const Rx = require('rxjs');

/*
(34,324,123,23,6)|
skip
(6)|
*/
Rx.Observable.of(34,324,123,23,6).skip(4).subscribe(x => console.log(x));