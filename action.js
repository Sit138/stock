/* 
	Написать функцию, для работы с двумя массивами данных. 
	Массивы могут содержать, например, списки имен или названий фруктов. 
	Изначально данные в массивах не должны быть отсортированы по алфавиту. 
	Эти массивы должны выводиться на html страничку в виде таблицы с двумя столбцами. 
*/

function printMas(mas1, mas2){ 
    var table = '<table border = 2><tr>';
    for (var i = 0, j = 0; i < mas1.length,j < mas2.length; i++, j++){
        table += '<td>' + mas1[i] + '</td>';
		table += '<td>' + mas2[j] + '</td>';
		table += '</tr>';
    }
	table += '</table>';
	document.getElementById('tab').innerHTML = table;
}

function compareMas(mas1, mas2){
	var htm = '<p>';
	for (var i = 0; i < mas1.length; i++){
		if(mas1[i] == mas2[i])
			htm += 'Совпадение в строке ' + i + ' в слове ' + mas1[i] + '<br/>';
	}
	htm += '</p>';
	document.getElementById('result').innerHTML = htm;
}

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

var mas1 = ['Банан', 'Яблоко', 'Клубника', 'Мандарин', 'Апельсин', 'Лимон'];
var mas2 = ['Груша', 'Маракуйя', 'Клубника', 'Апельсин', 'Земляника', 'Лимон', 'Банан'];

printMas(mas1, mas2);