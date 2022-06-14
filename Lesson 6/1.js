//Вынес функцию отдельно, корзина теперь просто отображается/скрывается, текст меняется через отдельный параграф.

var basket_button = document.createElement("button");
var basket = {
    items: [],

    total_price() {
        var sum = 0;
        for (var item in this.items) {
            sum += (this.items[item]["price"] * this.items[item]["count"]);
        }
        return sum;
    },

    basket_lenght() {
        var count = 0;
        for (var item in this.items) {
            count += this.items[item]["count"];
        }
        return count;
    }
};

function basket_text_maker() {
    var basket_fullness = basket.basket_lenght()
    if (basket_fullness > 0) {
        var sum = basket.total_price()
        if (basket_fullness % 10 == 1) {
            document.getElementById("basket_text").textContent = ("В корзине " + basket_fullness + " товар на сумму " + sum + " рублей.");
        } else if (1 < basket_fullness % 10 && basket_fullness % 10 < 5) {
            document.getElementById("basket_text").textContent = ("В корзине " + basket_fullness + " товара на сумму " + sum + " рублей.");
        } else {
            document.getElementById("basket_text").textContent = ("В корзине " + basket_fullness + " товаров на сумму " + sum + " рублей.");
        }
    } else {
        document.getElementById("basket_text").textContent = ("Корзина пуста.");
    }

    document.getElementById("menu").style.display = "block";
};

function basket_menu() {

    document.querySelector("#basket").append(basket_button);
    basket_button.append("Basket");

    var menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.style.display = "none";
    menu.style.border = "2px solid black";

    var basket_text = document.createElement("p");
    basket_text.setAttribute("id", "basket_text");

    document.querySelector("#basket").appendChild(menu);
    document.querySelector("#menu").appendChild(basket_text);

    basket_button.onclick = basket_text_maker;
};

window.addEventListener("click", function (event) {
    if (!event.target.matches("button")) {
        document.getElementById("menu").style.display = "none";
    }
});

basket_menu();