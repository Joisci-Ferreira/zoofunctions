const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animalsLocation(locations) {
  const animalsPerLocation = {};
  locations.forEach((location) => {
    const animals = species
      .filter((animal) => animal.location === location)
      .map((animal) => animal.name);
    if (animals.length !== 0) animalsPerLocation[location] = animals;
  });
  return animalsPerLocation;
}
function animalsRecupere(locations, sorted, sex) {
  const animalsLocationName = {};
  locations.forEach((location) => {
    const animals = species
      .filter((animal) => animal.location === location).map((animal) => {
        const nameKey = animal.name;
        const nameValues = animal.residents.filter((resident) => {
          const sexo = sex !== undefined;
          return sexo ? resident.sex === sex : true;
        })
          .map((resident) => resident.name);
        if (sorted) nameValues.sort();
        return {
          [nameKey]: nameValues,
        };
      });
    animalsLocationName[location] = animals;
  });
  return animalsLocationName;
}
function getAnimalMap(options) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  if (!options) return animalsLocation(locations);
  const {
    includeNames,
    sorted,
    sex,
  } = options;
  if (!includeNames) return animalsLocation(locations);
  return animalsRecupere(locations, sorted, sex);
}

module.exports = getAnimalMap;
