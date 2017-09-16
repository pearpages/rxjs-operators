const Rx = require('rxjs');

/**
obs1$
--|--|--|--...
obs2$
------------------------_---_
merge
--|--|--|--|--|--|--|--|_-|-_|-_|...
 */

const obs$1 = Rx.Observable.interval(100).mapTo('|');
const obs$2 = Rx.Observable.interval(200).mapTo('_').delay(1000);
// obs$1.merge(obs$2).subscribe(x => console.log(x));

/**
--|--|--|--...
delayWhen
----------------------|--|--|--...
 */
Rx.Observable.interval(100)
    .mapTo('|')
    .delayWhen(() => Rx.Observable.interval(1000))
    .subscribe(x => console.log(x));
