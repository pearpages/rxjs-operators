const numbers$ = Rx.Observable.interval(500).take(5);

numbers$
    .groupBy(x => x % 2)
    .map(innerObs => innerObs.count())
    .mergeAll()
    .subscribe(x => console.log(x));