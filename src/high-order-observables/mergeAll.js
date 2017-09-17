// mergeAll does not unsubscribe
// mergeAll(3) only will subscribe to three Observables at a time

const click$ = Rx.Observable
    .fromEvent(document, 'click');

const clock$ = click$
    .map(click => Rx.Observable.interval(1000))
    .mergeAll(3);

// flattening
// Observable<Observable<number>> --> Observable<number>

/**
-----------+--------+-----------
            \        \
             -0-1-2-3 -0-1-2-3-4-5-
             mergeAll
--------------0-1-2-3-405162738495...
 */