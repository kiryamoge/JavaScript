//Задание 2
//Дан объект с именами и заработными платами:
//const engineers = {
//Den: 1000,
//Matt: 5000,
//Steve: 2000
//}
//Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
//Заработная плата ххх составляет ххх рублей.

const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
    }
    for (let property in engineers){
        console.log(`Заработная плата ${property} составляет ${engineers[property]}`);
    }


//    Задание 5
//Дан массив объектов, например:
//let questions = [{
 //   question: "What's the currency of the USA?",
 //   choices: ["US dollar", "Ruble", "Horses", "Gold"],
  //  corAnswer: 0
//}, {
 //   question: "Where was the American Declaration of Independence signed?",
 //   choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
 //   corAnswer: 0
//}];
//Добавить в каждый объект дополнительное поле usersAnswer со значением null.
//Решение должно работать для массива любой длины.

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

for ( let i = 0; i < questions.length; i++){
   questions[i].usersAnswer = null; 
    console.log(questions);
}


//Задание 9
//Существует массив объектов, описывающих пользователей, например:
//const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
//Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.

const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]
    function nameAge(users, Age) {
        let result = [];
        for (let key in users){
            if (users[key].age > Age){
                result.push(users[key].name);  
            }        
        }
        return result;
    }
    console.log(nameAge(users, 15).join(' '));


 //   Задание 10
 //   Задать массив слов. Например:
  //  let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
 //   1) Создать новый массив. С помощью цикла наполнить его объектами с ключами word (само слово), length (длина слова): 
  //  [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.] 
  //  Вывести этот массив в консоль. 
  //  Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов) 
  //  2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let newVegetables = [];
for( let i = 0; i < vegetables; i++){  // Не получилось найти способ решения

}