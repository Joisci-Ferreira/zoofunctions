const { employees, species } = require('../data/zoo_data');

function findWorker(id) {
  return employees.find((employee) => employee.id === id
    || employee.firstName === id
    || employee.lastName === id);
}

const getSpeciesLocations = (specieIds) => specieIds.reduce((acc, specieId) => {
  acc.push(species.find((animal) => animal.id === specieId).location);

  return acc;
}, []);

const employeeInfo = ({ id, firstName, lastName, respponsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: getSpeciesLocations(respponsibleFor),
  locations: getSpeciesLocations(respponsibleFor),
});

function getEmployeesCoverage(idOrName = null) {
  if (!idOrName) {
    return employees.reduce((acc, employee) => {
      acc.push(employeeInfo(employee));

      return acc;
    }, []);
  }

  const worker = findWorker(idOrName[Object.keys(idOrName)[0]]);

  if (!worker) throw new Error('Informações inválidas');
  return employeeInfo(worker);
}

module.exports = getEmployeesCoverage;
