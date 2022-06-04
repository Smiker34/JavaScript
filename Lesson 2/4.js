// По-моему странное решение, кажется switch-case всё-таки для более конкретных значений
var a = 13;

switch (true) {
    case (a <= 15):
        for (a; a <= 15; a++) {
            console.log(a);
        }
        break;
    case (a > 15):
        console.log("Значение больше 15-и");
        break;
}