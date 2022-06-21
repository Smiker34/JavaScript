var basket = JSON.parse(sessionStorage.getItem("basket"));

basket.total_price = function () {
    var sum = 0;
    for (var item in this.items) {
        sum += (this.items[item]["price"] * this.items[item]["count"]);
    }
    return sum;
};

basket.basket_lenght = function () {
    var count = 0;
    for (var item in this.items) {
        count += this.items[item]["count"];
    }
    return count;
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

document.getElementById("address").style.display = "none";
document.getElementById("comment").style.display = "none";

//Навигация
var navigation = document.createElement("div");
navigation.setAttribute("id", "navigation");

var content_button = document.createElement("button");
content_button.setAttribute("id", "content_button");
content_button.append("Содержимое");
content_button.onclick = function () {
    document.getElementById("address").style.display = "none";
    document.getElementById("comment").style.display = "none";
    document.getElementById("contain").style.display = "block";

};

var address_button = document.createElement("button");
address_button.setAttribute("id", "address_button");
address_button.append("Адрес доставки");
address_button.onclick = function () {
    document.getElementById("contain").style.display = "none";
    document.getElementById("comment").style.display = "none";
    document.getElementById("address").style.display = "block";
};

var comment_button = document.createElement("button");
comment_button.setAttribute("id", "comment_button");
comment_button.append("Комментарий");
comment_button.onclick = function () {
    document.getElementById("contain").style.display = "none";
    document.getElementById("address").style.display = "none";
    document.getElementById("comment").style.display = "block";
};

navigation.appendChild(content_button);
navigation.appendChild(address_button);
navigation.appendChild(comment_button);
document.body.insertAdjacentElement("afterBegin", navigation);

//Содержимое
document.getElementById("contain").style.maxWidth = "70vw";
document.getElementById("contain").style.margin = "auto";

var content_top = document.createElement("h1");
content_top.setAttribute("id", "content_top");
content_top.append("Содержимое");
content_top.style.textAlign = "center";
document.querySelector("#contain").appendChild(content_top);

var container = document.createElement("div");
container.setAttribute("id", "container");

for (let item in basket.items) {

    //Тело продукта
    var product_body = document.createElement("div");
    product_body.setAttribute("id", basket.items[item]["article"]);

    //Создание img, имени, цены и количества
    var product_img = document.createElement("img");
    product_img.src = "img/small image/" + basket.items[item]["img"][0];

    var product_name = document.createElement("h3");
    product_name.setAttribute("id", "product_name");
    product_name.append(basket.items[item]["article"]);

    var product_price = document.createElement("h3");
    product_price.setAttribute("id", "product_price");
    product_price.append(basket.items[item]["price"]);

    var product_count = document.createElement("h3");
    var product_count_id = basket.items[item]["article"] + "_count"
    product_count.setAttribute("id", product_count_id)
    product_count.append(basket.items[item]["count"]);

    product_body.append(product_img);
    product_body.append(product_name);
    product_body.append(product_price);
    product_body.append(product_count);

    //Кнопки

    var button_block = document.createElement("div");
    button_block.setAttribute("id", "button_block");

    var button1 = document.createElement("button");
    button1.setAttribute("id", "+");
    button1.append("+");
    button1.onclick = function () {
        basket.items[item]["count"]++;
        document.getElementById((basket.items[item]["article"] + "_count")).textContent = basket.items[item]["count"];
        basket_text_maker();
        sessionStorage.setItem("basket", JSON.stringify(basket));
    };

    var button2 = document.createElement("button");
    button2.setAttribute("id", "-");
    button2.append("-");
    button2.onclick = function () {
        if (basket.items[item]["count"] == 1) {
            document.getElementById(basket.items[item]["article"]).remove();
            basket.items.splice(item, 1);
            basket_text_maker();
            sessionStorage.setItem("basket", JSON.stringify(basket));
        } else {
            basket.items[item]["count"]--;
            document.getElementById((basket.items[item]["article"] + "_count")).textContent = basket.items[item]["count"];
            basket_text_maker();
            sessionStorage.setItem("basket", JSON.stringify(basket));
        }
    }


    button_block.append(button1);
    button_block.append(button2);
    product_body.append(button_block);

    button_block.style.display = "flex";
    button_block.style.alignItems = "center";
    product_body.style.display = "flex";
    product_body.style.justifyContent = "space-around";
    product_body.style.border = "1px solid black";

    container.append(product_body);
};

container.style.border = "2px solid black";
document.querySelector("#contain").appendChild(container);

var menu = document.createElement("div");
menu.setAttribute("id", "menu");
menu.style.textAlign = "center";
menu.style.fontSize = "20px";

var basket_text = document.createElement("p");
basket_text.setAttribute("id", "basket_text");

menu.appendChild(basket_text);
document.querySelector("#contain").appendChild(menu);
basket_text_maker();

var content_next = document.createElement("button");
content_next.setAttribute("id", "content_next");
content_next.append("Дальше")
content_next.style.float = "right";
content_next.onclick = function () {
    document.getElementById("contain").style.display = "none";
    document.getElementById("address").style.display = "block";
};
document.querySelector("#contain").appendChild(content_next);


//Адрес
document.getElementById("address").style.maxWidth = "70vw";
document.getElementById("address").style.margin = "auto";

var address_top = document.createElement("h1");
address_top.setAttribute("id", "address_top");
address_top.append("Адрес доставки");
address_top.style.textAlign = "center";
document.querySelector("#address").appendChild(address_top);

var address_input = document.createElement("form");
address_input.setAttribute("id", "address_input");
address_input.style.border = "2px solid gray";

var city_street = document.createElement("fieldset");
city_street.setAttribute("id", "city_street")
city_street.style.border = "0";
city_street.style.display = "flex";
city_street.style.justifyContent = "space-around";

var city = document.createElement("p");
city.setAttribute("id", "city");

var city_text = document.createElement("label");
city_text.setAttribute("id", "city_text");
city_text.append("Город: ");
city.appendChild(city_text);

var city_input = document.createElement("input");
city_input.setAttribute("id", "city_input");
city_input.type = "text"
city.appendChild(city_input);

city_street.appendChild(city);

var street = document.createElement("p");
street.setAttribute("id", "street");

var street_text = document.createElement("label");
street_text.setAttribute("id", "street_text");
street_text.append("Улица: ");
street.appendChild(street_text);

var street_input = document.createElement("input");
street_input.setAttribute("id", "street_input");
street_input.type = "text"
street.appendChild(street_input);

city_street.appendChild(street);
address_input.appendChild(city_street);

var house_floor_flat = document.createElement("fieldset");
house_floor_flat.setAttribute("id", "house_floor_flat")
house_floor_flat.style.border = "0";
house_floor_flat.style.display = "flex";
house_floor_flat.style.justifyContent = "space-around";

var house = document.createElement("p");
house.setAttribute("id", "house");

var house_text = document.createElement("label");
house_text.setAttribute("id", "house_text");
house_text.append("Дом: ");
house.appendChild(house_text);

var house_input = document.createElement("input");
house_input.setAttribute("id", "house_input");
house_input.type = "text"
house.appendChild(house_input);

house_floor_flat.appendChild(house);

var floor = document.createElement("p");
floor.setAttribute("id", "floor");

var floor_text = document.createElement("label");
floor_text.setAttribute("id", "floor_text");
floor_text.append("Этаж: ");
floor.appendChild(floor_text);

var floor_input = document.createElement("input");
floor_input.setAttribute("id", "floor_input");
floor_input.type = "text"
floor.appendChild(floor_input);

house_floor_flat.appendChild(floor);

var flat = document.createElement("p");
flat.setAttribute("id", "flat");

var flat_text = document.createElement("label");
flat_text.setAttribute("id", "flat_text");
flat_text.append("Квартира/офис: ");
flat.appendChild(flat_text);

var flat_input = document.createElement("input");
flat_input.setAttribute("id", "flat_input");
flat_input.type = "text"
flat.appendChild(flat_input);

house_floor_flat.appendChild(flat);
address_input.appendChild(house_floor_flat);

document.querySelector("#address").appendChild(address_input);

var address_next = document.createElement("button");
address_next.setAttribute("id", "address_next");
address_next.append("Дальше")
address_next.style.marginTop = "20px";
address_next.style.float = "right";
address_next.onclick = function () {
    document.getElementById("address").style.display = "none";
    document.getElementById("comment").style.display = "block";
};
document.querySelector("#address").appendChild(address_next);

var address_back = document.createElement("button");
address_back.setAttribute("id", "address_back");
address_back.append("Назад")
address_back.style.marginTop = "20px";
address_back.style.float = "left";
address_back.onclick = function () {
    document.getElementById("address").style.display = "none";
    document.getElementById("contain").style.display = "block";
};
document.querySelector("#address").appendChild(address_back);

//Комментарий
document.getElementById("comment").style.maxWidth = "70vw";
document.getElementById("comment").style.margin = "auto";

var comment_top = document.createElement("h1");
comment_top.setAttribute("id", "comment_top");
comment_top.append("Комментарий");
comment_top.style.textAlign = "center";
document.querySelector("#comment").appendChild(comment_top);

var comment_input = document.createElement("form");
comment_input.setAttribute("id", "comment_input");
comment_input.style.display = "flex";
comment_input.style.flexDirection = "column";
comment_input.style.textAlign = "center";
comment_input.style.border = "2px solid black";

var comment_text = document.createElement("label");
comment_text.setAttribute("id", "comment_text");
comment_text.append("Оставить комментарий: ");
comment_text.style.marginTop = "15px";
comment_text.style.fontSize = "20px";
comment_input.appendChild(comment_text);

var comment_textarea = document.createElement("input");
comment_textarea.setAttribute("id", comment_textarea);
comment_textarea.type = "textarea";
comment_textarea.style.height = "15vh";
comment_textarea.style.margin = "30px 10px 15px";
comment_input.appendChild(comment_textarea);

document.querySelector("#comment").appendChild(comment_input);

var comment_back = document.createElement("button");
comment_back.setAttribute("id", "comment_back");
comment_back.append("Назад")
comment_back.style.marginTop = "20px";
comment_back.style.float = "left";
comment_back.onclick = function () {
    document.getElementById("address").style.display = "block";
    document.getElementById("contain").style.display = "none";
    document.getElementById("comment").style.display = "none";
};
document.querySelector("#comment").appendChild(comment_back);

var send_button = document.createElement("button");
send_button.setAttribute("id", "send_button");
send_button.append("Отправить")
send_button.style.marginTop = "20px";
send_button.style.float = "right";
send_button.onclick = function () {
    alert("Отправлено!");
};
document.querySelector("#comment").appendChild(send_button);
