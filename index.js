


////////////////////////////////ES6 II

// AUTOMOBILE INHERITANCE MODEL


// Object.create

let Car = {
    wheel:4,
    clutch:true,
    break:true,
}

let a1 = Object.create(Car)
a1.brand = "Innova"
// console.log(a1)



// constructor function
function FourWheeler(){
    this.wheel = 4
    this.clutch = true
    this.break = true
}

let a2 = new FourWheeler()
a2.brand = "Mahindra"
a2.seats = 6
console.log(a2)