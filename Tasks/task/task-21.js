 // 1. get the value of the first element in an array that has value greater than 20
 function myfun(arr){
    for(let i=0; i<arr.length;i++){
        if(arr[i]>20){
            return arr[i]
        }
    }
    return null
}
let array = [30,50,90,80,10,5,3]
let result = myfun(array)
console.log(result)

// 2. get the value of the first element in an array that has value less than 20

function mynum(s){
    if(s.length===0) return null;
    let min = s[0]
    for(let i=1;i<s.length;i++){
        if(s[i]<min){
            min = s[i]
        }
    }
    return min
}
  

let arr1 = [3,20,30,80,90,5,90]
let arr2 = mynum(arr1)
console.log(arr2)

// 3. filter data based on a id(property) in an array of objects: pick any random id value
const users = [
    { id: 1, name: 'divya', age: 23 },
    { id: 2, name: 'venkat', age: 25},
    { id: 3, name: 'jai', age: 21 },
    { id: 4, name: 'chinna', age: 16 },
    { id: 5, name: 'teja', age: 17 }
  ];
const randomId = 3; 
const filteredUsers = users.filter(user => user.id === randomId);
console.log(filteredUsers);
console.log(users)
  
// 4. check element is odd or even in an array [90, 89, 56, 45]

const numbers = [90, 89, 56, 45];

function check(number) {
  return number % 2 === 0 ? 'even' : 'odd';
}
const result1 = numbers.map(number => ({
  number: number,
  type: check(number)
}));
console.log(result1);


// 5. create a class Book: type_of_book(), no. of pages, type of pages, author
class Book {
    constructor(typeOfBook, numberOfPages, typeOfPages, author) {
      this._typeOfBook = typeOfBook;   
      this.numberOfPages = numberOfPages;
      this.typeOfPages = typeOfPages; 
      this.author = author; 
    }

    getTypeOfBook() {
      return this._typeOfBook;
    }
  }
  const myBook = new Book('Fiction', 350, 'Matte', 'J.K. Rowling');
  
  console.log('Type of Book:', myBook.getTypeOfBook());
  console.log('Number of Pages:', myBook.numberOfPages);
  console.log('Type of Pages:', myBook.typeOfPages);
  console.log('Author:', myBook.author);

//   6. create a class Animal: walk(), eat(), climb(), gender, name, disease

class Animal{
    constructor(name,gender,disease){
        this.name = name
        this.gender = gender
        this.disease = disease
    }sss
    walk(){
        console.log(`${this.name} is walking.`)
    }
    eat(){
        console.log(`${this.gender} is gender`)
    }
    climb(){
        console.log(`${this.disease} is disease`)
    }

}
const myanimal = new Animal('lion','male','none')

console.log('Name:',myanimal.name)
console.log('gender:',myanimal.gender)
console.log('disease:',myanimal.disease)

myanimal.walk()
myanimal.eat()
myanimal.climb()