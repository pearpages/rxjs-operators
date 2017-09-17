// Observables only have one way communication, ES6 generators do.
// there's none real pause and resume, because you can't pause an observable, you can only restart it
// here there's an example of how close you can get to it

const resume$ = new Rx.Subject();

const res$ = resume$
    .switchMap(resume =>
        resume ?
            Rx.Observable.interval(2000) : // interval restarts when we resume
            Rx.Observable.empty()
    )
    .do(x => console.log('request it!: ' + x))
    .switchMap(ev => Rx.Observable.ajax({
        url: 'http://myDomain.com/users/1',
        method: 'GET'
    }));

res$.subscribe(function (data) {
    console.log(data.response);
});

resume$.next(false);
setTimeout(() => resume$.next(true), 500);
setTimeout(() => resume$.next(false), 5000);
setTimeout(() => resume$.next(true), 6000);
setTimeout(() => resume$.next(false), 9000);