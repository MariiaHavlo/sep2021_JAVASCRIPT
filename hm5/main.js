// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// let areaRec = (a,b) =>a*b;
// console.log(areaRec(10, 10));

// - створити функцію яка обчислює та повертає площу кола
// let areaCircle = (r) => {
//     const Pi = 3.14;
//     let diameter = r ** 2;
//     return Pi * diameter;
// }
// console.log(areaCircle(5));


// - створити функцію яка обчислює та повертає площу циліндру
// const Pi = 3.14;
// let areaCylinder = (r,h)=>2*Pi*r*h;
// console.log(areaCylinder(10, 10));


// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = ['a',2,'b',45,'sun'];
// let arr = (array) =>{
//     for (let i=0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// arr(array);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let text = (p) =>p;
// console.log(text('some text'));

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let list = (size,text) =>{
//     for (let i=0;i<size;i++){
//         document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`</ul>`);
//     }
// }
// list(10,'some text');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (size, text) => {
//     for (let i = 0; i < size; i++) {
//         document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`</ul>`);
//     }
// }
// list(3, 'some text');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = ['a',2,'b',45,'sun',true];
// let list = (array)=>{
// document.write(`<ul>`)
//     for (let i=0;i<array.length;i++){
//         document.write(`<li>${array[i]}</li>`);
//     }
// document.write(`</ul>`)
// }
// list(array);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let array = [
//     {id:1,name:'Anton',age:36},
//     {id:2,name:'Ira',age:45},
//     {id:3,name:'Oleh',age:22},
// ];
// let Obj = (array) =>{
//     for (let items of array){
//         document.write(`<div>${items.id} ${items.name} ${items.age}</div>`);
//     }
// }
// Obj(array);

// .......................classWork.......................
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let increment = (a,b,c)=>{
//     if (a<b && a<c){
//         console.log(a);
//     }else if (b<a && b<c){
//         console.log(b);
//     }else if (c<a && c<b){
//         console.log(c);
//     }else {
//         console.log('error')
//     }
// }
// increment(5,45,12);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let increment = (a,b,c)=>{
//     if (a>b && a>c){
//         console.log(a);
//     }else if (b>a && b>c){
//         console.log(b);
//     }else if (c>a && c>b){
//         console.log(c);
//     }else {
//         console.log('error')
//     }
// }
// increment(5,45,12);
// - створити функцію яка повертає найбільше число з масиву
// let array = [5, 45, 456, 12, 98];
// let maxNumber = (array) => {
//     let max = array[0];
//     for (let maxArray of array) {
//         if (maxArray > max) {
//             max = maxArray;
//         }
//     }
//     return max;
// }
// console.log(maxNumber(array));

// - створити функцію яка повертає найменьше число з масиву
// let array = [5, 45, 456, 12, 98];
// let minNumber = (array) => {
//     let min = array[0];
//     for (let minArray of array) {
//         if (minArray < min) {
//             min = minArray;
//         }
//     }
//     return min;
// }
// console.log(minNumber(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [5, 45, 456, 12, 98];
// let arr = (array) =>{
//     let summ = 0;
//     for (let summArray of array){
//         summ+=summArray;
//     }
//     return summ;
// }
// console.log(arr(array));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [5, 45, 456, 12, 98];
// let arr = (array)=>{
//     let summ = 0;
//     for (let item of array){
//         summ+=item;
//     }
//     return summ / array.length;
// }
// console.log(arr(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
// let minMax =(...arg)=>{
//     let min = arg[0];
//     let max = arg[0];
//     for (let number of arg){
//         if (number>max){
//             max = number;
//         }else if (number<min){
//             min = number;
//         }
//     }
// console.log(max);
//     return min;
// }
// minMax(10,456,89.12,78);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arrRandom = (number, diapason) => {
//     for (let i = 0; i < number; i++) {
//         let r = Math.round(Math.random() * diapason);
//
//         console.log(r);
//     }
// }
// arrRandom(700, 20);
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// let arrRandom = (number, diapason) => {
//     for (let i = 0; i < number; i++) {
//         let r = Math.round(Math.random() * diapason);
//
//         console.log(r);
//     }
// }
// arrRandom(700, 20);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 2, 3];
// let reverse = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         let item = arr[i];
//         newArr.push(item);
//         console.log(newArr);
//     }
// }
// reverse(arr);


