const Rx = require('rxjs');

Rx.Observable.from(['a','b','c','d',1,'e','f',2,'g'])
    .map(x => x.toUpperCase())
    .catch(err => Rx.Observable.empty())
    .subscribe(x => console.log(x));