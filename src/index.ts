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
let data: string[] = ["Shameel", "Usama", "AbdulRehman"]
console.log(data)

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
