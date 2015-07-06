/* 
	Написать функцию, для работы с двумя массивами данных. 
	Массивы могут содержать, например, списки имен или названий фруктов. 
	Изначально данные в массивах не должны быть отсортированы по алфавиту. 
	Эти массивы должны выводиться на html страничку в виде таблицы с двумя столбцами. 
*/

function printMas(mas1, mas2){ 
    var table = '<table border = 2 id="tab">';
    for (var i = 0, j = 0; i < mas1.length,j < mas2.length; i++, j++){
        table += '<tr><td>' + mas1[i] + '</td>';
		table += '<td>' + mas2[j] + '</td>';
		table += '</tr>';
    }
	table += '</table>';
	return table;
	//document.getElementById('result').innerHTML = htm;
}

/*
1.1 Сравнение двух массивов, вывод соответствующих строк
 */
function compareMas(mas1, mas2){
	var htm = printMas(mas1, mas2);
	htm += '<p>';
	for (var i = 0; i < mas1.length; i++){
		if(mas1[i] == mas2[i])
			htm += 'Совпадение в строке ' + (i + +1) + ' в слове ' + mas1[i] + '<br/>';
	}
	htm += '</p>';
	document.getElementById('result').innerHTML = htm;
}

/*
 1.2 - Сравнение строк в массиве
 Выделение цветов совпадающих строк
 */
function compareMasColor(mas1, mas2){
	var htm = '<table border = 2><tr>';
	for (var i = 0, j = 0; i < mas1.length,j < mas2.length; i++, j++){
		if(mas1[i] == mas2[i]){
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
1.3 - Сортировка массива по алфавиту и в обратном порядке
*/
function sortMas(mas){
	var htm = '<p> <b>Исходный массив :</b> ' + mas + '<br/>';
	var val = +prompt("В каком порядке будем сортировать? (1 -> 2 <-)", '1');
	if(val == 1){
		htm += '<b>Отсортированный по алфавиту массив:</b> ' + mas.sort();
	} else {
		htm += '<b>Отсортированный в обратном порядке массив</b>: ' + mas.sort().reverse();
	}
	htm += '</p>';
	document.getElementById('result').innerHTML = htm;
}

/*
Подготовка страницы к 1.4
вывод таблицы и под таблицей поле ввода с кнопкой
*/
function prevFour(mas1, mas2){
	var htm = printMas(mas1, mas2);
	htm += '<p>Ввести символы для поиска в нижнем регистре<br/><input type="text" value="" id="str"><button onclick="findStr(mas1)">ОК</button></p>';
	document.getElementById('result').innerHTML = htm;
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
	document.getElementById('result').innerHTML = htm;
}

var mas1 = ['Банан', 'Яблоко', 'Клубника', 'Мандарин', 'Груша', 'Лимон'];
var mas2 = ['Груша', 'Маракуйя', 'Клубника', 'Груша', 'Земляника', 'Лимон', 'Банан'];
