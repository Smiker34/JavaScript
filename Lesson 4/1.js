function Num_to_obj(num) {
    var Num_obj = {}, oper_num = num;

    if (num < 0) {
        console.log("Число меньше 0");
        return;
    }


    switch (String(num).length) {
        case 1:
            Num_obj["Единицы"] = num;
            return Num_obj;
        case 2:
            var input_num = oper_num % 10;
            Num_obj["Единицы"] = input_num;
            oper_num = ~~(oper_num /= 10);
            input_num = oper_num % 10;
            Num_obj["Дестки"] = input_num;
            return Num_obj;
        case 3:
            var input_num = oper_num % 10;
            Num_obj["Единицы"] = input_num;
            oper_num = ~~(oper_num /= 10);
            input_num = oper_num % 10;
            Num_obj["Дестки"] = input_num;
            oper_num = ~~(oper_num /= 10);
            Num_obj["Сотни"] = oper_num;
            return Num_obj;
        default:
            console.log("Числа больше 999-и.");
            return;
    }
}

console.log(Num_to_obj(354));