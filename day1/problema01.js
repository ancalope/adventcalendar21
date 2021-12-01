const fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8').split('\r\n').map((num)=>parseInt(num));
function problema01(array) {
    var c = 0;
    for (i = 0; i <= array.length; i++) {
        if (array[i] > array[i - 1]) {
            c++;
        }
    }
    return c;
}

problema01(input);
module.exports = problema01;


























