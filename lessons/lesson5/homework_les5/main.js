// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area_rectangle=(a, b) => a*b;
document.write(area_rectangle(10,20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let area_circle=(r) => Math.PI * Math.pow(r , 2);
document.write(area_circle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let area_cylinder=(h, r) => 2 * Math.PI * r * (h + r);
document.write(area_cylinder(3, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

 let array=(arr) => arr.filter(function (item) {
     return item;
 });

 let a = [1,5,8,true, 'hello'];
 document.write(array(a));
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let textMessage=(text) => `<p>${text}</p>`;
document.write(textMessage('hello okten'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let textMessage1=(text) => `<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`;
document.write(textMessage1('hello world'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let textMessage2=(text, a) => {
    document.write(`<ul>`);
    for (let i=0; i<a; i++) {
        document.write(`<li>${text}</li>`);
    };
    document.write(`</ul>`);
};
textMessage2('loren', 21);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arr_list=(arr) => {
    for ( let arrElement of arr) {
        document.write(`<div>${arrElement}</div>`)
    };
};
let x = [1, 5, true, 'hello'];
arr_list(x);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//   Для кожного об'єкту окремий блок.

let arr_list1=(arr) => {
    for ( let item of arr) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
    };
};
let b = [{id: 5, name: 'olya', age: 33}, {id: 6, name: 'tolya', age: 43}, {id: 7, name: 'vasya', age: 28}];
arr_list1(b)

// - створити функцію яка повертає найменьше число з масиву

let numSmall=(arr) => {
    let a = arr[0];
    for (let arrElement of arr) {
        if (arrElement < a) {
            a = arrElement;
        }
    };
    return document.write(a)
};

let c = [5, 9 , -65, 7 , 1];
numSmall(c)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13

let sum=(arr) => {
    let a = 0;
    for (let arrElement of arr) {
        a += arrElement;
    };
    return document.write(a);
};
let s = [1, 55, 10];
sum(s);

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap=(arr,index1,index2) => {
    for (let i = 0; i < arr.length; i++) {
        if (i === index1) {
            let index = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = index;
        }
    }
    return document.write(arr)
};
swap([11,22,33,44],0,3);

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',vale:40},{currency:'EUR',value:42}],'USD') // => 250

exchange=(sumUAH,currencyValues,exchangeCurrency) => {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value
        };
    };
};
document.write(exchange(10000,[{currency:'USD',value:40}, {currency:'EUR',value:42}],'USD'));