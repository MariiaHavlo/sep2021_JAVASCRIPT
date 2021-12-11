// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на
// консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let container1 = document.createElement('div');
//
// let container2 = document.createElement('div');
//
// let form1 = document.createElement('form');
// form1.setAttribute('name','form1');
//
//
// let input1 = document.createElement('input');
// input1.setAttribute('name','input1');
//
// let input2 = document.createElement('input');
// input2.setAttribute('name','input2');
//
//
// let form2 = document.createElement('form');
// form2.setAttribute('name','form2');
//
// let input3 = document.createElement('input');
// input3.setAttribute('name','input3');
//
// let input4 = document.createElement('input');
// input4.setAttribute('name','input4');
//
// let btn = document.createElement('button');
// btn.innerText = 'save';
//
// btn.addEventListener(('click'),function (){
// console.log(document.forms['form1'] ['input1.value']);
// console.log(document.forms['form1'] ['input2.value']);
// })
// btn.addEventListener(('click'),function (){
// console.log(document.forms['form2'] ['input3.value']);
// console.log(document.forms['form2'] ['input4.value']);
// });
//
// document.body.append(container1,container2);
// container1.appendChild(form1);
// container2.appendChild(form2);
// form1.append(input1,input2);
// form2.append(input3,input4);
// document.body.appendChild(btn);

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом. --
// (Додатковачастина для завдання)

let form = document.forms.createTable;
let line = form.lines;
let row = form.box;
let boxContent = form.content;
let button = document.getElementsByTagName('button')[0];
console.log(form);

form.onsubmit = function (e) {
    e.preventDefault();
    let lines = +line.value;
    let box = +row.value;
    let content = boxContent.value;
    console.log(lines, box, content);

    let table = document.createElement('table');
    let tableDiv = document.createElement('div');

    for (let i = 0; i < lines; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < box; j++) {
            let td = document.createElement('td');

            tr.appendChild(td);
            td.innerText = (content);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
    table.appendChild(tableDiv);
}

form.append(line, row, boxContent, button);




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
//
//


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let arr = ['лайно', 'йолоп', 'дурепа', 'покидьок'];
// let input = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Перевірити';
// document.body.append(input, button);
//
// button.addEventListener(('click'), function (){
//     let value = input.value;
//     for (let item of arr){
//         if (value.includes(item)){
//             alert('некоректне введення');
//         }
//     }
// })
