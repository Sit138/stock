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
	var htm = '<br/> <p>';
	for (var i = 0; i < mas1.length; i++){
		if(mas1[i] == mas2[i])
			htm += 'Совпадение в строке ' + i + ' в слове ' + mas1[i] + '<br/>';
	}
	htm += '</p>';
	document.getElementById('result').innerHTML = htm;
}



var mas1 = ['Банан', 'Яблоко', 'Клубника', 'Мандарин', 'Апельсин', 'Лимон'];
var mas2 = ['Груша', 'Маракуйя', 'Клубника', 'Апельсин', 'Земляника', 'Арбуз', 'Банан'];

printMas(mas1, mas2);