// 1. create an object for animal, car.
let animal ={
    name:"tiger",
    age:"10",
    species:"african tiger",
    roar:function(){
        console.log(roar)
    }
}
console.log(animal)
console.log(this.name)
console.log(animal.species)

// 2)
let anima12={
    name:"lion",
    age:"15",
    species:"pantharon leo",
    head:()=>{
        a="cow"
        console.log(a)
    }

}
console.log(anima12)
console.log(anima12.name)
console.log(anima12.head)

// cars
let cars = {
    name:"bmw",
    model:"latest",
    year:"2024",
    serviceno:"35235",
    car:function(){
        console.log("car will start")
    }
}
console.log(cars.name)
console.log(cars.car)

let cars1={
    name:"rolls royce",
    model:"new latest",
    year:"2024",
    serviceno:"534568",
    car1:()=>{
        console.log("started")
    }
}
console.log(cars1.model)
console.log(cars1.car1)
