const fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf-8').split('\r\n');
function movement(input) {
    var horizontal = 0;
    var depth = 0;
    input.forEach(command => {
        var dir = command.split(' ')[0];
        var val = parseInt(command.split(' ')[1]);
        switch (dir) {
            case 'forward':
                horizontal += val;
                break;
            case 'up':
                depth -= val;
                break;
            case 'down':
                depth += val;
                break;
            default:
                break;
        }
    });
    return horizontal * depth;
}

var result = movement(input);
console.log(result);