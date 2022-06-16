//Исправил ошибку с привязкой товаров к кнопкам (достаточно глупо, что я просто забыл про let).
//Добавил функцию подсчёта корзины для каждой кнопки.

//Изображение с увеличенной версией и переключением при нажатии (пока не сделал отображение, что больше одного изображения).
//Кнопки переключений изображений отображаются в независимости то количества (возможно потом до сделаю)

var products = [{ "img": ["img.jpg", "img2.jpg"], "article": "name_1", "price": 500 },
{ "img": ["img.jpg"], "article": "name_2", "price": 1500 },
{ "img": ["img.jpg"], "article": "name_3", "price": 1000 }]


function catalog() {
    //Заголовок и тело каталога
    var heading = document.createElement("h1");
    heading.append("Catalog");
    heading.style.textAlign = "center";
    document.querySelector("#catalog").append(heading);

    var catalog_body = document.createElement("div")
    catalog_body.setAttribute("id", "catalog_body");
    document.querySelector("#catalog").append(catalog_body);

    for (let product in products) {

        //Тело продукта
        var product_body = document.createElement("div");
        product_body.setAttribute("id", "product");
        //Создание img, имени и цены

        var product_img = document.createElement("img");
        product_img.src = "img/small image/" + products[product]["img"][0];
        product_img.onclick = function () {
            //Создания большого изображения
            var idx = 0;

            var big_img = document.createElement("div");
            big_img.setAttribute("id", "big_img");
            document.body.append(big_img);
            big_img.style.position = "fixed";
            big_img.style.top = "0";
            big_img.style.left = "0";
            big_img.style.bottom = "0";
            big_img.style.right = "0";
            big_img.style.textAlign = "center";
            big_img.style.minHeight = "100vh";
            big_img.style.minWidth = "100%";
            big_img.style.background = "rgba(0,0,0,0.5)";

            var picture = document.createElement("img");
            picture.src = "img/big image/" + products[product]["img"][idx];
            picture.style.width = "100%";
            picture.style.maxWidth = "500px";
            picture.style.position = "revative";
            picture.style.transform = "translateY(+50%)";


            var button_close = document.createElement("button");
            button_close.setAttribute("id", "button_close");
            button_close.append("X");
            button_close.style.fontSize = "25px";
            button_close.style.position = "absolute";
            button_close.style.top = "13%";
            button_close.style.right = "17%";
            button_close.onclick = function () {
                document.getElementById("big_img").remove();
            };

            var button_back = document.createElement("button");
            button_back.setAttribute("id", "button_back");
            button_back.style.height = "350px";
            button_back.append("back");
            button_back.onclick = function () {
                if (idx != 0) {
                    idx--
                    picture.src = "img/big image/" + products[product]["img"][idx];
                }
            };

            var button_next = document.createElement("button");
            button_next.setAttribute("id", "button_next");
            button_next.style.height = "350px";
            button_next.append("next");
            button_next.onclick = function () {
                if (idx != (products[product]["img"].length - 1)) {
                    idx++
                    picture.src = "img/big image/" + products[product]["img"][idx];
                }
            };

            big_img.appendChild(button_close);
            big_img.appendChild(button_back);
            big_img.appendChild(picture);
            big_img.appendChild(button_next);
        };

        var product_name = document.createElement("h3");
        product_name.setAttribute("id", "product_name");
        product_name.append(products[product]["article"]);

        var product_price = document.createElement("h3");
        product_price.setAttribute("id", "product_price");
        product_price.append(products[product]["price"]);

        product_body.append(product_img);
        product_body.append(product_name);
        product_body.append(product_price);

        //Создание кнопок

        var button_block = document.createElement("div");
        button_block.setAttribute("id", "button_block");

        var button1 = document.createElement("button");
        button1.setAttribute("id", "+");
        button1.append("+");
        button1.onclick = function () {
            if (basket.items.length == 0) {
                basket.items.push(products[product]);
                basket.items[basket.items.indexOf(products[product])]["count"] = 1;
            } else {
                for (var item in basket.items) {
                    if (products[product]["article"] == basket.items[item]["article"]) {
                        basket.items[item]["count"]++;
                        break
                    } else if (item == basket.items.length - 1) {
                        basket.items.push(products[product]);
                        basket.items[basket.items.indexOf(products[product])]["count"] = 1;
                    }
                }
            }

            basket_text_maker();

        };

        var button2 = document.createElement("button");
        button2.setAttribute("id", "-");
        button2.append("-");
        button2.onclick = function () {
            if (basket.items.indexOf(products[product]) == -1) {
                alert("В корзине нет этого товара");
            } else {
                if (basket.items[basket.items.indexOf(products[product])]["count"] == 1) {
                    basket.items.splice(basket.items.indexOf(products[product]), 1);
                } else {
                    basket.items[basket.items.indexOf(products[product])]["count"]--
                }
            }

            basket_text_maker();

        };

        button_block.append(button1);
        button_block.append(button2);
        product_body.append(button_block);

        //Стили

        button_block.style.display = "flex";
        button_block.style.alignItems = "center";
        product_body.style.display = "flex";
        product_body.style.justifyContent = "space-around";
        product_body.style.border = "1px solid black";

        catalog_body.append(product_body);
    }

    catalog_body.style.border = "2px solid black";

}
catalog();
