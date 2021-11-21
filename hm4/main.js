// .................................homework...........................
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a,b){
//     let areaRectungle = a*b;
//     return areaRectungle;
// }
// console.log(area(5,10));
// document.write('Area rectungle' + area(5,10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaCircle(r){
//     const Pi = 3.14;
//     let radius = r**2;
//     let s = Pi * radius;
//     return s;
// }
// console.log(areaCircle(20));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCylinder(h,r) {
//     const Pi=3.14;
//     let s = 2*Pi*r*h;
//     return s;
// }
// console.log(areaCylinder(10,5));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = ['a',2,'b',45,'sun'];
// function dataArray(array){
//     for (let i=0; i < array.length;i++){
//         document.write(array[i]);
//     }
// }
// dataArray(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p(text){
//     document.write(`<p>${text}</p>`);
// }
// p(`some new text`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function array(text){
//     for (let i=0;i<array.length;i++){
//         document.write(`<ul>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`</ul>`)
//     }
// }
// array(`new text`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function array(text,number){
//         document.write(`<ul>`);
//     for (let i=0; i< number; i++){
//         document.write(`<li>${text}</li>`)
//     }
//         document.write(`</ul>`);
// }
// array(`some text`,5);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let items = ['a','my',45,'true', true,56,false,'family'];
//
// function list(array){
//         document.write(`<ul>`);
//     for (let i = 0;i< array.length; i++){
//                 document.write(`<li>${array[i]} </li>`)
//     }
//         document.write(`</ul>`);
// }
// list(items);
// //
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.!!!!
// // Для кожного об'єкту окремий блок.
// let newItems = [
//     {id: 1, name: 'Olya', age: 27},
//     {id: 2, name: 'Ivan', age: 29},
//     {id: 3, name: 'Katya', age: 33},
//     {id: 4, name: 'Petro', age: 38},
// ];
// function objectArray(items){
//     for (let element of items){
//         document.write(`<div>${element.id}. ${element.name}. ${element.age}</div>`);
//     }
// }
// objectArray(newItems);

// .........................................classwork.................................
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function array(a,b,c){
//     if (a<b && a<c){
//         document.write(a);
//     }else if (b<a && b<c){
//         document.write(b);
//     }else if (c<a && c<b){
//         document.write(c);
//     }
// }
// array(4,5,8);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function array(a,b,c){
//     if (a>b && a>c){
//         document.write(a);
//     }else if (b>a &&  b>c){
//         document.write(b);
//     }else if (c>a && c>b){
//         document.write(c);
//     }
// }
// array(5,45,80);

// - створити функцію яка повертає найбільше число з масиву
// let item = [5,8,41,66,54,3];
// function arrayMaxNumber(number){
//     let max = number[0];
//     for (let maxArray of number){
//         if (maxArray > max){
//             max = maxArray;
//         }
//     }
//     return max;
// }
// console.log(arrayMaxNumber(item)) ;

// - створити функцію яка повертає найменьше число з масиву
// let item = [5, 8, 41, 66, 54, 3];
//
// function arrayMinNumber(number) {
//     let min = number[0];
//     for (let arrayMin of number) {
//         if (arrayMin < min) {
//             min = arrayMin;
//         }
//     }
//
//     return min;
// }
//
// console.log(arrayMinNumber(item));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [4,6,9,10,5];
// function summNumbers (array){
//     let summ = 0;
//     for ( let items of array){
//         summ+=items;
//     }
//     return summ;
// }
//
// console.log(summNumbers(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [4,6,9,10,5];
// function Array(items){
//     let summ = 0;
//
//     for (let number of items){
//         summ+=number/items.length;
//     }
//     return summ;
// }
// console.log(Array(arr) );

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function maxNumber() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let maxArray of arguments) {
//         if (maxArray > min) {
//             min = maxArray;
//         } else if (maxArray < max) {
//             max = maxArray;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(maxNumber(4, 5, 8, 12, 44));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomizer(size,diapazon){
//     for (let i=0;i< size;i++){
//         let r = Math.round(Math.random()*diapazon);
//         document.write(`<div>${r}</div>`);
//     }
// }
// randomizer(10,100);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
// function random(size, limit) {
//     for (let i = 0; i < size; i++) {
//         let r = Math.round(Math.random() * limit);
//         document.write(`<div>${r}</div>`);
//     }
// }
//
// random(25, 45);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let numbers = [1,2,3,4,5,6,7];
// let newArr = [];
// function array(item){
//     for (let i = item.length-1; i>=0; i--){
//         let itemElement = item[i];
//         newArr.push(itemElement);
//         console.log(newArr);
//     }
// }
// array(numbers);

// .......................additional..................
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function array(){
//    if (arguments.length===1){
//        document.write(arguments[0]);
//    }else if (arguments.length===2){
//        document.write(arguments[0] + ' ' + arguments[1]);
//    }
// }
// array(6,45);

//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// let arr1=[1,2,3,4];
// let arr2 = [2,3,4,5];
// let arr3 = [];
//
// function arr(arr1,arr2){
//     for (let i=0,b=0; i<arr1.length,b<arr2.length;i++,b++){
//         arr3.push(arr1[i]+arr2[b]);
//     }
//     console.log(arr3);
//     return arr3;
// }
// arr(arr1,arr2);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]


// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let newArr = [];
// function Arr(item){
//     for (let i=0;i<item.length;i++){
//         let itemIndex = item[i];
//         for (let itemKey in itemIndex){
//             newArr.push(itemKey);
//
//         }
//     }
//     console.log(newArr);
//     return newArr;
//
// }
// Arr(user);


//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let newArr=[];
// function arr(item){
//     for (let i =0; i<item.length; i++){
//         let itemIndex = item[i];
//         for (let itemKey in itemIndex){
//             newArr.push(itemIndex[itemKey]);
//         }
//     }
//     console.log(newArr);
//     return newArr;
// }
// arr(user);