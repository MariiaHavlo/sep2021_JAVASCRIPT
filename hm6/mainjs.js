// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// let str1 = 'lorem ipsum';
// let str2 = 'javascript is cool';
// console.log(str.length,str1.length,str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// let str1 = 'lorem ipsum';
// let str2 = 'javascript is cool';
//  let toUpperCase = str.toUpperCase();
//  console.log(toUpperCase);
//  let toUpperCase1 = str1.toUpperCase();
//  console.log(toUpperCase1);
//  let toUpperCase2 = str2.toUpperCase();
//  console.log(toUpperCase2);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'hello world';
// let str1 = 'lorem ipsum';
// let str2 = 'javascript is cool';
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);
// let toLowerCase1 = str1.toLowerCase();
// console.log(toLowerCase1);
// let toLowerCase2 = str2.toLowerCase();
// console.log(toLowerCase2);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);
// console.log(trim.length);
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray =(str) =>{
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// console.log(arr);

//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, lenght) =>{
//     return str.substring(0, lenght);
// }
// document.write(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.!!!!!
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) =>{
//     let replaceAll = str
//         .replaceAll(' ', '-')
//         .toUpperCase();
//     console.log(replaceAll);
// }
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str));

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = 'hello octen';
// let firstUp = (str) =>{
//     if (str[0]==='string'){
//         return str;
// }
//     return str[0].toUpperCase() +str.slice(1);
// }
// console.log(firstUp(str));
//
// - Напишіть функцію (str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str = 'hello octen world';
// let capitalize = (str) => {
//     return str
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase + word.slice(1))
//         .join(' ');
// };
// console.log(capitalize(str));

// .........................classwork.....................
// - Дано список імен.

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let title = (name) => {
// let s = name.replaceAll('..',' ').replaceAll('---',' ').replaceAll('__',' ');
// console.log(s);
// }
// title(n2);

//
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let arr = (number,diapason) =>{
//     let r = [];
//     for (let i=0;i<number;i++){
//         r.push(Math.round(Math.random()*diapason))
//         console.log(r);
//     }
//     console.log(r);
// }
// arr(40,100);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// let arr = (number,diapason) =>{
//     let r =[];
//     for (let i=0;i<number;i++){
//         r.push(Math.round(Math.random()*diapason))
//     }
//    return r.sort((n1,n2) => n2 - n1);
// }
// console.log(arr(20,100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let arr = (number, diapason) =>{
//     let r = [];
//     for (let i=0;i<number;i++){
//         r.push(Math.round(Math.random()*diapason))
//     }
//     console.log(r);
//     r.filter((value) =>{
//         if (value%2 === 0){
//             console.log(value);
//             return value;
//             }
//         })
// }
// arr(10,50);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = (number,diapason) =>{
//     let r = [];
//     for (let i=0; i<number;i++){
//         r.push(Math.round(Math.random()*diapason))
//     }
//     console.log(r);
//    return r.map(value => value+'');
// }
// console.log(arr(20, 40));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (number, direction) =>{
//     if (direction==='ascending'){
//       return number.sort( (a,b) => a-b);
//     }else if (direction==='descending'){
//       return number.sort((a,b) =>b-a);
//     }
// }
// console.log(sortNums([11, 21, 3], 'ascending'));
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort((c1,c2) =>c2.monthDuration-c1.monthDuration);
// console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let newFilter = coursesAndDurationArray.filter(value=>{
//     return value.monthDuration>5
//
// })
// console.log(newFilter);
//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str,n) =>{
// let newString = [];
//     for (let i=0;i<str.length; i++){
//       newString.push(str.substring(0,n));
//       str = str.slice(n);
//     }
// return newString;
// }
// console.log(cutString('наслаждение', 3));


