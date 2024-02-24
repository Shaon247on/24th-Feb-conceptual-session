//forEach, map, find, filter, reduce

const numbers = [10, 20, 30, 40, 50];
console.log('main', numbers)

//forEach
const forEach = numbers.forEach(item => item * 2)
console.log('forEach', forEach)

// map
const map = numbers.map(item => item * 2)
console.log('map', map)

//find
const found = numbers.find(a => a > 20)
console.log('found', found)

//filter
const filter = numbers.filter(a => a % 2 === 0)
console.log('filter', filter)

//reduce
const nums = [1,2,3,4,5]

const reduce = nums.reduce((acu, current)=> acu+current,0)
console.log('reduce',reduce)