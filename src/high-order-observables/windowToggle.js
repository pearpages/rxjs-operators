const click$ = Rx.Observable.fromEvent(document, 'click');
const clock$ = Rx.Observable.interval(1000);
const down$ = Rx.Observable.fromEvent(document, 'mousedown');
const up$ = Rx.Observable.fromEvent(document, 'mouseup');

const result$ = clock$
    .windowToggle(down$, () => up$)
    .mergeAll()
    .subscribe(x => console.log(x));