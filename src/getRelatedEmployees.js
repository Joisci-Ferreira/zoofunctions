const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.some((name) => name === id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const gerente = employees
    .filter((employee) => employee.managers[0] === managerId || employee.managers[1] === managerId);
  const newGerente = gerente.map((employee) => `${employee.firstName} ${employee.lastName}`);
  if (isManager(managerId) === true) {
    return newGerente;
  }
}

module.exports = { isManager, getRelatedEmployees };
