// Part 1: Refactoring Old Code
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let str = "ID,Name,Occupation,Age\\n42,Bruce,Knight,41\\n57,Bob,Fry Cook,19\\n63,Blaine,Quiz Master,58\\n98,Bill,Doctor's Assistant,26";
let commaCount = 1;
let arr = [];
let row = [];
for (char of str) {
    if (commaCount == 4) {
        if (char == "\\") {
            const row = {
                cell1: cell1,
                cell2: cell2,
                cell3: cell3,
                cell4: cell4
            }
            arr.push({ ...row });
        }
        cell4 += char
        if (char == 'n') {
            commaCount = 1;
            cell1 = "";
            cell2 = "";
            cell3 = "";
            cell4 = "";
        }
       
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
for (let i = 0; i < arr.length; i++) {
    console.log(`
        ${arr[i].cell1},  ${arr[i].cell2},  ${arr[i].cell3},  ${arr[i].cell4},
`)
}

// Part 2: Expanding Functionality
for (let char of str) {
    if (char === '\\') {
        
        if (str[str.indexOf(char) + 1] === 'n') {
            row.push(cell4);
            arr.push([...row]);
            row = [];
            cell1 = "";
            cell2 = "";
            cell3 = "";
            cell4 = "";
            commaCount = 1;
            continue;
        }
    } else if (char === ',') {
        commaCount++;
        if (commaCount == 2) {
            row.push(cell1);
            cell1 = "";
        } else if (commaCount == 3) {
            row.push(cell2);
            cell2 = "";
        } else if (commaCount == 4) {
            row.push(cell3);
            cell3 = "";
        }
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
    row.push(cell4);
    arr.push([...row]);
}

console.log(JSON.stringify(arr, null, 2));

// Part 3: Transforming Data