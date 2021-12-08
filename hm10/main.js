// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// элемент с id="text".
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let text = document.getElementById('text');
// let button = document.getElementById('button');
// let flag = true;
// button.onclick = function (){
//     if (flag){
//         text.style.display ='none';
//     }else {
//         text.style.display = 'block';
//     }
// flag = !flag;
// };

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let button = document.getElementById('button1');
// button.onclick = function () {
//     let age = document.getElementById('age').value;
//     if (+age < 18) {
//         console.log('you are not 18');
//     } else if (!age) {
//         console.log('enter your age')
//     } else {
//         console.log('welcome');
//     }
// }
//
// - Создайте меню, которое раскрывается/сворачивается при клике

// let array = ['Main', 'Products', 'About us', 'Contacts'];
//
// let menu = document.getElementById('menuButton');
// menu.classList.add('menuButton');
//
//
// let ul = document.getElementsByTagName('ul')[0];
// ul.classList.add('listMenu');
//
// for (let item of array) {
//     let li = document.createElement('li');
//     li.innerText = `${item}`;
//     ul.appendChild(li);
// }
//
//
// menu.onclick = function (){
//     ul.classList.toggle('collapse');
// }
// document.body.appendChild(ul);


//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let arr = [
//     {title: 'Oleh', body: 'hello'},
//     {title: 'Vasyl', body: 'hi'},
//     {title: 'Ivan', body: 'good job'},
// ];
// let container = document.createElement('div');
//
// for (let user of arr) {
//
//     let itemDiv = document.createElement('h2');
//     let itemP = document.createElement('p');
//     let button = document.createElement('button');
//     button.innerText = 'collapse';
//
//
//     for (let userKey in user) {
//
//         itemDiv.innerText = `${user.title}`;
//         itemP.innerText = `${user.body}`;
//
//         button.onclick = function () {
//             itemP.hidden = true;
//         }
//
//     }
//     container.append(button,itemDiv,itemP);
// }
// document.body.appendChild(container);