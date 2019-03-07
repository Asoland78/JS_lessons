var str = 'asdasd \n123dsdf  \nGssdfsdfsdf'; // какая-то строка, разделитель \n

var str2 = '';
var array = str.split('\n').forEach(function (callback, thisArg) {
    if (thisArg !== 0) {
        str2 += '<p>' + callback + '</p>';
    } else {
        str2 += '<h1>' + callback + '</h1>';
    }
});


