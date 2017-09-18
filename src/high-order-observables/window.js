// split

const Rx = require('rxjs');

Rx.Observable.interval(100)
    .window(Rx.Observable.interval(1000))
    .map(x => x.count())
    .switch()
    .subscribe(x => console.log(x));