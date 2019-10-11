var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var people = [];
var form = document.getElementById('my-form');
form.onsubmit = function () {
    var nameField = document.getElementById('name');
    var ageField = document.getElementById('age');
    var nameFieldValue = nameField.value;
    var ageFieldValue = +ageField.value;
    if (nameFieldValue.length != 0 && ageFieldValue != 0) {
        if (!isNaN(ageFieldValue)) {
            var person = new Person(nameFieldValue, ageFieldValue);
            people.push(person);
        }
        nameField.value = '';
        ageField.value = '';
    }
    return false;
};
var printButton = document.getElementById('print');
printButton.onclick = function () {
    if (people != null) {
        var table = document.getElementById('table');
        var tbody_table = table.tBodies[0];
        ;
        tbody_table.innerHTML = '';
        for (var i = 0; i < people.length; i++) {
            var row = tbody_table.insertRow();
            var index = row.insertCell(0);
            var name_1 = row.insertCell(1);
            var age = row.insertCell(2);
            index.innerHTML = i.toString();
            name_1.innerHTML = people[i].name;
            age.innerHTML = people[i].age.toString();
        }
    }
};
