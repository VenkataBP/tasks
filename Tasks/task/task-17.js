// 1. display even numbers upto n number (ask user for number)
let number = prompt("Enter a number:");
number = Number(number);
if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is not an even number.`);
}

// 2. ask user for the input, whether char is vwerowel or consonant

let letter = prompt("enter asingle character:")
letter = letter.toLowerCase();
let word = ["a","e","i","o","u"]
if(word.includes(letter)){
    console.log(`${letter} is a vowel.`);
}else if (letter.length === 1 && letter.match(/[a-z]/i)) {
    console.log(`${letter} is a constant.`)
} else{
    console.log("invalid input.please enter a valid input")
}

// 3. count of even and odd number from 1 to 999

let n = 0
let n1 = 0
for(let i=0; i<=999;i++){
    if(i%2==0){
        console.log(`${i} is a even number`)
        n++
    } else{
        console.log(`${i} is a odd number`)
        n1++
    }
}
(console.log(`${n} is the even number`))
(console.log(`${n1} is the odd number`))

// 4. count occurrence of a particular character in a string (hello: count of l is 2):
// loops

let str= prompt("enter a string")
let starcount=prompt("enter a letter")
let count = 0
for(let i=0;i<str.length;i++){
    if(str[i] === starcount)
        count++;
}
console.log(`The character '${starcount}' occurs ${count} times in the string "${str}".`)

// 5. sum and average of array elements [1, 9, 8];
let arr = [1,9,8]
let sum = 0;
let average = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
average = sum / arr.length;
console.log(`Sum of array elements: ${sum}`);
console.log(`Average of array elements: ${average}`);

// 6. largest number in an array (do with loops)
let lar = [1,8,30,40,90]
let larg = lar[0]
let i = 1
do{
    if (lar[i]>larg){
        larg = lar[i]
}
i++;
} while(i < lar.length);
console.log(`The largest number in an array ${larg}`)



