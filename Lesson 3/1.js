var simple_nums = [], last_num = 100;

next_num:
for (let num = 2; num <= last_num; num++) {
    for (let previous_num = 2; previous_num < num; previous_num++) {
        if (num % previous_num == 0) {
            continue next_num;
        }
    }

    simple_nums.push(num)
}
//Вывод через while просто чтобы соответсвовать заданию, я бы просто в for выводил вместо push.
var idx = 0;
while (idx < simple_nums.length) {
    console.log(simple_nums[idx++]);
}