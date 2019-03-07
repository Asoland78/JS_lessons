'use strict';
var x = [];
for (var i = 1; i < 10; i++) {
    x.push(getRandomInt(1, 150));
}

var p = [];
var result = x.reduce(function (total, current) {
    if (!p.includes(current)) {
        return p.push(current);
    }

}, 0);


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}