function greeting(user) {
    console.log(user.fullName);
}
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Person;
}());
var user = new Person('DatFirstName', 'DatLastName');
greeting(user);
//# sourceMappingURL=kalacs.js.map