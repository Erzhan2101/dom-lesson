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


//===========================Promise

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
//

// fetch("https://dog.ceo/api/breed/retriever-golden/images/random/3")
//     .then(res => res.json())
//     .then(data => console.log(data))


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

//=================================================================
//dog
// const inputAni = document.querySelector(".input-ani")
// const btn = document.querySelector(".btn")
// const dog = document.querySelector(".dog")
// const notFount = "https://media3.giphy.com/media/8L0Pky6C83SzkzU55a/200.gif"
//
// btn.addEventListener("click", () => {
//
//     let id = inputAni.value
//
//     fetch(`https://dog.ceo/api/breed/${id}/images/random`)
//         .then(res => res.json())
//         .then(data => {
//             if(data.code === 404){
//                 dog.src = notFount
//             }else {
//                 dog.src = data.message
//             }
//         })
// })

// fetch("https://swapi.dev/api/people/")
// .then(res => res.json())
// .then(data => {
//     console.log(data.results.map(el => el.name))
// })

// const cityInput = document.querySelector(".city")
// const btnClick = document.querySelector(".btn-click")
// const min = document.querySelector(".min")
// const max = document.querySelector(".max")
//
// btnClick.addEventListener("click", () => {
//     let City = cityInput.value
//     const api_key = "ce459d7581e7705c7010f6ab2baba1a3"
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${api_key}&units=metric`)
//         .then(res => res.json())
//         .then(data => {
//             min.textContent = `Min.temp: ${data.main.temp}`
//             max.textContent = `Max.temp: ${data.main.temp_max}`
//         })
// })

//Victoria, Puerto Rico
// function getFirstPython(list) {
//     let result = list.find(el => el.language === 'Python')
//     return result ? `${result.firstName}, ${result.country}` : 'There will be no Python developers'
// }
//
// console.log(getFirstPython([
//     {firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript'},
//     {firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python'},
//     {firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure'}
// ]))


// function findSenior(list) {
//     let a = list.map(el => el.age)
//     let maxAge = Math.max(...a)
//     return list.filter(el => el.age === maxAge)
// }
//
// console.log(findSenior([
//     {firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP'},
//     {firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python'},
//     {firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python'},
//     {firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP'},
// ]))

// function findUniq(arr) {
//     return arr.find(item => {
//        return  arr.indexOf(item) === arr.lastIndexOf(item)
//     })
// }
//
// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
// console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))

//3
// function persistence(num) {
//     let counter = 0
//     while (num >= 10) {
//       num = num.toString().split("").reduce((acc, item) => {
//             return item * acc
//         }, 1)
//         counter++
//     }
//     return counter
// }
//
// console.log(persistence(39))

//валюта
// const inputSom = document.querySelector(".input-som")
// const valuteList = document.querySelector(".valute-list")
// const  btn = document.querySelector(".btn")
// const inputResult = document.querySelector(".input-result")
// const sumbol = document.querySelector(".sumbol")
//
// btn.addEventListener("click", () =>{
//     const valute = valuteList.value
//     fetch("https://api.exchangerate.host/latest?base=KGS")
//         .then(res => res.json())
//         .then(data => {
//             inputResult.value = (inputSom.value * data.rates[valute]).toFixed(2)
//         })
//     if(valuteList.value === "USD"){
//         sumbol.innerHTML = "$"
//     }else if(valuteList.value === "EUR"){
//         sumbol.innerHTML = "€"
//     }else if (valuteList.value === "RUB"){
//         sumbol.innerHTML = "₽"
//     }
// })

//country
// const row = document.querySelector(".row")
// fetch("https://restcountries.eu/rest/v2/all")
//     .then(res => res.json())
//     .then(data =>
//         row.innerHTML += data.map(el => `<div class="box container"><div class="col-4"><img src="${el.flag}"></div>
//      <p>Name: ${el.name}</p>
//      <p>Capital: ${el.capital}</p>
//      <p>Region: ${el.region}</p>
//      <p>Subregion: ${el.subregion}</p>
//      </div>`)
//     )

//============= code-wars ===========//

// function bump(x) {
//     return x.split("").filter(item => item === "n").length <= 15
//     ? "Woohoo!" : "Car Dead"
// }
//
// console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))

// function disemvowel(str) {
//     return str.split("").map(el => el.replace(/i/g, "")).join('')
//
// }
//
// console.log(disemvowel("This website is for losers LOL!"))


// function switcheroo(x) {
//     return x.split("").map(el => {
//         if (el === "a") {
//             return "b"
//         } else if (el === "b") {
//             return "a"
//         }
//         return "c"
//     }).join("")
// }
//
// console.log(switcheroo("aaabcccbaaa"))

//================= code-wars ==============//
//task --- Remove duplicate words ['alpha beta gamma delta']

// function removeDuplicateWords (s) {
//     return s.split(" ").filter((item, ind, arr) => ind === arr.indexOf(item) ).join(" ")
// }
//
// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

// task -- Generate range of integer
// function generateRange(min, max, step){
// let array = []
//     for (let i = min; i <= max; i += step){
//         array.push(i)
//     }
//     return array
// }
//
// console.log(generateRange(2, 10, 2))

// task -- Last Survivor
// function lastSurvivor(letters, coords) {
// let arr = letters.split('')
//     for (let i = 0; i < coords.length; i++){
//         arr.splice(coords[i], 1)
//     }
//     return arr.join('')
// }
//
// // hi insts: erjan2101
//
// console.log(lastSurvivor('hgf', [0, 1]))


//========= hw-ATM =====//

function atm(sum) {
    const atmBanknotes = [100, 50, 25, 5, 1];
    const result = [];
        for (let i = 0; i < atmBanknotes.length; i++) {
            while (sum - atmBanknotes[i] >= 0) {
                sum -= atmBanknotes[i]
                result.push(atmBanknotes[i])
            }
    }
    return result
}

console.log(atm(357))
//
//

//------------ lesson 16.08.21 --------//

// const axios = require('axios')
//
// const getUserPerson = async () =>{
//     const {data:users} = await axios('https://jsonplaceholder.typicode.com/users')
//     const {data:posts} = await axios('https://jsonplaceholder.typicode.com/posts')
//     const userPost = users.map(async (user) => {
//         user.posts = JSON.stringify(posts.filter(post => post.userId === user.id))
//         return user
//         })
//     console.log(userPost)
// }
//
// getUserPerson()

