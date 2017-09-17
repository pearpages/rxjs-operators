// Use flattening operators instead of nested subscriptions (callback hell!)
// In case of doubt it's always preferrable to use switchMap over mergeMap

// Example

const userData$ = Rx.Observable.ajax({
    url: 'https://jsonplaceholder.typicode.com/users/1',
    method: 'GET'
});

const click$ = Rx.Observable
    .fromEvent(document, 'click');

click$.subscribe({
    next: function (ev) {
        userData$.subsribe({
            next: function (data) {
                console.log(data.response);
            }
        })
    }
});

// DO

// 1st click
// 2nd response

const click$ = Rx.Observable
    .fromEvent(document, 'click');

const userData$ = Rx.Observable.ajax({
        url: 'https://jsonplaceholder.typicode.com/users/1',
        method: 'GET'
    });

// with mergeMap we do not unsubscribe from the previous observable, meaning that in this example,
// everytime we click we create a new ajax call having 1,2,3.. overtime.
click$.mergeMap(() => userData$).subsribe(data => console.log(response.data));

// with switchMap we cancel the previous observable, so we always we'll have only one ajax call,
// just cancelling the previous one
click$.switchMap(() => userData$).subsribe(data => console.log(response.data));