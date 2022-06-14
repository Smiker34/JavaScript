var table = document.createElement('table');
var letters = [" ", "A", "B", "C", "D", "E", "F", "G", "H", " "];
var number = [" ", "1", "2", "3", "4", "5", "6", "7", "8", " "];
var reverseNumber = number.reverse();

function chessDesk() {
    table.style.border = "5px solid black";
    for (var i = 0; i < 10; ++i) {
        var tr = document.createElement('tr');
        table.append(tr);
        for (var j = 0; j < 10; ++j) {
            var td = document.createElement('td');
            tr.append(td);
            td.innerHTML = (i + 1) + j;

            if (td.innerHTML % 2 == 0) {
                td.style.backgroundColor = "black";
            }

            if (i == 0 && 0 <= j <= 9) {
                td.style.transform = "rotate3d(0, 0, 1, 180deg)";
                td.innerHTML = letters[j];
                tr.style.height = "30px";
            } else if (i == 9 && 0 <= j <= 9) {
                td.innerHTML = letters[j];
                tr.style.height = "30px";
            } else if (i <= 8 && j == 0) {
                td.style.width = "30px";
                td.innerHTML = reverseNumber[i];
            } else if (i <= 8 && j == 9) {
                td.style.width = "30px";
                td.style.transform = "rotate3d(0, 0, 1, 180deg)";
                td.innerHTML = reverseNumber[i];
            } else {
                td.innerHTML = '';
                tr.style.height = "50px";
                td.style.width = "50px";
            }

            td.style.color = "red";
            td.style.textAlign = "center";
            td.style.fontSize = "25px";
            td.style.textShadow = "1px 1px 0px black";
            td.style.border = "1px solid black";

        }
    }
    document.querySelector('#chess').append(table);
}
chessDesk();