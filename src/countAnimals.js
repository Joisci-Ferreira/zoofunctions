const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const result = {};
    species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }

  const animals = species.find((specie) => specie.name === animal.specie).residents;

  return ('sex' in animal)
    ? animals.filter((resident) => resident.sex === animal.sex).length
    : animals.length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
