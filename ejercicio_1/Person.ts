class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return 'My name is: ' + this.name + " and my age is: " + this.age;
    }
}

let people: Person[] = [];

document.addEventListener("DOMContentLoaded", function (event) {
    let form: HTMLFormElement = (<HTMLFormElement>document.getElementById('my-form'));
    if (form != null) {
        form.onsubmit = (event: any) => {
            let nameField: string = (<HTMLInputElement>document.getElementById('name')).value;
            let age: number = +(<HTMLInputElement>document.getElementById('age')).value;
            if (nameField.length!=0 && age !=0) {
                if (!isNaN(age)) {
                    var person: Person = new Person(nameField, age);
                    people.push(person);
                }
            }
            return false;
        }
    }



    let printButton = (<HTMLElement>document.getElementById('print'));
    printButton.addEventListener("click", printAllPeople, false);
    function printAllPeople() {
        people.forEach(person => {
            console.log(person.greet());
        });
    }
});








