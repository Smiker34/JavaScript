//Требуемая половина пирамиды
var levels = 20;
for (var level = 1; level <= levels; console.log("x".repeat(level)), level++);
//Цельная пирамида мне нравится больше
var levels = 20;
for (var level = 1; level <= levels;
    console.log(" ".repeat(levels - level), "x".repeat(level * 2)), level++);