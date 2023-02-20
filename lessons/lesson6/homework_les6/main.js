// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
//==================================================

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
//===================================================

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
//===================================================================================================================

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.substring(1, 13))
//===================================================================================================================


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str1 = 'Ревуть воли як ясла повні';
let arr = str1.split(' ');
console.log(arr)

// або за допомогою функції
 function stringToarray(str) {
    return str.split(' ');
}
console.log(stringToarray(str1));
//===================================================================================================================

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let mas = [10,8,-7,55,987,-1011,0,1050,0];
let map = mas.map(value => String(value));
console.log(map);
//===================================================================================================================

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums,direction) {
    return  nums.sort((a, b) => {
        if (direction === 'ascending') {
            return a-b;
        }
        if (direction === 'descending'){
            return b - a;
        }
    });
}
let nums = [11,21,3];
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));
// ==================================================================================================================

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let monthDuration = coursesAndDurationArray.sort((a, b) => {
     return b.monthDuration - a.monthDuration;
});
console.log(monthDuration);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let duration = coursesAndDurationArray.filter(u => u.monthDuration >5);
console.log(duration);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map1 = coursesAndDurationArray.map((u, index) => {
    return {id: index+1, title:u.title, monthDuration:u.monthDuration };
});
console.log(map1);
// ===================================================================================================================

//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit: 'spade', value: '6', color:'black'},
    {cardSuit: 'spade', value: '7', color:'black'},
    {cardSuit: 'spade', value: '8', color:'black'},
    {cardSuit: 'spade', value: '9', color:'black'},
    {cardSuit: 'spade', value: '10', color:'black'},
    {cardSuit: 'spade', value: 'jack', color:'black'},
    {cardSuit: 'spade', value: 'queen', color:'black'},
    {cardSuit: 'spade', value: 'king', color:'black'},
    {cardSuit: 'spade', value: 'ace', color:'black'},
    {cardSuit: 'clubs', value: '6', color:'black'},
    {cardSuit: 'clubs', value: '7', color:'black'},
    {cardSuit: 'clubs', value: '8', color:'black'},
    {cardSuit: 'clubs', value: '9', color:'black'},
    {cardSuit: 'clubs', value: '10', color:'black'},
    {cardSuit: 'clubs', value: 'jack', color:'black'},
    {cardSuit: 'clubs', value: 'queen', color:'black'},
    {cardSuit: 'clubs', value: 'king', color:'black'},
    {cardSuit: 'clubs', value: 'ace', color:'black'},
    {cardSuit: 'diamond', value: '6', color:'red'},
    {cardSuit: 'diamond', value: '7', color:'red'},
    {cardSuit: 'diamond', value: '8', color:'red'},
    {cardSuit: 'diamond', value: '9', color:'red'},
    {cardSuit: 'diamond', value: '10', color:'red'},
    {cardSuit: 'diamond', value: 'jack', color:'red'},
    {cardSuit: 'diamond', value: 'queen', color:'red'},
    {cardSuit: 'diamond', value: 'king', color:'red'},
    {cardSuit: 'diamond', value: 'ace', color:'red'},
    {cardSuit: 'heart', value: '6', color:'red'},
    {cardSuit: 'heart', value: '7', color:'red'},
    {cardSuit: 'heart', value: '8', color:'red'},
    {cardSuit: 'heart', value: '9', color:'red'},
    {cardSuit: 'heart', value: '10', color:'red'},
    {cardSuit: 'heart', value: 'jack', color:'red'},
    {cardSuit: 'heart', value: 'queen', color:'red'},
    {cardSuit: 'heart', value: 'king', color:'red'},
    {cardSuit: 'heart', value: 'ace', color:'red'}
];
// - знайти піковий туз
console.log(cards.filter(u => u.cardSuit === 'spade' && u.value === 'ace'));
// - всі шістки
console.log(cards.filter(u => u.value === '6'));
// - всі червоні карти
console.log(cards.filter(u => u.color === 'red'));
// - всі буби
console.log(cards.filter(u => u.cardSuit === 'diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter(u => u.cardSuit==='clubs' && u.value!=='6' && u.value!=='7' && u.value!=='8'));
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce((accum, value) => {
    if (value.cardSuit === 'spade'){
        accum.spades.push(value);
    } else if (value.cardSuit === 'diamond') {
        accum.diamonds.push(value);
    } else if (value.cardSuit === 'heart') {
        accum.hearts.push(value)
    } else if (value.cardSuit === 'clubs') {
        accum.clubs.push(value)
    }
    return accum;
}, {spades:[] ,diamonds:[], hearts:[], clubs:[] });
console.log(reduce.clubs)
console.log(reduce.diamonds)
console.log(reduce.hearts)
console.log(reduce.spades)
// ==================================================================================================================

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass

function objSearch(arr, obj) {
    return arr.filter(u => {
        for (let item of u.modules) {
            if (item === obj) {
                return u;
            }
        }
    });
}
console.log(objSearch(coursesArray, 'sass'))
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(objSearch(coursesArray, 'docker'))
//====================================================================================================================