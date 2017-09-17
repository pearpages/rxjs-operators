// move important effects from do to subscribe
// do is thought mainly for debugging purposes


// Example

function updateDot(x, y) {
    dotElem.style.left = `${x}px`;
    dotElem.style.top = `${y}px`;
}

Rx.Observable.fromEvent(document, 'click')
    .do(ev => updateDot(ev.clientX, ev.clientY))
    .switchMap(ev => Rx.observable.ajax({
        url: 'https://mydomain.com/users/1',
        method: 'GET'
    }))
    .subscribe(function (data){
        console.log(data.response);
    });

// it's better to do

const click$ = Rx.Observable.fromEvent(document, 'click')
    .subscribe(ev => updateDot(ev.clientX, ev.clientY));

const res$ = click$
.switchMap(ev => Rx.observable.ajax({
    url: 'https://mydomain.com/users/1',
    method: 'GET'
}));