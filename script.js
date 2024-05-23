// Part 1: Refactoring Old Code
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
let charLength = str.length
let commaCount = 1;
let arr = [];


for (char of str) {
    if (commaCount == 4) {
        if (char == "\n") {
            const row = {
                cell1: cell1,
                cell2: cell2,
                cell3: cell3,
                cell4: cell4
            }
            arr.push({ ...row });
            commaCount = 1;
            cell1 = "";
            cell2 = "";
            cell3 = "";
            cell4 = "";
        }
        cell4 += char

    } else {
        if (char == ',')
            commaCount++
        else {
            if (commaCount == 1)
                cell1 += char
            if (commaCount == 2)
                cell2 += char
            if (commaCount == 3)
                cell3 += char
        }
    }
    charLength--
};
// console.log(arr)


// Part 2: Expanding Functionality
let row3 = [];
let arr2 = []
for (let char of str) {
    if (char == '\n') {
        row3.push(cell4);
        arr2.push([...row3]);
        row3 = [];
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
        commaCount = 1;


    } else if (char == ',') {
        if (commaCount == 1) {
            row3.push(cell1);
            cell1 = "";
        } else if (commaCount == 2) {
            row3.push(cell2);
            cell2 = "";
        } else if (commaCount == 3) {
            row3.push(cell3);
            cell3 = "";
        }
        commaCount++;
    } else {
        if (commaCount == 1) {
            cell1 += char;
        } else if (commaCount == 2) {
            cell2 += char;
        } else if (commaCount == 3) {
            cell3 += char;
        } else if (commaCount == 4) {
            cell4 += char;
        }
    }
}

if (cell1 || cell2 || cell3 || cell4) {
    row3.push(cell4);
    arr2.push([...row3]);
}

// console.log(arr2)

// Part 3: Transforming Data

let id = "";
let names = "";
let occupation = "";
let age = "";
let commaCount3 = 1;
let arr3 = [];

for (let i = 0; i < str.length; i++) {
    let char = str[i]


    if (char == '\n') {
        const row2 = {
            id: id,
            name: names,
            occupation: occupation,
            age: age
        }
        arr3.push(row2);

        id = ""
        names = "";
        occupation = "";
        age = "";
        commaCount3 = 1;

    } else if (char === ',') {
        commaCount3++;
    } else {
        if (commaCount3 == 1) {
            id += char;
        } else if (commaCount3 == 2) {
            names += char;
        } else if (commaCount3 == 3) {
            occupation += char;
        } else if (commaCount3 == 4) {
            age += char;
        }
    }

}

if (id || names || occupation || age) {
    const row2 = {
        id: id,
        name: names,
        occupation: occupation,
        age: age
    }
    arr3.push(row2)
}

// console.log(arr3)
// for (let i = 0; i < arr3.length; i++) {
//     console.log(` 
//         id: "${arr3[i].id}", name: "${arr3[i].name}", occupation: "${arr3[i].occupation}", age: "${arr3[i].age}"
//     `);
// }

// Part 4: Sorting and Manipulating Data
// Remove the last element from the sorted array.
const sortedArr3 = arr3.sort(function (a, b) { return a.id - b.id });
// console.log(sortedArr3)

// Insert the following object at index 1:
const newObj = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
sortedArr3.splice(2, 0, newObj);
// Add the following object to the end of the array
sortedArr3.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
// console.log(sortedArr3)

// calculate the average age of the group.

let charLength2 = sortedArr3.length
let avgAge = 0
let ages = 0

for (let i = 1; i < sortedArr3.length; i++) {
    let age = Number(sortedArr3[i].age)
    ages += age
}
avgAge = ages / charLength2
// console.log(avgAge)


// Part 5: Full Circle
// transform the final set of data back into CSV format.

const csvRows = [];
const headers = Object.keys(sortedArr3[0])
for (const row of sortedArr3) {
    const vals = headers.map(header => {
        const val = row[header]
        return `"${val}"`
    })
    // To add, separator between each value
    csvRows.push(vals.join(','));
}
// console.log(csvRows)

