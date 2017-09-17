// switch, unsubscribes and starts the new observer when it arrives

const click$ = Rx.Observable
    .fromEvent(document, 'click');

const clock$ = click$
    .map(click => Rx.Observable.interval(1000))
    .switch();

/**
-----------+-------------------
            \
             -0-1-2-3
            switch
--------------0-1-2-3--0-1-2-3-4-5
 */