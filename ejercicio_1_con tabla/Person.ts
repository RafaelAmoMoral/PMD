class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let people: Person[] = [];

let form: HTMLFormElement = (<HTMLFormElement>document.getElementById('my-form'));
form.onsubmit = () => {
    let nameField: HTMLInputElement = (<HTMLInputElement>document.getElementById('name'));
    let ageField: HTMLInputElement = (<HTMLInputElement>document.getElementById('age'));
    let nameFieldValue: string = nameField.value;
    let ageFieldValue: number = +ageField.value;
    if (nameFieldValue.length != 0 && ageFieldValue != 0) {
        if (!isNaN(ageFieldValue)) {
            var person: Person = new Person(nameFieldValue, ageFieldValue);
            people.push(person);
        }
        nameField.value = '';
        ageField.value = '';
    }
    return false;
}


let printButton: HTMLElement = (<HTMLElement>document.getElementById('print'));
printButton.onclick = () => {
    if (people != null) {
        let table: HTMLTableElement = <HTMLTableElement>document.getElementById('table');
        let tbody_table: HTMLTableSectionElement = <HTMLTableSectionElement>table.tBodies[0];;
        tbody_table.innerHTML = '';
        for (let i = 0; i < people.length; i++) {
            let row = tbody_table.insertRow();
            let index = row.insertCell(0);
            let name = row.insertCell(1);
            let age = row.insertCell(2);
            index.innerHTML = i.toString();
            name.innerHTML = people[i].name;
            age.innerHTML = people[i].age.toString();
        }
    }
}
