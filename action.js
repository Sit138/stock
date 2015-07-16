var mas1 = ["Яблоко", "Груша", "Банан"],
    mas2 = ["груша", "вишня", "арбуз", "слива"];

printMas(mas1, mas2);
function printMas(mas1, mas2){//перерисовка данных таблицы
    var htm = '<table id="tab" border="2">',
        i,
        mas1Length = mas1.length, mas2Length = mas2.length,
        tabLength = (mas1Length > mas2Length) ? mas1Length : mas2Length,//количество строк таблицы
        tabMin = (mas1Length < mas2Length) ? mas1Length : mas2Length;//строка где массивы равны

    htm += '<tr><th colspan="2"><input type="button" id="but1" value="А-Я" class="but" onclick="sortMas(mas1)"></th>';
    htm += '<th colspan="2"><input type="button" id="but2" value="А-Я" class="but" onclick="sortMas(mas2)"></th></tr>';

    for(i = 0; i < tabMin; i++) {
        htm += '<tr><td>' + mas1[i] +'</td>';
        htm += '<td><input type="checkbox" style="display: none" id='+'"cb'+ i + '"' + '></td>'; //ID = cb + i
        htm += '<td>' + mas2[i] +'</td>';
        htm += '<td><input type="checkbox" style="display: none" id='+'"cb1'+ i + '"' + '></td></tr>';
    }
    for(i; i < tabLength; i++){
        if(mas1Length > mas2Length) {
            htm += '<tr><td>' + mas1[i] +'</td>';
            htm += '<td><input type="checkbox" style="display: none" id='+'"cb'+ i + '"' + '></td>';
            htm += '<td>' + "" +'</td>';
            htm += '<td>' + "" +'</td></tr>';
        }
        else {
            htm += '<tr><td>' + "" +'</td>';
            htm += '<td>' + "" +'</td>';
            htm += '<td>' + mas2[i] +'</td>';
            htm += '<td><input type="checkbox" style="display: none" id='+'"cb1'+ i + '"' + '></td></tr>';
        }
    }
    htm += '</table>';
    document.getElementById('tab').innerHTML = htm;
}

function hideMenu(id){//раскрытие меню
    var menu = document.getElementById(id).style.display;
    document.getElementById(id).style.display = (menu == 'none') ? 'block' : 'none';
    if(id != 'menuAdd' && document.getElementById('menuAdd').style.display == 'block') {
        document.getElementById('menuAdd').style.display = 'none';
    }

}//скрыть/раскрыть меню

function addElemInMas(mas){
    var elem = (mas == mas1) ? document.getElementById('addElem').value : document.getElementById('addElem2').value
    mas.push(elem);
    printMas(mas1, mas2);//вывод на экран
}

function clearMas(mas){//очистка массива
    mas.length = 0;
    printMas(mas1, mas2);
}
/*
var butSort1 = document.getElementById('but1'),
    butSort2 = document.getElementById('but2');
butSort1.addEventListener("click", wrapper(mas1));
butSort2.addEventListener("click", wrapper(mas2));*/

function sortMas(mas){
    var button1 = document.getElementById('but1'),
        button2 = document.getElementById('but2'),
        arr = [];
    for(var i = 0; i < mas.length; i++){
        arr[i] = mas[i];
    }
    arr = arr.sort();
    if (mas == arr.sort()) {
        mas = mas.sort();
        printMas(mas1, mas2);
        button1.value = 'А-Я';
        console.log(mas);
    }
    else {
        mas = mas.reverse();
        printMas(mas1, mas2);
        button1.value = 'Я-А';
        console.log(mas);
    }
}

function deleteElemWithArray(id){
        var count = 0, i, butDelElem;
        if(id == 1){
            for(i = 0; i < mas1.length; i++){
                document.getElementById('cb'+i).style.display = "";
            }
            document.getElementById('butDelElem1').style.display = "";
        }//второй массив не нужно рассматривать пока
        else{
            for(i = 0; i < mas2.length; i++){
                document.getElementById('cb1'+i).style.display = "";
            }
            document.getElementById('butDelElem2').style.display = "";
        }
}

function deleteElem(mas){
        var checkMas = [];
        var j = 0;
        if(mas == mas1){
            for(var i = 0; i < mas.length; i++){
                if(document.getElementById('cb'+i).checked){
                    checkMas[j] = i;
                    j++;
                }
            }
            delElement(mas, checkMas);//удаляем все элементы, у которых индексы равны checkMas[i]
            printMas(mas1, mas2);
        }
        else  { //второй массив
            for(var i = 0; i < mas.length; i++){
                if(document.getElementById('cb1'+i).checked){
                    checkMas[j] = i;
                    j++;
                }
            }
            delElement(mas, checkMas);
            printMas(mas1, mas2);
        }
}

function delElement(mas, masCheck){//принимает сходный массив + массив индексов для удаления
    var checkMas = masCheck;
    var j = 0;
    do{
        for(var i = 0; i < mas.length; i++){
            if(i == checkMas[j]){
                var k = j+1;
                for(k; k < checkMas.length; k++){
                    checkMas[k]--;
                }
                mas.splice(i, 1);
                i--;
                break;
            }
        }
        j++;
    }while(j != checkMas.length);
    console.log(mas);
}

function compareMas(mas1, mas2){
    //var htm = printMas(mas1, mas2);
    var htm = '<p>';
    var arr1 = [];
    var arr2 = [];
    for(var i = 0; i < mas1.length; i++){
        arr1[i] = mas1[i].toUpperCase();

    }
    for(var j = 0; j < mas2.length; j++)
        arr2[j] = mas2[j].toUpperCase();
    for ( i = 0; i < mas1.length; i++){
        for( j = 0; j < mas2.length; j++){
            if(arr1[i] == arr2[j])
                htm += 'Совпадение в строках ' + (i + +1) + ' и ' + (j + +1) + ' в слове ' + mas1[i] + '<br/>';
        }
    }
    htm += '</p>';
    document.getElementById('result').innerHTML = htm;
}

function findCharToMas(mas){//поиск символов в массиве
    var srt = document.getElementById('str').value,
        i = 0, j = 0, charLetter,
        htm = '<p><b>Найденные совпадения в массиве 1<b><br/>';
    for(i = 0; i < mas1.length; i++){
        for (j = 0; j < mas1[i].length; j++){
            charLetter = mas1[i].charAt(j); //беру текущий символ текущего слова
            if (srt.indexOf(charLetter.toLowerCase()) == -1) {
                htm += '' + mas1[i].charAt(j);
            }//если есть в в поисковой строке то...
            else {
                htm += '' + mas1[i].charAt(j).fontcolor('red');
            }
        }
        htm += ' ';
    }
    htm += '</p>';
    return htm;
}

function findStr(mas1, mas2){
    var htm = findCharToMas(mas1);//ищем символы в первом массиве и добавляем к htm
    htm += findCharToMas(mas2);
    document.getElementById('result3').innerHTML = htm;
}
