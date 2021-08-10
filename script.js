//пример THIS

// const obj ={
//     x: 10,
//     y: 30,
//     perimeter: function (){
//         return (this.x + this.y) * 2
//     }
// }
//
// console.log(obj.perimeter())
//
// const object = {
//     value: "42",
//     print: function (){
//         const type = () => {
//             return typeof this.value
//         }
//         console.log(`${this.value} is ${type()}`)
//     }
// }
// console.log(object.print())

// const obj = {
//     bar: 1,
//     foo: function (){
//         return this.bar
//     }
// }
//
// console.log(obj.foo()) // здесь 1
// const _foo = obj.foo
// console.log(_foo()) /// undefined потому что там не чего нет

//не замыкание пример
// function foo() {
//     let x = 0
//     x++
//     return x
// }
//
// console.log(foo())
// console.log(foo())
// console.log(foo())

//замыкание пример

// function  foo() {
//     let x = 0
//     return function () {
//         x++
//         return x
//     }
// }
//
// const example = foo()
//
// console.log(example())
// console.log(example())
// console.log(example())
// console.log(example())

//Каррирование

// function sum(a){
//     return function (b){
//         return function (c){
//             return a + b + c
//         }
//     }
// }


// const sum = a => b => c => a + b + c // короткый вариант
// const  curryingSum = sum(10)
// console.log(curryingSum(20)(30))
// console.log(curryingSum(40)(30))

// const multiplyAll = arr => n =>  arr.map(item => item * n)
//
// console.log(multiplyAll([1, 2, 3])(2))


// const sum = (a, b) => {
//     return b === undefined ? (b) => a + b : a + b
// }
//
// const onePlusN = sum(1)
// console.log(onePlusN(5))
//
// console.log(sum(1)(2))
// console.log(sum(1,2))


// fun ([1,3,'5',4])('number') // [1,3,4]
// const sum = (arr) => n => arr.filter(item => typeof item === n )
//
// console.log(sum([1,3,'5',4])('number'))


//Promise

// new Promise ((resolve, reject) =>{
//
//     setTimeout(() =>{
//         resolve(a = 10)
//     }, 4000)
//
// }).then((result) => console.log(result))
//     .catch(() => console.log("ОШИБКА!"))

// fetch("https://jsonplaceholder.typicode.com/users")// fethc("ссылка") - это метот открывает запрос от бекенда
// .then((result) => result.json()) // json() - это obj с ключами и значением
// .then((data) => console.log(data))

// const cat = document.querySelector(".cat")
// const btn = document.querySelector(".btn")
//
// btn.addEventListener("click", () =>{
//     fetch("https://api.thecatapi.com/v1/images/search")
//         .then((result) => result.json())
//         .then((data) => cat.src = data[0].url)
// })
//
// fetch("https://api.thecatapi.com/v1/breeds")
//     .then(res => res.json())
//     .then(data => console.log(data.map(item => item.name)))


//При каждом обновлении страницы выводить случайное изоброжение
//собаки породы boxer
// const dog = document.querySelector(".dog")
// const btn = document.querySelector(".btn")
//
// btn.addEventListener("click", () =>{
//
//     fetch("https://dog.ceo/api/breed/boxer/images/random")
//         .then(res => res.json())
//         .then(data => dog.src = data.message)
//
// })
// let api_key = "c3917f596cccebe083f27f5a4c8b1c37"
// let city = "Dubai"
//  fetch(`https://api.openweathermap.org/data/2.5/weater?q=${city}&appid=${api_key}&units=metric`)
//      .then(res => res.json())
//      .then(data => console.log(data.main.temp))


//-------------code-wars----------//

//task1
// [ '1: a', '2: b', '3: c' ]
// const number = function (array) {
//     return array.map((item, idx) => `${idx + 1}: ${item}`)
// }
//
// console.log(number(["a", "b", "c"]))

//task2
//[ 0, 3, 4, 6 ]
//через цикл
// let capitals = function (word) {
//     let result = [];
//     for(let i = 0; i < word.length; i++) {
//         if(word[i] === word[i].toUpperCase() ){
//             // result.push(i)
//             result = [...result, i]
//         };
//     }
//     return result
// };

// let capitals = function (word) {
//     return word.split('').reduce((acc, item, ind) => {
//     if(  item.toUpperCase() === item){
//         return [...acc, ind]
//     }return acc
//     }, [])
// };

// console.log(capitals('CodEWaRs'))

//task3 //5
// function unusualFive() {
//     str = 'кашык'
//     return str.length
// }
//
// console.log(unusualFive())

//task4
// function sortByLength(array) {
//     return array.sort((a, b) => a.length - b.length)
// };
//
// console.log(sortByLength(["Beg", "Life", "I", "To"]))

//task5