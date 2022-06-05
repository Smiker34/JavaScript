import * as math from './5.js';

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return math.sum(arg1, arg2);
        case "-":
            return math.diff(arg1, arg2);
        case "*":
            return math.mul(arg1, arg2);
        case "/":
            return math.div(arg1, arg2);
        default:
            return "Непредусмотренное дейтвие"
    }
}