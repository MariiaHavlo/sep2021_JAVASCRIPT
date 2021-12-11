// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// function reCall(startElement) {
//     console.log(startElement);
//
//     if (startElement.children.length) {
//         for (const element of startElement.children) {
//             reCall(element);
//         }
//
//     }
//     document.addEventListener(('click'),function (e){
//         console.log(e.target.classList);
//     })

// }
//
// reCall(document.body);

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина--

// function reCall(startElement) {
//     console.log(startElement);
//     if (startElement.children.length) {
//         for (const element of startElement.children) {
//             reCall(element);
//         }
//     }
//     document.onclick = function (e) {
//         let pop = document.getElementsByClassName('popup')[0];
//         pop.classList.toggle('showPop');
//         pop.innerText = `${e.target} ${e.target.classlist} ${e.target.id}`
//     }
//
// }


document.forms.createTable;
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let lines = +lines.value;
//     let box = +numberBox;
//     let content = contentBox.value;
//     console.log(lines, box, content);
//
//     let table = document.createElement('table');
//     let tableDiv = document.createElement('div');
//
//     for (let i = 0; i < lines; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 0; j < box; j++) {
//             let td = document.createElement('td');
//
//             tr.appendChild(td);
//             td.innerText = (content);
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
//     table.appendChild(tableDiv);
// }
//
// form.append(numberLines, numberBox, contentBox, button);

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку +++
//
// let arr = ['лайно', 'йолоп', 'дурепа', 'покидьок'];
//
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Перевірити';
// document.body.append(input, button);
//
// button.addEventListener(('click'), function () {
//     let value = input.value;
//
//     for (let item of arr) {
//         if (item === value) {
//             alert('Некоректне введення');
//         }
//     }
// })



