const findTheOldest = function(people) {
  return people.reduce((oldest_person,current_person)=>{
    function getAge(person){
      return !('yearOfDeath' in person) ?
        (new Date).getFullYear() - person.yearOfBirth : 
        person.yearOfDeath-person.yearOfBirth;
    }
    let oldest_age = getAge(oldest_person)
    let curr_age = getAge(current_person)

    return oldest_age < curr_age ? current_person : oldest_person;
  },{yearOfBirth:0, yearOfDeath:0})
};

// Do not edit below this line
module.exports = findTheOldest;
