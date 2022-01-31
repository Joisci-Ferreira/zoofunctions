const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getSpecie = employees.find((employee) => employee.id === id).responsibleFor;
  return species.find((specie) => specie.id === getSpecie[0]).residents
    .reduce((acc, animal) => {
      const obj = Object.values(animal);
      return acc[2] > obj[2] ? acc : obj;
    }, []);
}

module.exports = getOldestFromFirstSpecies;
