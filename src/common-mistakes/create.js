// Replace Observable.create with Observable creation helpers

// DO NOT use .create()
// You will have to emit errors
// You will have to deal with unsubsriptions
const click$ = Rx.Observable.create(
    function subscribe(observer) {
        const listener = function (ev){
            try { obersver.next(ev); }
            catch (err) { observer.error(err); }
        };

        document.addEventListener('click', listener);

        return function unsubscribe() {
            document.removeEventListener('click', listener);
        }

    }
);

// DO use helpers, they do All this for you

const click$ = Rx.Observable
    .fromEvent(document, 'click');