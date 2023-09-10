//Задание 1
//Написать функцию, которая принимает два параметра и складывает их.
//Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
//Примеры результатов вызова функции:
//sum(2,4); // 6
//sum('d',4); // введенные данные не являются числами
//sum(1, [2]); // введенные данные не являются числами
//sum(1); // введите два параметра
//sum(); // введите два параметра

const sum = (a, b) => {
    if(a && b === undefined){
        console.error("Введите два параметра")
    } else if(typeof a !== 'number'){
        console.error("Введение данные не являются числами")
    } else if(typeof b !== 'number'){
        console.error("Введение данные не являются числами")
    } else {
        console.log(a + b);
    }
}

sum(5, 88);


//Задание 3
//Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
//Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
//Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
//Написать функцию в стрелочном синтаксисе.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const guessNumber = (number) => {
    const randomNumber = getRandomInt(1, 10);
    if (number <= 10 && >= 1){
        console.log('Вы выиграли');
    } else {`Вы не угадали, ваше число ${guessNumber}, а выпало число ${number}`}
}
 guessNumber(5)


 //   Задание 4
//Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

 const arr = [22, 4, 5, 7];
 const copyArr = arr.slice();
 console.log(copyArr);


 //Задание 5
//Напишите функцию, которая принимает массив имен и возвращает новый массив, в котором каждое имя будет иметь приставку "Hello, "

const name =[
    {
        usersNames: 'Vasya',
    },
    {
        usersNames: 'Kolya',
    },
    {
        usersNames: 'Kolya',
    }
]
const creatArrayHello = array =  array.map(item) => {
    return('Hello' + name)
}
console.log(creatArrayHello); 

//Задание 6
//Напишите функцию, которая принимает массив объектов пользователей и возвращает новый массив, содержащий только их имена.
const users =[
    {
        usersNames: 'Vasya',
        isAdmin: true
    },
    {
        usersNames: 'Kolya',
        isAdmin: false
    },
    {
        usersNames: 'Kolya',
        isAdmin: false
    }
]
 const createNewArray = array => array.map(item => item.usersNames);
 console.log(createNewArray(users))

//    Задание 7
//Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
//Проверить работу функции можно на объекте:

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

let  sumObjectValues = (objectWithNumbers) => {
    let sumObjectValues = 0;
    for(let key in objectWithNumbers){
        if (typeof objectWithNumbers[key] == 'number'){
            sumObjectValues += objectWithNumbers[key];
        }
    }
    return sumObjectValues;
}
console.log(sumObjectValues(objectWithNumbers));


//Задание 8
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
//Вам понадобятся методы строк.


let ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst('kirill'));


//Задание 9
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру.

const bad1 = 'badWord';
const bad2 = 'XXX';

const checkSpam = string => string.toLowerCase().includes(bad1.toLowerCase()) ? true : false;

checkSpam('Hello');
checkSpam('Hello XXX');
checkSpam('Hello XxX');
checkSpam('Hello badWORD');

