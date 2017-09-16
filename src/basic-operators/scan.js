const Rx = require('rxjs');

/**
(Hello)|
zip
--H--e--l--l--o|
scan
--H--He--Hel--Hell--Hello|
 */
Rx.Observable.from('Hello'.split('')).zip(Rx.Observable.interval(100), (a,b) => a).scan((acc, c) => acc+c, '').subscribe(x => console.log(x));