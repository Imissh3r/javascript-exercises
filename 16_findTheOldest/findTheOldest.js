const findTheOldest = function (people) {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        const deathYear = person.yearOfDeath || currentYear;
        const age = deathYear - person.yearOfBirth;
        return (age > oldest.age) ? {name: person.name, age: age} : oldest;
    }, {name: "", age: 0});
};

// Do not edit below this line
module.exports = findTheOldest;
