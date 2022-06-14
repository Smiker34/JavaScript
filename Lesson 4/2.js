var article = {
    "name": "any_name",
    "price": 500
};

var basket = [article, article, article]

function countBasketPrice(array) {
    var sum = 0;
    for (var item in basket) {
        sum += basket[item]["price"];
    }
    return sum;
}

console.log(countBasketPrice(basket))