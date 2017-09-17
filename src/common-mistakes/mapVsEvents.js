// Use the map operator instead of firing events on a Subject

// DO NOT
// it is a very bad smell to see a next inside a next

const x$ = new Rx.Subject();

const click$ = Rx.Observable
    .fromEvent(document, 'click');

click$.subscribe({
    next: function(ev) {
        x$.next(ev.clientX);
    }
});

x$.subscribe({
    next: function next(x) {
        console.log(x);
    }
});

// DO

const click$ = Rx.Observable
    .fromEvent(document, 'click')
    .map(click => click.clientX)
    .subscribe(x => console.log(x));