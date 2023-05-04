"use strict";
let age = 20;
console.log("hello");
if (age < 50)
    age += 10;
console.log(age);
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
let data = ["Shameel", "Usama", "AbdulRehman"];
console.log(data);
let user = ["Ali", 2, true];
console.log(user);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Small;
console.log(mySize);
function calculateTax(income) {
    if (income < 5000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(1000);
let employee = {
    id: 1,
    name: 'Shameel',
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
//# sourceMappingURL=index.js.map