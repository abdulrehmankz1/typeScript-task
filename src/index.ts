let age: number = 20;
console.log("hello")
if (age < 50)
    age += 10;
console.log(age)
let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;
let level;

// function render(document){
//     console.log(document)
// }

// array
let studentsData: string[] = ["Shameel", "Usama", "AbdulRehman"]
console.log(studentsData)

// tuples
let user: [string, number, boolean] = ["Ali", 2, true]
console.log(user);

// enum
enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Small;
console.log(mySize);

// function
function calculateTax(income: number): number {
    if (income < 5000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(1000);

// object with function and aliases 
type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}
let employee: Employee = {
    id: 1,
    name: 'Shameel',
    retire: (date: Date) => {
        console.log(date)
    }
};
console.log(employee);

// union type
let data: string | number | boolean = "AbdulRehman";
data = 2023;
data = true;
console.log(data);