function greeting (user:Person) {
    console.log(user.fullName);
}

class Person {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = `${firstName} ${lastName}`;
    }
}

let user = new Person('DatFirstName', 'DatLastName');

greeting(user);
