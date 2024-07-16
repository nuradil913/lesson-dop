// {
//     var a = 10;
//     let b = 10;
//     const c = 10;

//     console.log(b);
//     console.log(c);

// }

// console.log(a);

// Передача нескольких неопределенных аргументов

// let addition = function(a, b, ...c) {
//     return a;
// };

// let arrow = (a, b) => {
//     return a - b
// }

// console.log(addition(10, 20, 20, 45, 52, 44));


// function foo(x, y, z) {
//     console.log(x, y, z);
// }

// // foo(...a)

// let a = [1, 2, 3]

// let b = [...a, 4, 5, 7] // добавление элементов в существующем массиве

// console.log(a);
// console.log(b);


// Деструктуризация массива
// function dis(){
//     return [1, 5, 8]
// }

// let [a, b, c] = dis();

// console.log(a);
// console.log(b);
// console.log(c);


// function dec(){
//     return {
//         a: 1,
//         b: 2,
//         c: 3
//     }
// }

// let {a, b, c} = dec();
// let {a: v, b: n, c: l} = dec();

// console.log(b);




// console.log(dateNow);
// console.log(dateNow.getDay());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDate());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());
// console.log(dateNow.getMilliseconds());

// console.log(dateNow.getUTCHours());

// console.log(dif);


let dateNow = new Date();
// let dateOld = new Date(0);
let dateLine = new Date(2024, 9, 1);
let dif = dateLine.getTime() - dateNow.getTime()

let zero = num => num < 10 ? `0${num}` : num


let day = document.getElementById('day');
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


day.textContent = zero((dif / 1000 / 60 / 60 / 24).toFixed(0));
hour.textContent = zero(((dif / 1000 / 60 / 60) % 24).toFixed(0));
min.textContent = zero(Math.floor((dif / 1000 / 60) % 60));
sec.textContent = zero(((dif / 1000) % 60).toFixed(0));
