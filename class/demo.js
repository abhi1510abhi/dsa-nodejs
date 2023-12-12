class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printName() {
        console.log(`my name is ${this.name} and age is ${this.age}`)
    }
    
}

class Hobbies extends Person{
    constructor(name,age,hobbies) {
        super(name,age)
        this.hobbies = hobbies
    }
 

    detail() {
        console.log("name", this.name)
        console.log("age",this.age)
        console.log("hobbies",this.hobbies)
    }
}


let p = new Person("abhijeet", 27)
p.printName()

let hobby = new Hobbies("mishra",26,"coding")
hobby.detail()