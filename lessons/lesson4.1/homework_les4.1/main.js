// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area_rectangle(a, b) {
    return a * b
};

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function area_circle(r) {
  return Math.PI * Math.pow(r , 2);
};

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function area_cylinder(h, r) {
    return 2 * Math.PI * r * (h + r);
};

// - створити функцію яка приймає масив та виводить кожен його елемент

function array(arr) {
    for ( let arrElementa of arr) {
        console.log(arrElementa)
    } ;
};

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function textMessage(text) {
    let html = `<p>${text}</p>`;
    document.write(html);
};

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function textMessage1(text) {
    let html = `<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`;
    document.write(html);
};

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function textMessage2(text, a) {
    document.write(`<ul>`);
        for (let i=0; i<a; i++) {
           document.write(`<li>${text}</li>`);
        };
    document.write(`</ul>`);
};
textMessage2('loren', 21);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arr_list(arr) {
    for ( let arrElement of arr) {
        document.write(`<div>${arrElement}</div>`)
    };
};
let x = [1, 5, true, 'hello'];
arr_list(x);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//    Для кожного об'єкту окремий блок.
function arr_list1(arr) {
    for ( let arrElements of arr) {
        document.write(`<div>`);
        for (let key in arrElements) {
            document.write(`<p>${key} ${arrElements[key]}</p>`)
        };
        document.write('</div>');
    };
};
let a = [{id: 5, name: 'olya', age: 33}, {id: 6, name: 'tolya', age: 43}, {id: 7, name: 'vasya', age: 28}];
arr_list1(a)
// - створити функцію яка повертає найменьше число з масиву

function numSmall(arr){
    let a = arr[0];
    for (let arrElement of arr) {
        if (arrElement < a) {
            a = arrElement;
        }
    };
    return document.write(a)
};

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//   Приклад sum([1,2,10]) //->13

function sum(arr) {
    let a = 0;
    for (let arrElement of arr) {
        a += arrElement;
    };
    return document.write(a);
};
let c = [1, 55, 10];
sum(c);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr,index1,index2) {
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
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value
        };
        };
    };
document.write(exchange(10000,[{currency:'USD',value:40}, {currency:'EUR',value:42}],'USD'));