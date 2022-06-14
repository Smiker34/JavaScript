//Корзина не динамическая, но рабочая.
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

function basket_menu() {

    document.querySelector("#basket").append(basket_button);

    basket_button.append("Basket");
    basket_button.onclick = function () { //Почему-то когда пишешь функцию отдельно и обращаешься, ничего не работает
        if (document.getElementById("menu")) {
            document.getElementById("menu").remove();
        } else {
            var menu = document.createElement("div");
            menu.setAttribute("id", "menu");
            var basket_fullness = basket.basket_lenght()
            if (basket_fullness > 0) {
                var sum = basket.total_price()
                if (basket_fullness % 10 == 1) {
                    menu.append("В корзине " + basket_fullness + " товар на сумму " + sum + " рублей.");
                } else if (1 < basket_fullness % 10 && basket_fullness % 10 < 5) {
                    menu.append("В корзине " + basket_fullness + " товара на сумму " + sum + " рублей.");
                } else {
                    menu.append("В корзине " + basket_fullness + " товаров на сумму " + sum + " рублей.");
                }
            } else {
                menu.append("Корзина пуста.");
            }

            menu.style.border = "2px solid black";

            document.querySelector("#basket").appendChild(menu);
        }
    };

    window.onclick = function (event) {
        if (!event.target.matches("button")) {
            document.getElementById("menu").remove();
        }
    }

}
basket_menu();
