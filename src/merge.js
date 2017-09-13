const Rx = require('rxjs');

const obs1$ = Rx.Observable.interval(100);
const obs2$ = Rx.Observable.interval(100);

/*
0--1--2--...
0--1--2--...
merge
00--11--22--...
 */
// obs1$.merge(obs2$).subscribe(x => console.log(x));

Rx.Observable.merge(obs1$, obs2$).subscribe(x => console.log(x));