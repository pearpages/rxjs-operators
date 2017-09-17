// Use take / takeUntil instead of manually **unsubscribing** from Observables

// Example

const click$ = Rx.Observable
    .fromEvent(document, 'click');

const subscription = click$.subscribe(function (ev) {
    console.log(ev.clientX);
});

setTimeout(function () {
    subscription.unsubscribe();
}, 4000);

// DO

const fourClicks$ = Rx.Observable
    .fromEvent(document, 'click')
    .take(4);

// or

const four$ = Rx.Observable.interval(4000).take(1);

/**
click$                 --c---c----c-----c---c---c---c--c----c---c...
four$                  ---------------0|
clickUntilFour$        --c---c----c----|
 */

const clickUntilFour$ = $clicks.takeUntil(four$)
    .subscribe(x => console.log(x));