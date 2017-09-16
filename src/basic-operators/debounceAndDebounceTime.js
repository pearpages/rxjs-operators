const Rx = require('rxjs');

// it's a transformation operator
// waits for silence, then emits
// ignores all the values until the debounceTime has passed

// debounceTime -> delay
// debounce -> delayWhen

Rx.Observable.interval(100)
    .take(10)
    .scan((acc,current) => ''+acc+current, '')
    .debounceTime(3000)
    .subscribe(x => console.log(x));