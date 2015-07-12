var mas1 = ["Яблоко", "Груша", "Банан"];
var mas2 = ["груша", "вишня", "арбуз", "слива"];
showMas(mas1, mas2);
function showMas(mas1, mas2){
    var table = document.getElementById('tab').getElementsByTagName('TBODY')[0];
    //First array
    if(mas1.length > mas2.length){
        for(var i = 0; i < mas1.length; i++){
            var row = document.createElement('TR');
            var td1 = document.createElement('TD');
            td1.appendChild(document.createTextNode(mas1[i]));
            var td2 = document.createElement('td');
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("id", "cb"+i);
            check.setAttribute("value", i);
            check.setAttribute("style", "display:none");
            td2.appendChild(check);
            var td3 = document.createElement('TD');
            var td4 = document.createElement('TD');
            var check2 = document.createElement("INPUT");
            check2.setAttribute("type", "checkbox");
            check2.setAttribute("id", "cb1"+i);
            check2.setAttribute("value", i);
            check2.setAttribute("style", "display:none");
            if(i == mas2.length){
                td3.appendChild(document.createTextNode(''));
                td4.appendChild(document.createTextNode(''));
            }
                else{
                    td3.appendChild(document.createTextNode(mas2[i]));
                    td4.appendChild(check2);
            }
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            table.appendChild(row);
        }
    }
    //Second array
    else{
        for(var i = 0; i < mas2.length; i++){
            var row = document.createElement('TR');
            var td1 = document.createElement('TD');
            var td2 = document.createElement('TD');
            var check = document.createElement("INPUT");
            check.setAttribute("type", "checkbox");
            check.setAttribute("id", "cb"+i);
            check.setAttribute("value", i);
            check.setAttribute("style", "display:none");
            if(i == mas1.length){
                td1.appendChild(document.createTextNode(''));
                td2.appendChild(document.createTextNode(''));
            }
            else {
                td1.appendChild(document.createTextNode(mas1[i]));
                td2.appendChild(check);
            }
            var td3 = document.createElement('TD');
            td3.appendChild(document.createTextNode(mas2[i]));
            var td4 = document.createElement('TD');
            var check2 = document.createElement("INPUT");
            check2.setAttribute("type", "checkbox");
            check2.setAttribute("id", "cb1"+i);
            check2.setAttribute("value", i);
            check2.setAttribute("style", "display:none");
            td4.appendChild(check2);
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            table.appendChild(row);
        }
    }
}//отображение массива на экране
function hideMenu(id){
    var menu = document.getElementById(id).style.display;
    document.getElementById(id).style.display = (menu == 'none') ? 'block' : 'none';

}//скрыть/раскрыть меню
function addElemOnMas(id, mas){//добавление элемента с выводом на экран
    if(id == "butAdd1"){
        //First array
        var elem = document.getElementById('addElem').value;
        if(mas.length < document.getElementById('tab').rows.length - 1){
            var table = document.getElementById('tab');
            var row = table.getElementsByTagName('tr');
            var td = row[mas.length + 1].getElementsByTagName('td');
            td[0].innerHTML = elem;
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("id", "cb" + (mas.length));
            check.setAttribute("value", mas.length + 1);
            check.setAttribute("style", "display:none");
            td[1].appendChild(check);
        }
        else{
            var table = document.getElementById('tab').getElementsByTagName('TBODY')[0];
            var row = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(elem));
            var td2 = document.createElement('td');
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("id", "cb1" + (mas.length));
            check.setAttribute("value", mas.length + 1);
            check.setAttribute("style", "display:none");
            td2.appendChild(check);
            var td3 = document.createElement('td');
            td3.appendChild(document.createTextNode(""));
            var td4 = document.createElement('td');
            td4.appendChild(document.createTextNode(""));
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            table.appendChild(row);
        }

    }
    //Second array
    else{
        var elem = document.getElementById('addElem2').value;
        if(mas.length < document.getElementById('tab').rows.length-1){
            var table = document.getElementById('tab');
            var row = table.getElementsByTagName('tr');
            var td = row[mas.length + 1].getElementsByTagName('td');
            td[2].innerHTML = elem;
            //td[3].innerHTML = '<input type="checkbox" id="name" value="mas.length + 1">';
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("id", "cb1" + (mas.length));
            check.setAttribute("value", mas.length + 1);
            check.setAttribute("style", "display:none");
            td[3].appendChild(check);
        }
        else{
            var table = document.getElementById('tab').getElementsByTagName('TBODY')[0];
            var row = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(""));
            var td2 = document.createElement('td');
            td2.appendChild(document.createTextNode(""));
            var td3 = document.createElement('td');
            td3.appendChild(document.createTextNode(elem));
            var td4 = document.createElement('td');
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("id", "cb1" + (mas.length));
            check.setAttribute("value", mas.length + 1);
            check.setAttribute("style", "display:none");
            td4.appendChild(check);
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            table.appendChild(row);
        }
    }
    mas = mas.push(elem);
    console.log(mas1);
    console.log(mas2);
}

