//
// //
// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname , email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
// }
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// let userArr = [
//     new User(1,'Olya','Lypova','lyp@gmail.com','0965588987'),
//     new User(2, 'Petro','Lypov','lyp@gmail.com','0965588987'),
//     new User(3,'Olya','Kit','lyp@gmail.com','0965588987'),
//     new User(4,'Vasya','Kit','lyp@gmail.com','0965588987'),
//     new User(5,'Lesya','Holub','lyp@gmail.com','0965588987'),
//     new User(6,'Ivan','Pomelo','lyp@gmail.com','0965588987'),
//     new User(7,'Ira','Kit','lyp@gmail.com','0965588987'),
//     new User(8,'Olya','Hurka','lyp@gmail.com','0965588987'),
//     new User(9,'Anna','Kolodii','lyp@gmail.com','0965588987'),
//     new User(10,'Olya','Kit','lyp@gmail.com','0965588987')
// ];
// console.log(userArr);
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let userFilter = userArr.filter(value =>{
//     if (value.id % 2===0){
//         return value;
//     }
// })
// console.log(userFilter);
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userSort = userArr.sort((u1,u2) => u1.id-u2.id);
// console.log(userSort);
//
// //
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
// let clientArr = [
//     new Client(1,'Olya','Lypova','lyp@gmail.com','0965588987',['milk','juice']),
//     new Client(2, 'Petro','Lypov','lyp@gmail.com','0965588987',['carrot','pottato','water']),
//     new Client(3,'Olya','Kit','lyp@gmail.com','0965588987',['book']),
//     new Client(4,'Vasya','Kit','lyp@gmail.com','0965588987',['dish','plate']),
//     new Client(5,'Lesya','Holub','lyp@gmail.com','0965588987',['water','ice','juice']),
//     new Client(6,'Ivan','Pomelo','lyp@gmail.com','0965588987',['dish','plate']),
//     new Client(7,'Ira','Kit','lyp@gmail.com','0965588987',['book']),
//     new Client(8,'Olya','Hurka','lyp@gmail.com','0965588987',['dish','plate']),
//     new Client(9,'Anna','Kolodii','lyp@gmail.com','0965588987',['book']),
//     new Client(10,'Olya','Kit','lyp@gmail.com','0965588987',['book'])
// ]
// console.log(clientArr);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let clientSort = clientArr.sort((u1,u2) => u1.order.length-u2.order.length);
// console.log(clientSort);

// .......................classwork................................

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxSpeed, capacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     this.info = function () {
//         console.log(`модель-${this.model} виробник-${this.manufacturer} рік випуску-${this.year} максимальна швидкість-${this.maxSpeed} об'єм двигуна-${this.capacity}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new Car('bmw', 'Germany', 2015, 240, 2.8);
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(100);
// car1.changeYear(2019);
// car1.addDriver('Petro');
// console.log(car1);


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, year, maxSpeed, capacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info() {
//         console.log(`модель-${this.model} виробник-${this.manufacturer} рік випуску-${this.year} максимальна швидкість-${this.maxSpeed} об'єм двигуна-${this.capacity}`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// let car1 = new Car('toyota', 'China', 2010, 240, 3, 2)
// console.log(car1);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(100);
// car1.changeYear(2001);
// car1.addDriver('Petro');
// console.log(car1);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Women {
//     constructor(name,age,size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// let cinderellaArr = [
//     new Women('kira',25,38),
//     new Women('Ira',29,35),
//     new Women('Anna',26,37),
//     new Women('Sofiia',27,38),
//     new Women('Lina',30,40),
//     new Women('Olya',31,39),
//     new Women('Dariia',35,36),
//     new Women('Diana',33,37.5),
//     new Women('Emilia',25,38.5),
//     new Women('Eva',21,39)
// ]
// class Man {
//     constructor(name,age,findShoes) {
//         this.name = name;
//         this.age = age;
//         this.findShoes = findShoes
//     }
// }
// let prince = new Man('Kolya',30,37.5);
//
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let whichCinderella = (cinderellaArr,prince) =>{
//     for (let cinderellaWinner of cinderellaArr){
//         if (cinderellaWinner.size ===prince.findShoes){
//             return cinderellaWinner;
//         }
//     }
// }
// console.log(whichCinderella(cinderellaArr, prince));
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let cinderellaItem = cinderellaArr.find((value) => value.size===prince.findShoes);
// console.log(cinderellaItem);

// ...................................additional...................
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
// function User(id, name, username, email, street, suite, city, zipcode, lat, lng, phone,website,companyName,catchPhrase,bs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {street: street, suite: suite, city: city, zipcode: zipcode};
//     this.geo = {lat: lat, lng: lng};
//     this.phone = phone;
//     this.website = website;
//     this.company = {companyName:companyName,catchPhrase:catchPhrase,bs:bs};
// }
// let infoUser = new User(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556',
//     'Gwenborough','92998-3874','-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org',
//     'Romaguera-Crona','Multi-layered client-server neural-net','harness real-time e-markets');
// console.log(infoUser);


