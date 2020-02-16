const { ASCENDING_ORDER, DESCENDING_ORDER } = require("../utils/constants");

function sortArray(array = [], sortOrder = ASCENDING_ORDER) {
  if (ASCENDING_ORDER === sortOrder) {
    return array.sort((valA, valB) => valA - valB);
  } else if (DESCENDING_ORDER === sortOrder) {
    return array.sort((valA, valB) => valB - valA);
  }

  return array;
}

module.exports = {
  sortArray
};
