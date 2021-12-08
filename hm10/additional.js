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





