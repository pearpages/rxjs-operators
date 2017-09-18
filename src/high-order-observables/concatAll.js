// concatAll is the equivalent of mergeAll(1)
// if we already have an observable we put the next one in a buffer and when the first finishes we start it

const Rx = require('rxjs');

const obs1$ = Rx.Observable.interval(100).take(4);
const obs2$ = Rx.Observable.interval(100).take(5);
const obs3$ = Rx.Observable.interval(100).take(6);

Rx.Observable.merge([obs1$, obs2$, obs3$]).concatAll().subscribe(x => console.log(x));