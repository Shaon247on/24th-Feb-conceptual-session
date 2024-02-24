const person = {
    name: 'Hero Aloom',
    age: 34,
    phone: '039934924',
    address: {
        zilla: 'Dhaka',
        village: 'karamtola'
    },
    p: [1, 2, 3, 4],
    education: {
        chsoolName: 'haraz ali high School',
        subjects: [
            {name:'bangla', mark: 45},
            {name:'english', mark: 55},
            {name:'math', mark: 75}
        ]
    }
}


console.log(person.education.subjects[1].mark)
