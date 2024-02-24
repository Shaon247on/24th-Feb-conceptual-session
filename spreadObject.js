const person ={
    name: 'Hero Aloom',
    age: 34,
    phone: '039934924',
    address: 'Bari nai',
    p: [1,2,3,4]
}

const person1 = {...person}
person1.email = 'hello@gmail.com'
console.log(person)
console.log(person1)

