// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let number = [1,5,8,41,45];
// let text =['day', 'year', 'month','moon', 'sun'];
// let a = [4,5,8,46.-15,'I','he','she','you','125', true, false];
// console.log(number);
// console.log(text);
// console.log(a);

//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let a = [];
// a[0] = '111';
// a[1] = 'first';
// a[2] = 'second';
// a[3] = -22;
// a[4] = '44';
// console.log(a);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for(let i = 0; i<10; i++){
//     document.write('<div>some text</div>');
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for(let i = 0; i<10; i++){
//     document.write(`<div>day ${i}</div>`);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>text</h1>')
//     i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while(i<20){
//     document.write(`<h1>text ${i}</h1>`)
//     i++;
// }
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let item = [1,10,44,56,88,-1,55,33,59,45];
// for(const p of item){
//     console.log(p);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let text = ['1','55','4','6','66','i','a','b','c','d'];
// for(let item of text){
//     console.log(item);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let a = [1,'1',true, 46,88,'hello','buy','36',77, false];
// for(let b of a){
//     console.log(b);
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof
// вивести тільки булеві елементи
// let item = [1,'1',true, 46,88,'hello','buy','36',77, false];
// for(let i = 0; i<10; i++) {
//     if (typeof item[i] === 'boolean') {
//         console.log(item[i]);
//     }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
// let item = [1,'1',true, 46,88,'hello','buy','36',77, false];
// for (let i = 0; i< item.length; i++){
//     if (typeof item[i] ==='number'){
//         console.log(item[i]);
//     }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let item = [1,'1',true, 46,88,'hello','buy','36',77, false];
// for(let i = 0; i<10; i++) {
//     if (typeof item[i] === 'string') {
//         console.log(item[i]);
//     }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let x= [];
// x[0] = '2';
// x[1] = 45;
// x[2] = true;
// x[3] = 77;
// x[4] = 'hello';
// x[5] = 5;
// x[6] = false;
// x[7] = 97;
// x[8] = 'false';
// x[9] = 9;
// for (let index of x){
//     console.log(index);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<10;i++){
//     console.log(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//  for (let i = 0; i<100;i++){
//     console.log(i);
//     document.write(i);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i<100;i+=2){
//     console.log(i);
//     document.write(i);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i<100; i++){
// if (i % 2 ===0){
//     console.log(i);
//     document.write(`${i} <br>` );
// }
//  }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

 // for (let i = 0; i<100; i++){
 //  if (i % 2 !==0) {
 //     console.log(i);
 //     document.write(`${i} <br>`);
 //
 //  }
 //  }


//  ......................classwork....................

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i =0;
// while (i < numbers.length){
//     console.log(numbers[i]);
//     i++;
// }

//     2. перебрати його циклом for
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i<numbers.length ){
//     if (i%2!==0){
//     console.log(numbers[i]);
//     }
//     i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<numbers.length; i++ ){
//     if (i%2 !==0)
//     console.log(numbers[i]);
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i<numbers.length){
//     if (i%2===0)
//     console.log(numbers[i]);
//     i++;
//  }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<numbers.length; i++){
//     if (i%2===0)
//     console.log(numbers[i]);
// }
// 7. замінити кожне число кратне 3 на слово "okten"
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<numbers.length; i++){
//     let content = numbers[i] % 3;
//     if (content===0){
//         console.log(numbers[i])
//     }
// }
// 8. вивести масив в зворотньому порядку.
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numbers.length-1; i>=0;i--){
//     console.log(numbers[i]);
// }




// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// перебрати його циклом for
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i =numbers.length-1;i>=0; i--){
//     console.log(numbers[i]);
// }
// ....................перебрати циклом while та вивести  числа тільки з непарним індексом.....................................
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i =numbers.length-1;
// while (i>=0){
//     console.log(numbers[i]);
//     i--;
// }
// ..........перебрати циклом for та вивести  числа тільки з непарним індексом.............................
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numbers.length-1; i>=0; i-- ){
//     if (i%2 !==0)
//     console.log(numbers[i]);
// }
// .......5. перебрати циклом while та вивести  числа тільки парні  значення...
// let numbers = [2,17,13,6,22,31,45,66,100,-18];
// let i = numbers.length-1;
// while (i>=0){
//     if (i%2===0)
//     console.log(numbers[i]);
//     i--;
//  }
// .............6. перебрати циклом for та вивести  числа тільки парні  значення
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numbers.length-1; i>=0; i--){
//     if (i%2===0)
//     console.log(numbers[i]);
// }
// ............ 7. замінити кожне число кратне 3 на слово "okten"
//  let numbers = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = numbers.length-1; i>=0; i--){
//     let content = numbers[i] % 3;
//     if (content===0){
//         console.log(numbers[i])
//     }
// }

// .................template 1..................../*
//             Використовуючи данні з масиву, за допомоги document.write та циклу
//             побудувати структуру по шаблону template1.1
//             */ <!--        template 1.1-->
//         <ul>
//             <li>ITEM OF ARRAY</li>
//             <!--
//             інші об'єкти масиву

//         </ul>
//
// 			let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// document.write(`<ul>`)
// for (let i = 0; i < listOfItems.length; i++) {
//
//     document.write(`<li>${listOfItems[i]}</li>`)
//
// }
// document.write(`</ul>`)

// .................template 2..................../*
/*
           Використовуючи данні з масиву, за допомоги document.write та циклу
           побудувати структуру по шаблону template2.1 & template2.2. Зробити адекватну стилізацію.
           Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон.
           Шаблон застосувати до кожного об'єкта в масиві

       <!--template 2.2-->
       <div>
           <h2>NAME SURNAME. age is - AGE</h2>
           <p>INFO</p>
           <img src="PHOTO" alt="">
       </div>
       <!--
       інші об'єкти з масиву

           */
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];

//  for (const item of simpsons){
//  document.write(`<div class="simpson">`);
//      document.write(`<h2>${item.name} ${item.surname}. Age is-${item.age} </h2>`);
//      document.write(`<p> ${item.info}</p>`);
//      document.write(`<img src="${item.photo}" alt="${item.name}">`);
// document.write(`</div>`);
//  }

// <!--template 2.1-.............................................->
// <div>
//     NAME- SURNAME- AGE- INFO- <img src="PHOTO" alt="">
// </div>


// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// document.write(`<div class="simpson">`);
// for (let item of simpsons) {
//     document.write(`NAME - ${item.name} SURNAME - ${item.surname} AGE -${item.surname} INFO -${item.info} <img src="${item.photo}"alt="${item.name}">  `)
// }
//
// document.write(`</div>`);

// .................template 3..................../*

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону template3.1 Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
// */
<!--        template 3.1-->
// <div>
//     <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="" alt="" class="product-image">
//     </div>
//     <!--
// </div>

//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// document.write(`<div class="product">`);
// for (let item of products){
//     document.write(`<div class="product-card">`)
//     document.write(`<h3 class="product-title">${item.title}. Price -${item.price} </h3>`)
//     document.write(`<img src="${item.image}" alt="${item.title}" class="product-image">`)
//     document.write(`</div>`)
// }
//
// document.write(`</div>`);