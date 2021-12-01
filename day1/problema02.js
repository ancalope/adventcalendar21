const problema01 = require('./problema01')
const fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8').split('\r\n').map((num)=>parseInt(num));
function problema02(array) {
    var sums = [];
    for (i = 2; i <= array.length; i++) {
        sum = array[i] + array[i-1] + array[i-2];
        sums.push(sum);
    }
    return problema01(sums);
}

problema02(input);
