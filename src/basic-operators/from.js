Rx = require('rxjs');

Rx.Observable.from([1,2,3])
    .subscribe(x => console.log(x));