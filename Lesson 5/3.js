//Здесь проблема, грубо говоря, что во всех кнопках сохраняется ссылка на индекс,
//который после цикла стоит на последнем значении, поэтому все кнопки добавляют в корзину
//и удаляют из неё последний товар каталога. Решение этому я так и не нашёл.

var products = [{ "article": "name_1", "price": 500 },
{ "article": "name_2", "price": 500 },
{ "article": "name_3", "price": 500 }]

function catalog() {
    //Заголовок и тело каталога
    var heading = document.createElement("h1");
    heading.append("Catalog");
    heading.style.textAlign = "center";
    document.querySelector("#catalog").append(heading);

    var catalog_body = document.createElement("div")
    catalog_body.setAttribute("id", "catalog_body");
    document.querySelector("#catalog").append(catalog_body);

    for (var product in products) {
        //Тело продукта
        var product_body = document.createElement("div");
        product_body.setAttribute("id", "product");
        //Создание имени и цены
        var product_name = document.createElement("h3");
        product_name.setAttribute("id", "product_name");
        product_name.append(products[product]["article"]);

        var product_price = document.createElement("h3");
        product_price.setAttribute("id", "product_price");
        product_price.append(products[product]["price"]);

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