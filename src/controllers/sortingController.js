const { readFileContent } = require("../utils/fileUtil");
const { sortArray } = require("../service/sortingService");
const { ASCENDING_ORDER, DESCENDING_ORDER } = require("../utils/constants");

async function ascending(req, res, next) {
  let ascendingArray = [];

  await readFileContent().then(data => {
    const splittedArrays = data.split("\n");
    for (let i = 0; i < splittedArrays.length; i++) {
      ascendingArray.push(
        sortArray(splittedArrays[i].split(","), ASCENDING_ORDER)
      );
    }

    return res.status(200).json({
      message: "The array values have been successfully re-ordered ascending",
      asc: ascendingArray
    });
  });
}

async function descending(req, res, next) {
  let descendingArray = [];

  await readFileContent().then(data => {
    const splittedArrays = data.split("\n");
    for (let i = 0; i < splittedArrays.length; i++) {
      descendingArray.push(
        sortArray(splittedArrays[i].split(","), DESCENDING_ORDER)
      );
    }

    return res.status(200).json({
      message: "The array values have been successfully re-ordered descending",
      des: descendingArray
    });
  });
}

async function mixed(req, res, next) {
  let mixedArray = [];

  await readFileContent().then(data => {
    const splittedArrays = data.split("\n");
    let isAscendingOrder = true;
    for (let i = 0; i < splittedArrays.length; i++) {
      if (isAscendingOrder) {
        mixedArray.push(
          sortArray(splittedArrays[i].split(","), ASCENDING_ORDER)
        );
        isAscendingOrder = false;
      } else {
        mixedArray.push(
          sortArray(splittedArrays[i].split(","), DESCENDING_ORDER)
        );
        isAscendingOrder = true;
      }
    }

    return res.status(200).json({
      message:
        "The array values have been successfully re-ordered ascending / descending",
      mix: mixedArray
    });
  });
}

module.exports = {
  ascending,
  descending,
  mixed
};
