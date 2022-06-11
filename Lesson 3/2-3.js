var article = "any_name", price = 500;
var basket = [[article, price],
[article, price],
[article, price]];

function countBasketPrice(array) {
    var sum = 0;
    for (var item in basket) {
        sum += basket[item][1];
    }
    return sum;
}

console.log(countBasketPrice(basket))