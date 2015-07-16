var mas1 = ["Яблоко", "Груша", "Апельсин","Банан"],
    mas2 = ["груша", "вишня", "арбуз", "слива", "маракуйя"];

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

function hideMenu(id){//скрыть/раскрыть меню
    var menu = document.getElementById(id).style.display;
    document.getElementById(id).style.display = (menu == 'none') ? 'block' : 'none';
    if(document.getElementById('checkDelEl1').checked){
        document.getElementById('checkDelEl1').checked = false;
    }
    if(document.getElementById('checkDelEl2').checked){
        document.getElementById('checkDelEl2').checked = false;
    }
}

function checkElementInArray(elem, mas){//наличие элемента elem в массиве
    var i,                              //если есть - true, иначе false
        arr = [],
        result;
    for(i = 0; i < mas.length; i++){
        arr[i] = mas[i];
        arr[i] = arr[i].toUpperCase();
    }
    elem = elem.toUpperCase();
    for(i = 0; i < arr.length; i++){
        if(arr[i] === elem) {
            result = true;
            break;
        }
        else {
            result = false;
        }
    }
    return result;
}

function addElemInMas(mas){
    var elem = (mas == mas1) ? document.getElementById('addElem').value : document.getElementById('addElem2').value;
    if(checkElementInArray(elem, mas) || elem == "") {
        alert('Добавление невозможно!');
    }
    else {
        mas.push(elem);
        printMas(mas1, mas2);//вывод на экран
    }
    mas == mas1 ? document.getElementById('addElem').value = '' : document.getElementById('addElem2').value = '';
}

function clearMas(mas){//очистка массива
    var id = (mas == mas1) ? 'menuClear' : 'menu2Clear';
    mas.length = 0;
    printMas(mas1, mas2);
    hideMenu(id);
    mas == mas1 ? document.getElementById('checkClear').checked = false : document.getElementById('check2Clear').checked = false;
}

function compare(mas1, mas2) {//сравнение двух массивов
    if (mas1.length !== mas2.length) {
        return false;
    }
    return mas2.join(',') === mas1.join(',');
}

function sortMas(mas){
    var arr = [],
        value;
    for(var i = 0; i < mas.length; i++){
        arr[i] = mas[i];
    }
    arr = arr.sort();
    if(mas == mas1) {
        if (compare(mas, arr)) {
            value = document.getElementById('but2').value;
            mas = mas.sort().reverse();
            printMas(mas1, mas2);
            document.getElementById('but1').value = "А-Я";
            document.getElementById('but2').value = value;
        }
        else {
            value = document.getElementById('but2').value;
            mas = mas.sort();
            printMas(mas1, mas2);
            document.getElementById('but1').value = "Я-А";
            document.getElementById('but2').value = value;
        }
    }
    else {
        if (compare(mas, arr)) {
            value = document.getElementById('but1').value;
            mas = mas.sort().reverse();
            printMas(mas1, mas2);
            document.getElementById('but2').value = "А-Я";
            document.getElementById('but1').value = value;
        }
        else {
            value = document.getElementById('but1').value;
            mas = mas.sort();
            printMas(mas1, mas2);
            document.getElementById('but2').value = "Я-А";
            document.getElementById('but1').value = value;
        }
    }

}

function deleteElemWithArray(id){
        var count = 0, i, butDelElem;
        if(id == 1) {
            for(i = 0; i < mas1.length; i++){
                document.getElementById('cb'+i).style.display = "";
            }
            document.getElementById('butDelElem1').style.display = "";
            document.getElementById('checkAdd').checked = false;
            document.getElementById('checkClear').checked = false;
            if(document.getElementById('menuAdd').style.display == 'block') {
                document.getElementById('menuAdd').style.display = 'none';
            }
        }
        else {
            for(i = 0; i < mas2.length; i++){
                document.getElementById('cb1'+i).style.display = "";
            }
            document.getElementById('butDelElem2').style.display = "";
            document.getElementById('checkAdd2').checked = false;
            document.getElementById('check2Clear').checked = false;
        }
}

function deleteElem(mas){
        var checkMas = [];
        var j = 0;
        if(mas == mas1) {
            for(var i = 0; i < mas.length; i++){
                if(document.getElementById('cb'+i).checked){
                    checkMas[j] = i;
                    j++;
                }
            }
            delElement(mas, checkMas);//удаляем все элементы, у которых индексы равны checkMas[i]
            printMas(mas1, mas2);
            document.getElementById('checkDelEl1').checked = false;
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
            document.getElementById('checkDelEl2').checked = false;
        }
}

function delElement(mas, masCheck){//принимает сходный массив + массив индексов для удаления
    var checkMas = masCheck;
    var j = 0;
    do{
        for(var i = 0; i < mas.length; i++) {
            if(i == checkMas[j]) {
                var k = j+1;
                for(k; k < checkMas.length; k++) {
                    checkMas[k]--;
                }
                mas.splice(i, 1);
                i--;
                break;
            }
        }
        j++;
    } while(j != checkMas.length);
    console.log(mas);
}

function compareMas(mas1, mas2){
    var htm = '<p>',
        arr1 = [],
        arr2 = [],
        i, j;
    for(i = 0; i < mas1.length; i++){
        arr1[i] = mas1[i].toUpperCase();

    }
    for(j = 0; j < mas2.length; j++)
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