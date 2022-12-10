//создание обекта класса
// let car1 = new Car("Мазда", 2000, 5000000)
import {Exam} from "./exam.js"
const main = document.querySelector(".main")
let arrStudents = [
    new Exam("Петя", "Гуль", 2, 3, 2),
    new Exam("Дмитрий", "Кулибин", 5, 5, 5),
    new Exam("Ниниа", "Коршунова", 3, 3, 4),
    new Exam("Роман", "Садыков", 4, 4, 4),
    new Exam("Тимур", "Дуболомов", 2, 4, 5),
]
arrStudents.forEach(item => {
    main.insertAdjacentHTML("beforeend", `<p>${item.toString()}, средний балл - ${item.srBall.toFixed(2) }</p>`)
})
console.log(arrStudents)
arrStudents.sort((item, item2) =>  item2.srBall -item.srBall)
console.log(arrStudents)
main.insertAdjacentHTML("beforeend", `Список группы`)
arrStudents.forEach(item => {
    main.insertAdjacentHTML("beforeend", `<p>${item.toString()}, средний балл - ${item.srBall.toFixed(2) }</p>`)
})
main.insertAdjacentHTML("beforeend", `Список хорошистов группы`)
arrStudents.forEach(item => {
    if(item.xorosh){
        console.log(item.xorosh)
        main.insertAdjacentHTML("beforeend", `<p>${item.xorosh}</p>`)
    }

})
let sumForJs = 0
arrStudents.forEach(item => sumForJs+= item.JSball)
console.log(`средний балл группы по JS - ${sumForJs/arrStudents.length}`)
main.insertAdjacentHTML("beforeend", `<p>средний балл группы по JS - ${sumForJs/arrStudents.length}</p>`)
let sumForBD = 0
arrStudents.forEach(item => sumForBD+= item.BDball)
console.log(`средний балл группы по БД - ${sumForBD/arrStudents.length}`)
main.insertAdjacentHTML("beforeend", `<p>средний балл группы по БД - ${sumForBD/arrStudents.length}`)
let sumForPHP = 0
arrStudents.forEach(item => sumForPHP+= item.PHPball)
console.log(`средний балл группы по PHP - ${sumForPHP/arrStudents.length}`)
main.insertAdjacentHTML("beforeend", `<p>средний балл группы по PHP - ${sumForPHP/arrStudents.length}</p>`)
let countAbs = 0
arrStudents.forEach(item => {
    if(!item.dolg){
        countAbs ++;
    }
})
console.log(`Абсолютная успеваемость группы - ${countAbs/arrStudents.length * 100}%`)
main.insertAdjacentHTML("beforeend", `<p>Абсолютная успеваемость группы - ${countAbs/arrStudents.length * 100}%</p>`)
let countKac = 0
arrStudents.forEach(item => {
    if(item.xorosh){
        countKac ++;
    }
})
console.log(`Качественная успеваемость группы - ${countKac/arrStudents.length * 100}%`)
main.insertAdjacentHTML("beforeend", `<p>Качественная успеваемость группы - ${countKac/arrStudents.length * 100}%</p>`)

let  allSrBall = 0
arrStudents.forEach(item => allSrBall += item.srBall)
console.log(`Средний балл группы по всем предметам - ${(allSrBall/arrStudents.length).toFixed(2) }`)
main.insertAdjacentHTML("beforeend", `<p>Средний балл группы по всем предметам  - ${(allSrBall/arrStudents.length).toFixed(2) }</p>`)