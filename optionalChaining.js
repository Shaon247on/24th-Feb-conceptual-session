const petOwner = {
    name: 'Hero Aloom',
    age: 34,
    phone: '039934924',
    address: {
        zilla: 'Dhaka',
        village: 'karamtola'
    },
    pet: {
        name: 'Lofie',
        info: {
            color: 'black',
            weight: '1.2kg',
            price: 1200
        }
    }
}

console.log(petOwner.pet.info?.food)