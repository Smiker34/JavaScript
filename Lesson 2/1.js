var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 Префиксная инкрементирование - возврат a после увеличения на 1
d = b++; alert(d); // 1 Постфиксная инкрементирование - возврат a, затем увеличение его на 1
c = (2 + ++a); alert(c); // 5 2 + дважды инкрементированное a (второе префиксное)
d = (2 + b++); alert(d); // 4 2 + инкрементированное b (второе постфиксное, поэтому увеличение после)
alert(a); // 3 дважды инкрементированное a (в ходе предыдущих действий)
alert(b); // 3 дважды инкрементированное b (в ходе предыдущих действий)