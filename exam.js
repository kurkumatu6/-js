export class Exam {
    constructor(name, surname, BDball, JSball, PHPball){
        this.name = name;
        this.surname = surname;
        this.BDball =BDball;
        this.JSball = JSball;
        this.PHPball = PHPball;
    }
    toString (){
        return `Фаимлмия - ${this.surname}, Имя - ${this.name}, Оценка по БД - ${this.BDball}, оценка по JS - ${this.JSball}, оценка по PHP -${this.PHPball}`
    }
    get srBall (){
        return (this.BDball+this.JSball+this.PHPball)/3
    }
    get xorosh (){
        if(this.BDball>=4 && this.JSball>=4 && this.PHPball >= 4 ){
            return `${this.surname} ${this.name} - хорошист`
        }
        else {
            return false
        }
    }
    get dolg (){
        if(this.BDball <= 2 || this.JSball <=2 || this.PHPball <= 2){
            return `${this.name} - должник`
        }
        else {
            return false
        }
    }
}