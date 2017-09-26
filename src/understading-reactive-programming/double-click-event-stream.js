const click$ = Rx.Observable.fromEvent(button, 'click');

const doubleClick$ = click$
    .buffer(() => click$.throttle(250))
    .map(arr => arr.length)
    .filter(len => len === 2);