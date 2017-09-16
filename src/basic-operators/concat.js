const Rx = require('rxjs');

const obs1$ = Rx.Observable.of(1,2,3,4);
const obs2$ = Rx.Observable.of(5,6,7,8,9);

/**
(1,2,3,4)|
concat
(1,2,3,4)(5,6,7,8,9)|
 */
// obs1$.concat(obs2$).subscribe(x => console.log(x));

Rx.Observable.concat(obs1$, obs2$).subscribe(x => console.log(x));
