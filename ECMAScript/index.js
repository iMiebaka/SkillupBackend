
// Maps
let person = new Map()
person.set("gender", "Male")
person.set("age", 20)
person.get("age")

let cars = new Map([
    [1, 2, 3]
])

// Set
let books = new Set()

books.add("Javascript for newbies")
books.add("Introduction to C++")
books.size()
books.has("Javascript for newbies")
books.add("Javascript for newbies") // This will not work


// Symbols
const id = Symbol()

const obj = {
    one: 1,
    two: 2,
}

obj[id] = 21

console.log(obj); // show object
console.log(obj[id]); // access object id


// Spread Operator
const num1 = [1, 2, 3]
const num2 = [...num1, 4, 5, 6]



// Destructing
person.set("age", 20)
const [a1, a2] = [[1, 2, 3], [4, 5, 6]]



// for/of
for (const iterator of person.values()) {
    console.log(iterator);
}
for (const iterator of person.entries()) {
    console.log(iterator);
}

// Generator
function* car(){
    yield "Open hood"
    yield "Open check oil"
    yield "Close hood"
    yield "Start Engine"
    yield "Move Vechile"
}

car().next()
car().next()
car().next()
car().next()
car().next()
car().next() //{value: undefined, done: true}