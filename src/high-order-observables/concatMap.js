const Rx = require('rxjs');

let val = 0;

Rx.Observable.interval(100).take(10)
    .concatMap(() => {
        val++;
        return Rx.Observable.interval(10).take(10).mapTo(val);
    })
    .subscribe(x => console.log(x));