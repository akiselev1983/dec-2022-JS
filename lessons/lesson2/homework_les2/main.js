// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let obj = [5 , 100, 'hello', 'world', -99, true, 88, false, "name", 'anna']
console.log(obj[0]);
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[3]);
console.log(obj[4]);
console.log(obj[5]);
console.log(obj[6]);
console.log(obj[7]);
console.log(obj[8]);
console.log(obj[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: 'HTML',
    pageCount: 150,
    genre: 'education'
};
let book1 = {
    title: 'PYTHON',
    pageCount: 550,
    genre: 'education'
};
let book2 = {
    title: 'JAWA',
    pageCount: 450,
    genre: 'education'
};
console.log(book);
console.log(book1);
console.log(book2);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.
let book3 = {
    title: 'HTML',
    pageCount: 150,
    genre: 'education',
    autors: [{name: 'Tolya', age: 35}, {name: 'Anna', age: 46}]
};
let book4 = {
    title: 'PYTHON',
    pageCount: 550,
    genre: 'education',
    autors: [{name: 'Olya', age: 25}, {name: 'Petya', age: 36}]
};
let book5 = {
    title: 'JAWA',
    pageCount: 450,
    genre: 'education',
    autors: [{name: 'Olya', age: 25}, {name: 'Petya', age: 36}]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [user1 = {name: 'Tolya', username: 'tolya85', password: 'ghgfhdgdbgh'},
    user2 = {name: 'Tolya', username: 'tolya85', password: '555vfdgr'},
    user3 = {name: 'Olya', username: 'olya_34', password: 'bgg6bbn'},
    user4 = {name: 'Igor', username: 'igorh5', password: 'gghg564'},
    user5 = {name: 'Tolya', username: 'tolya85', password: 'cggbg342'},
    user6 = {name: 'Vasya', username: '12345vas', password: 'vfhbg567'},
    user7 = {name: 'Tolya', username: 'tolya999', password: 'fhghbg45'},
    user8 = {name: 'Katya', username: '555kat', password: 'ggh55nhn'},
    user9 = {name: 'Tolya', username: 'tol123', password: 'b65r45'},
    user10 = {name: 'Tolya', username: 'tol55', password: 'vghh677g'}
];
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x
if (x!==0){
    console.log('Вірно');
} else{
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time;
if (time>=0 && time<15){
    console.log('Перша частина години!!!');
} else if (time>=15 && time<30){
    console.log('Друга частина години!!!');
} else if (time>=30 && time<45){
    console.log('Третя частина години!!!');
} else if (time>=45 && time<=59){
    console.log('Четверта частина години!!!');
} else {
    console.log('Не вірне число!!!');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day;
if (day>=1 && day<=10){
    console.log('Перша декада місяця!!!');
} else if (day>10 && day<=20){
    console.log('Друга декада місяця!!!');
} else if (day>20 && day<=31){
    console.log('Третя декада місяця!!!');
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//    відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let asd=5;
switch (asd) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('???')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a=55;
let b=55;
if (a===b){
    console.log('Числа рівні');
} else if (a>b){
    console.log(a);
} else {
    console.log(b);
};

//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//   за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//   (хибноподібні, тобто приводиться до false)
let c = '5';
c = c || 'default';
console.log(c);

//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
// його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if ((coursesAndDurationArray[0].monthDuration)>5){
    console.log(coursesAndDurationArray[0].title + ' ' + 'Супер')
}
if ((coursesAndDurationArray[1].monthDuration)>5){
    console.log(coursesAndDurationArray[1].title + ' ' + 'Супер')
}
if ((coursesAndDurationArray[2].monthDuration)>5){
    console.log(coursesAndDurationArray[2].title + ' ' + 'Супер')
}
if ((coursesAndDurationArray[3].monthDuration)>5){
    console.log(coursesAndDurationArray[3].title + ' ' + 'Супер')
}
if ((coursesAndDurationArray[4].monthDuration)>5){
    console.log(coursesAndDurationArray[4].title + ' ' + 'Супер')
}
if ((coursesAndDurationArray[5].monthDuration)>5){
    console.log(coursesAndDurationArray[5].title + ' ' + 'Супер')
}
