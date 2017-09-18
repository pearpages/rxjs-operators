const Rx  = require('rxjs');

// EXAMPLE 1

// let val = 0;

// Rx.Observable.interval(1000)
//     .mergeMap(() => {
//         val++;
//         return Rx.Observable.interval(100).mapTo(val).take(5);
//     })
//     .subscribe(x => console.log(x));

// EXAMPLE 2

// Rx.Observable.from([[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13]])
//     .mergeMap(x => Rx.Observable.from(x))
//     .subscribe(x => console.log(x));

// EXAMPLE 3

Rx.Observable.interval(500).take(5)
    .mergeMap(x => {
        if (x % 2 === 0) {
            return Rx.Observable.of(x);
        } else {
            return Rx.Observable.of(x+1, x+2);
        }
    }).subscribe(x => console.log(x));