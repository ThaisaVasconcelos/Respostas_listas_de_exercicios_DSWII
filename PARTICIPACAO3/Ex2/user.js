class User {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printName() {
        console.log(this.name);
    }

    printAge() {
        console.log(this.age);
    }
}

function printName(user) {
    console.log(`User's name is ${user.name}`);
}

function printAge(user) {
    console.log(`User's age is ${user.age}`);
}

const user1 = new User('Teste', 10);
printName(user1);
printAge(user1);

module.exports ={
    User,
    printName,
    printAge
};