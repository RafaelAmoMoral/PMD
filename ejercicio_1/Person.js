"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return 'My name is: ' + this.name + " and my age is: " + this.age;
    };
    return Person;
}());
var people = [];
document.addEventListener("DOMContentLoaded", function (event) {
    var form = document.getElementById('my-form');
    if (form != null) {
        form.onsubmit = function (event) {
            var nameField = document.getElementById('name').value;
            var age = +document.getElementById('age').value;
            if (nameField.length != 0 && age != 0) {
                if (!isNaN(age)) {
                    var person = new Person(nameField, age);
                    people.push(person);
                }
            }
            return false;
        };
    }
    var printButton = document.getElementById('print');
    printButton.addEventListener("click", printAllPeople, false);
    function printAllPeople() {
        people.forEach(function (person) {
            console.log(person.greet());
        });
    }
});
