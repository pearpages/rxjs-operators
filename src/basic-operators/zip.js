const Rx =  require('rxjs');

/**
0--------1--------2--------3---------4---------5---------...
0----2----4----6-----8-----10----12----14----16----18----...
zip
0--------2--------8--------18--------32--------50--------....
 */

Rx.Observable.zip(Rx.Observable.interval(200),Rx.Observable.interval(100).map(x => x * 2), (x,y) => x * y).subscribe(x => console.log(x));