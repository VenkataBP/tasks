// 1. Create parameterized method/function to multiply 3 numbers
function myfun(e,b,c){
    return e*b*c
}
let a = myfun(2,3,5)
console.log(a)

// 2. create parameterized method to divide 2 numbers

function myfun1(a,f){
    return a/f
}
let b = myfun1(10,50)
console.log(b)

function myfun3(){
    document.body.style.backgroundColor = "blue";
}

let index = 0
function myfun5(){
    var x = ["red","blue","green","pink","black"]
    document.getElementsByTagName("body")[0].
    style.backgroundColor= x[index++];

    if(index > x.length - 1)
    index = 0

}