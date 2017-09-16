const Rx = require('rxjs');

Rx.Observable.from(['a','b','c','b','a','z','a','b','n','c'])
    .distinct()
    .subscribe(x => console.log(x));

Rx.Observable.from(['a','b','c','b','a','z','a','b','n','c'])
.distinctUntilChanged()
.subscribe(x => console.log(x));