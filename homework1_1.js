'use strict';
var x = [];
for (var i = 1; i < 10; i++) {
    x.push({'x': getRandomInt(1, 150), 'y': getRandomInt(1, 150)});
}

var third = '';
for (var arrayIndex in x) {
    third += ' ' + Object.values(x[arrayIndex]);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


