const addon = require('./build/Release/addon');

function jsSum() {
    var i;
    var a = 3.1415926; 
    var b = 2.718;
    for (i = 0; i < 100000000; i++) {
        a += b;
    }
    return a
}

console.time('js');
console.log(jsSum());
console.timeEnd('js')

console.time('c++');
console.log(addon.sum());
console.timeEnd('c++')