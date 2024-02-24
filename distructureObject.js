// const person ={
//     name: 'Hero Aloom',
//     age: 34,
//     phone: '039934924',
//     address: {
//         zilla: 'Dhaka',
//         village: 'karamtola'
//     },
//     p: [1,2,3,4]
// }

// const {phone, address, name:amarNaam} = person
// const {zilla} = address 
// console.log(zilla)
// console.log(person)

const people= {
    naam: 'hero alam',
    age:32,
    phone: '01231415',
    address:{
        zilla:'dhaka'
    },
    p: [1,23,4,5,]
}

// const {naam, ...rest} = people
// console.log(naam,rest)
const {address:{zilla}} =people 

console.log(address)


