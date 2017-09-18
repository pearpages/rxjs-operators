const click$ = Rx.Observable
    .fromEvent(document, 'click');

const responseObservable = click$
    .switchMap(click => performRequest());