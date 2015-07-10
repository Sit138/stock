var mas1 = ["Яблоко", "Груша", "Банан"];
var mas2 = ["Груша", "Вишня", "Арбуз", "Слива"];
showMas(mas1, mas2);
function showMas(mas1, mas2){
    var table = document.getElementById('tab').getElementsByTagName('TBODY')[0];
    if(mas1.length > mas2.length){
        for(var i = 0; i < mas1.length; i++){
            var row = document.createElement('TR');
            var td1 = document.createElement('TD');
            td1.appendChild(document.createTextNode(mas1[i]));
            var td2 = document.createElement('td');
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("id", "name");
            check.setAttribute("value", i);
            //check.setAttribute("style", "display:none");
            td2.appendChild(check);
            var td3 = document.createElement('TD');
            var td4 = document.createElement('TD');
            var check2 = document.createElement("INPUT");
            check2.setAttribute("type", "checkbox");
            check2.setAttribute("id", "name");
            check2.setAttribute("value", i);
            //check2.setAttribute("style", "display:none");
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
    else{
        for(var i = 0; i < mas2.length; i++){
            var row = document.createElement('TR');
            var td1 = document.createElement('TD');
            var td2 = document.createElement('TD');
            var check = document.createElement("INPUT");
            check.setAttribute("type", "checkbox");
            check.setAttribute("id", "name");
            check.setAttribute("value", i);
            //check.setAttribute("style", "display:none");
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
            check2.setAttribute("id", "name");
            check2.setAttribute("value", i);
            //check2.setAttribute("style", "display:none");
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
function addElemOnMas(id, mas){
    if(id == "butAdd1"){
        var elem = document.getElementById('addElem').value;
        if(mas.length < document.getElementById('tab').rows.length - 1){
            var table = document.getElementById('tab');
            var row = table.getElementsByTagName('tr');
            var td = row[mas.length + 1].getElementsByTagName('td');
            td[0].innerHTML = elem;
            td[1].innerHTML = '<input type="checkbox" id="name" value="mas.length + 1">';
        }
        else{
            var table = document.getElementById('tab').getElementsByTagName('TBODY')[0];
            var row = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.appendChild(document.createTextNode(elem));
            var td2 = document.createElement('td');
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("id", "name");
            check.setAttribute("value", mas.length + 1);
            td2.appendChild(check);
            row.appendChild(td1);
            row.appendChild(td2);
            table.appendChild(row);
        }

    }
    else{
        var elem = document.getElementById('addElem2').value;
        if(mas.length < document.getElementById('tab').rows.length-1){
            var table = document.getElementById('tab');
            var row = table.getElementsByTagName('tr');
            var td = row[mas.length + 1].getElementsByTagName('td');
            td[2].innerHTML = elem;
            td[3].innerHTML = '<input type="checkbox" id="name" value="mas.length + 1">';

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
            check.setAttribute("id", "name");
            check.setAttribute("value", mas.length + 1);
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
}//добавление элемента с выводом на экран

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

function f() {
    
}

