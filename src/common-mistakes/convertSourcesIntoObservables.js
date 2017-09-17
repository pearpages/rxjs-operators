// Convert an underlying source of data into an Observable

// 1. Identify
// 2. Conver to Observables
// 3. Compose

const click$ = Rx.Observable.fromEvent(document, 'click');

const res$ = Rx.Observable.from(
    fetch('https://myDomain.com/users/0')
    .then(res => res.json())
);

const count$ = Rx.Observable.merge(click$, res$);

one$
    .mapTo(1)
    .scan((acc,x) => acc + x, 0)
    .subscribe(x => console.log(x));
