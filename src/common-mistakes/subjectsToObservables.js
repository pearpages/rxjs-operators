// Convert RxJS Subjects to Observables.

// instead of (DO NOT)
const click$ = new Rx.Subject();

document.addEventListener('click', function (ev) {
    click$.next(ev);
});

click$.subscribe(function (ev) {
    console.log(ev);
});

// DO

const click$ = Rx.Observable.create(function subscribe(observer) {
    const listener = function (ev) {
        observer.next(ev);
    };

    document.addEventListener('click', listener);

    return function unsubscribe() {
        document.removeEventListener('click', listener);
    };
});

const subscription = click$.subscribe(x => console.log(x));

setTimeout(function () {
    subscription.unsubscribe();
}, 4000);