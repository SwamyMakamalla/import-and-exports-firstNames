const peoplesName = require("../country/state/city/index.js");
const firstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (peoplesName) => {
  return firstNames(peoplesName);
};
module.exports = getPeopleInCity;
