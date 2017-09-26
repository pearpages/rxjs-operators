// EXAMPLE 1

const numbers$ = Rx.Observable.interval(500).take(5);

numbers$
    .groupBy(x => x % 2)
    .map(innerObs => innerObs.count())
    .mergeAll()
    .subscribe(x => console.log(x));

// EXAMPLE 2

const bus$ = Rx.Observable.of(/* ... */)
    .concatMap(x => Rx.Observable.of(x).delay(500));

const all$ = bus$
    .groupBy(obj => obj.code)
    .mergeMap(innerObs => innerObs.skip(1).map(obj => obj.value))
    .subscribe(x => console.log(x));