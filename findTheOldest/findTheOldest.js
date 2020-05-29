let findTheOldest = function (people) {
    people.forEach(e => {
        if (typeof(e.yearOfDeath) === "undefined") {
            e.age = (new Date().getFullYear()) - e.yearOfBirth;
        } else {
            e.age = e.yearOfDeath - e.yearOfBirth;
        }
    });

    let max = people[0].age
    let theOldest = [];

    for (i = 0; i < people.length; i++) {
        let v = people[i].age;
        max = (v > max) ? v : max;
    }
    for (var i = 0; i < people.length; i++) {
        if (people[i].age === max) {
            theOldest =  people[i];
        };
    } 
    return theOldest;
}

module.exports = findTheOldest