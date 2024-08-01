// 2. find the duplicate in a string() (use array) - optional
function Duplicates(str) {
    let charArray = str.split('');
    let charCount = {};
    let duplicates = [];
    for (let char of charArray) {
        if (charCount[char]) {
            if (!duplicates.includes(char)) {
                duplicates.push(char);
            }
        } else {
            charCount[char] = 1;
        }
    }

    return duplicates;
}

let str = "programming special";
let Chars = Duplicates(str);
let duplicateChars = Duplicates(str);
console.log(duplicateChars); 

// 3. reverse a string (use array method)

let a =[1,2,3,4,5]
console.log(a.reverse())

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

let arr = [1, 2, 3, 4, 5];
let reversedArr = reverseArray(arr);
console.log(reversedArr); 
console.log(arr);

// 4. find the highest and lowest value in array
let arr3 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

let max = arr.reduce((a, b) => Math.max(a, b));
let min = arr.reduce((a, b) => Math.min(a, b));

console.log(`Highest value: ${max}`);
console.log(`Lowest value: ${min}`);  

// sorting of an array - optional
let a1 = "divya";
let a2 = a1.split('').sort().join('');
console.log(a2); 

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); 

let fruit = ["banana", "apple", "cherry", "date"];
fruit.sort();
console.log(fruit);

let arr2 = ["divya","jai","nikitha","teja"]
let a12 = document.getElementById('her').innerHTML= arr2.slice(0,3)
console.log(a12)


// 7. remove 4th (index) element and add 2 element there

let ind = ["apple","banana","berry","cherry","papaya"]
console.log(ind)
console.log(ind.splice(4,1,"pineapple"))