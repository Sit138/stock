/* 
	Написать функцию, для работы с двумя массивами данных. 
	Массивы могут содержать, например, списки имен или названий фруктов. 
	Изначально данные в массивах не должны быть отсортированы по алфавиту. 
	Эти массивы должны выводиться на html страничку в виде таблицы с двумя столбцами. 
*/

function printMas(mas1, mas2){
    var table = '<table border = 2 id="tab">';
	table += '<tr><th><button id="but1"">А-Я</button></th>';
	table += '<th><button id="but2" ">А-Я</button></th></tr>';
    for (var i = 0, j = 0; i < mas1.length,j < mas2.length; i++, j++){
        if(i >= mas1.length) table += '<tr><td>' + '' + '</td>';
		 else table += '<tr><td>' + mas1[i] + '</td>';
		if(j >= mas2.length) table += '<td>' + '' + '</td>';
			else table += '<td>' + mas2[j] + '</td>';
		table += '</tr>';
    }
	table += '</table>';
	document.getElementById('result').innerHTML = table;
}

/*
1.1 Сравнение двух массивов, вывод соответствующих строк
 */
function compareMas(mas1, mas2){
	//var htm = printMas(mas1, mas2);
	var htm = '<p>';
	for (var i = 0; i < mas1.length; i++){
		for(var j = 0; j < mas2.length; j++){
			if(mas1[i] == mas2[j])
				htm += 'Совпадение в строках ' + (i + +1) + ' и ' + (j + +1) + ' в слове ' + mas1[i] + '<br/>';
		}
	}
	htm += '</p>';
	document.getElementById('result2').innerHTML = htm;
}

/*
 1.2 - Сравнение строк в массиве
 Выделение цветов совпадающих строк
 */
function compareMasColor(mas1, mas2){

	var htm = '<table border = 2><tr>';
	for (var i = 0, j = 0; i < mas1.length,j < mas2.length; i++, j++){
		if(mas1[i] == mas2[j]){
			htm += '<td bgcolor="#EE2C2C">' + mas1[i] + '</td>';
			htm += '<td bgcolor="#EE2C2C">' + mas2[j] + '</td>';
		} else{
			htm += '<td>' + mas1[i] + '</td>';
			htm += '<td>' + mas2[j] + '</td>';
		}
		htm += '</tr>';
	}
	htm += '</table>';
	document.getElementById('result').innerHTML = htm;
}

/*
Подготовка страницы к 1.4
вывод таблицы и под таблицей поле ввода с кнопкой
*/
function prevFour(mas1, mas2){
	var htm = printMas(mas1, mas2);
	htm += '<p>Ввести символы для поиска в нижнем регистре<br/><input type="text" value="" id="str"><button onclick="findStr(mas1)">ОК</button></p>';
	document.getElementById('result2').innerHTML = htm;
}

/*
1.4 - вывод красным найденных в массиве элементов
 */

function findStr(mas){
	var srt = document.getElementById('str').value;
	var i = 0, j = 0, htm = '<p><b>Найденные совпадения<b><br/>';
	for(i = 0; i < mas.length; i++){
		for(j = 0; j < mas[i].length; j++){
			var charLetter = mas[i].charAt(j); //беру текущий символ текущего слова
			if(srt.indexOf(charLetter.toLowerCase()) == -1) htm += '' + mas[i].charAt(j);//если есть в в поисковой строке то...
				else htm += '' + mas[i].charAt(j).fontcolor('red');
		}
		htm += ' ';
	}
	htm += '</p>';
	document.getElementById('result2').innerHTML = htm;
}

var mas1 = ['Банан', 'Яблоко', 'Клубника', 'Мандарин', 'Груша', 'Лимон'];
var mas2 = ['арбуз', 'маракуйя','смородина' , 'клубника', 'земляника', 'груша', 'апельсин', 'слива'];
printMas(mas1, mas2);


var but1 = document.getElementById('but1');
but1.addEventListener("click", wrapper(mas1));
var but2 = document.getElementById('but2');
but2.addEventListener("click", wrapper3(mas2));

//замыкания.
function wrapper(mas){
	return function sortMas(){
		var newMas = [];
		for (var i = 0; i < mas.length; i++)//копирую массив, дабы его не менять
			newMas[i] = mas[i];
		newMas = mas.sort();
		var myTable = document.getElementById('tab');
		var trList = myTable.getElementsByTagName('tr');
		for (i = 1; i <= trList.length - 1; i++){
			var tdList = trList[i].getElementsByTagName('td');
			for (var j = 0; j < tdList.length; j++){
				if(j == 0){
					if(i > newMas.length){
						tdList[j].innerHTML = '';
					}
						else tdList[j].innerHTML = newMas[i - 1];
				}
			}
		}
		but1.textContent = 'Я-А';
		but1.removeEventListener("click", wrapper(mas1));
		but1.addEventListener("click", wrapper2(mas1));
	}
}

function wrapper2(mas){
	return function sortMasRev(){
		var newMas = [];
		for (var i = 0; i < mas.length; i++)//копирую массив, дабы его не менять
			newMas[i] = mas[i];
		newMas = mas.sort().reverse();
		var myTable = document.getElementById('tab');
		var trList = myTable.getElementsByTagName('tr');
		for (i = 1; i <= trList.length - 1; i++){
			var tdList = trList[i].getElementsByTagName('td');
			for (var j = 0; j < tdList.length; j++){
				if(j == 0){
					if(i > newMas.length){
						tdList[j].innerHTML = '';
					}
						else tdList[j].innerHTML = newMas[i - 1];
				}
			}
		}
		but1.textContent = 'А-Я';
		but1.removeEventListener("click", wrapper2(mas));
		but1.addEventListener("click", wrapper(mas));
	}
}

function wrapper3(mas){
	return function sortMas(){
		var newMas = [];
		for (var i = 0; i < mas.length; i++)//копирую массив, дабы его не менять
			newMas[i] = mas[i];
		newMas = mas.sort();
		var myTable = document.getElementById('tab');
		var trList = myTable.getElementsByTagName('tr');
		for (i = 1; i <= trList.length - 1; i++){
			var tdList = trList[i].getElementsByTagName('td');
			for (var j = 0; j < tdList.length; j++){
				if(j == 1) tdList[j].innerHTML = newMas[i - 1];
			}
		}
		but2.textContent = 'Я-А';
		but2.removeEventListener("click", wrapper3(mas));
		but2.addEventListener("click", wrapper4(mas));
	}
}

function wrapper4(mas){
	return function sortMasRev(){
		var newMas = [];
		for (var i = 0; i < mas.length; i++)//копирую массив, дабы его не менять
			newMas[i] = mas[i];
		newMas = mas.sort().reverse();
		var myTable = document.getElementById('tab');
		var trList = myTable.getElementsByTagName('tr');
		for (i = 1; i <= trList.length - 1; i++){
			var tdList = trList[i].getElementsByTagName('td');
			for (var j = 0; j < tdList.length; j++){
				if(j == 1) tdList[j].innerHTML = newMas[i - 1];
			}
		}
		but2.textContent = 'А-Я';
		but2.removeEventListener("click", wrapper4(mas));
		but2.addEventListener("click", wrapper3(mas));
	}
}