var butSort1 = document.getElementById('but1');
butSort1.addEventListener("click", wrapper(mas1));
var butSort2 = document.getElementById('but2');
butSort2.addEventListener("click", wrapper3(mas2));


function wrapper(mas){
    return function sortMas(){
        mas = mas.sort();
        var myTable = document.getElementById('tab');
        var trList = myTable.getElementsByTagName('tr');
        for (i = 1; i <= trList.length - 1; i++){
            var tdList = trList[i].getElementsByTagName('td');
            for (var j = 0; j < tdList.length; j++){
                if(j == 0){
                    if(i > mas.length){
                        tdList[j].innerHTML = '';
                    }
                    else tdList[j].innerHTML = mas[i - 1];
                }
            }
        }
        butSort1.value = 'Я-А';
        butSort1.removeEventListener("click", wrapper(mas1));
        butSort1.addEventListener("click", wrapper2(mas1));
    }
}//сортировка первого а-я
function wrapper2(mas){
    return function sortMasRev(){
        mas = mas.sort().reverse();
        var myTable = document.getElementById('tab');
        var trList = myTable.getElementsByTagName('tr');
        for (i = 1; i <= trList.length - 1; i++){
            var tdList = trList[i].getElementsByTagName('td');
            for (var j = 0; j < tdList.length; j++){
                if(j == 0){
                    if(i > mas.length){
                        tdList[j].innerHTML = '';
                    }
                    else tdList[j].innerHTML = mas[i - 1];
                }
            }
        }
        butSort1.value = 'А-Я';
        butSort1.removeEventListener("click", wrapper2(mas));
        butSort1.addEventListener("click", wrapper(mas));
    }
}//сортировка первого я-а
function wrapper3(mas){
    return function sortMas(){
        mas = mas.sort();
        var myTable = document.getElementById('tab');
        var trList = myTable.getElementsByTagName('tr');
        for (i = 1; i <= trList.length - 1; i++){
            var tdList = trList[i].getElementsByTagName('td');
            for (var j = 0; j < tdList.length; j++){
                if(j == 2)
                    if(i > mas.length)tdList[j].innerHTML = '';
                else tdList[j].innerHTML = mas[i - 1];
            }

        }
        butSort2.value = 'Я-А';
        butSort2.removeEventListener("click", wrapper3(mas));
        butSort2.addEventListener("click", wrapper4(mas));
    }
}//сортировка второго а-я
function wrapper4(mas){
    return function sortMasRev(){
        mas = mas.sort().reverse();
        var myTable = document.getElementById('tab');
        var trList = myTable.getElementsByTagName('tr');
        for (i = 1; i <= trList.length - 1; i++){
            var tdList = trList[i].getElementsByTagName('td');
            for (var j = 0; j < tdList.length; j++){
                if(j == 2)
                    if(i > mas.length)tdList[j].innerHTML = '';
                    else tdList[j].innerHTML = mas[i - 1];
            }
        }
        butSort2.value = 'А-Я';
        butSort2.removeEventListener("click", wrapper4(mas));
        butSort2.addEventListener("click", wrapper3(mas));
    }
}//сортировка второго я-а
function clearMas(id, mas){//очистка массива
    if(id == "butClear1"){
        mas.length = 0;//очистил массив
        //теперь выводим его(очищаем столбец)
        var table = document.getElementById('tab');
        var rowList = table.getElementsByTagName('tr');
        for(var i = 1; i < rowList.length; i++){
            var colList = rowList[i].getElementsByTagName('td');
            for(var j = 0; j <= 1; j++){
                colList[j].innerHTML = '';
            }
        }
        document.getElementById('checkClear').checked = '';
        hideMenu('menuClear');
    }
    else{
        if(id == "butClear2"){
            mas.length = 0;//очистил массив
            //теперь выводим его(очищаем столбец)
            var table = document.getElementById('tab');
            var rowList = table.getElementsByTagName('tr');
            for(var i = 1; i < rowList.length; i++){
                var colList = rowList[i].getElementsByTagName('td');
                for(var j = 2; j <= 3; j++){
                    colList[j].innerHTML = '';
                }
            }
        }
        document.getElementById('check2Clear').checked = '';
        hideMenu('menu2Clear');
    }
}
function deleteElemWithArray(id){
        var count = 0;
        if(id == 1){
            for(var i = 0; i < mas1.length; i++){
                document.getElementById('cb'+i).style.display = "";
            }
            var butDelElem = document.getElementById('butDelElem1');
            butDelElem.style.display = "";
            butDelElem.addEventListener("click", deleteElem(mas1));
        }
        else{
            for(var i = 0; i < mas2.length; i++){
                document.getElementById('cb1'+i).style.display = "";
            }
            var butDelElem = document.getElementById('butDelElem2');
            butDelElem.style.display = "";
            butDelElem.addEventListener("click", deleteElem(mas2));
        }
}
function deleteElem(mas){
    return function fun(){
        var checkMas = [];
        var j = 0;
        if(mas == mas1){
            /*Получаем массив индексов, где checked == true*/
            for(var i = 0; i < mas.length; i++){
                if(document.getElementById('cb'+i).checked){
                    checkMas[j] = i;
                    j++;
                }
            }
            delEl(mas, checkMas);//удаляем все элементы, у которых индексы равны checkMas[i]
            //сразу выводим на экран
            var table = document.getElementById('tab');
            var rowList = table.getElementsByTagName('tr');
            for(var i = 1; i < rowList.length; i++){
                var colList = rowList[i].getElementsByTagName('td');
                for(var j = 0; j <= 1; j++){
                    colList[j].innerHTML = '';
                }
            }
            var trList = table.getElementsByTagName('tr');
            for (i = 1; i <= trList.length - 1; i++){
                var tdList = trList[i].getElementsByTagName('td');
                for (var j = 0; j < 1; j++){
                        if(i > mas.length){
                            tdList[0].innerHTML = '';
                        }
                        else {
                            tdList[0].innerHTML = mas[i - 1];
                            var check = document.createElement("input");
                            check.setAttribute("type", "checkbox");
                            check.setAttribute("id", "cb"+i);
                            check.setAttribute("value", mas.length + 1);
                            check.setAttribute("style", "display:none");
                            tdList[1].appendChild(check);
                        }
                }
            }
            var check = document.getElementById('checkDelEl');
            check.checked = false;
            check.removeEventListener("click", deleteElemWithArray(1));
        }
        else{
            for(var i = 0; i < mas.length; i++){
                if(document.getElementById('cb1'+i).checked){
                    checkMas[j] = i;
                    j++;
                }
            }
            delEl(mas, checkMas);
            var table = document.getElementById('tab');
            var rowList = table.getElementsByTagName('tr');
            for(var i = 1; i < rowList.length; i++){
                var colList = rowList[i].getElementsByTagName('td');
                for(var j = 2; j <= 3; j++){
                    colList[j].innerHTML = '';
                }
            }
            var trList = table.getElementsByTagName('tr');
            for (i = 1; i <= trList.length - 1; i++){
                var tdList = trList[i].getElementsByTagName('td');
                for (var j = 0; j < 1; j++){
                    if(i > mas.length){
                        tdList[2].innerHTML = '';
                    }
                    else {
                        tdList[2].innerHTML = mas[i - 1];
                        var check = document.createElement("input");
                        check.setAttribute("type", "checkbox");
                        check.setAttribute("id", "cb"+i);
                        check.setAttribute("value", mas.length + 1);
                        check.setAttribute("style", "display:none");
                        tdList[3].appendChild(check);
                    }

                }
            }
        }
    }
}
function delEl(mas, masCheck){
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
function findStr(mas1, mas2){
    var srt = document.getElementById('str').value;
    var i = 0, j = 0, htm = '<p><b>Найденные совпадения в массиве 1<b><br/>';
    for(i = 0; i < mas1.length; i++){
        for(j = 0; j < mas1[i].length; j++){
            var charLetter = mas1[i].charAt(j); //беру текущий символ текущего слова
            if(srt.indexOf(charLetter.toLowerCase()) == -1) htm += '' + mas1[i].charAt(j);//если есть в в поисковой строке то...
            else htm += '' + mas1[i].charAt(j).fontcolor('red');
        }
        htm += ' ';
    }
    htm += '</p><p><b>Найденные совпадения в массиве 2<b><br/>';
    for(i = 0; i < mas2.length; i++){
        for(j = 0; j < mas2[i].length; j++){
            var charLetter = mas2[i].charAt(j); //беру текущий символ текущего слова
            if(srt.indexOf(charLetter.toLowerCase()) == -1) htm += '' + mas2[i].charAt(j);//если есть в в поисковой строке то...
            else htm += '' + mas2[i].charAt(j).fontcolor('red');
        }
        htm += ' ';
    }
    htm += '</p>';
    document.getElementById('result3').innerHTML = htm;
}