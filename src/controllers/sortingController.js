const { readFileContent, writeFileContent } = require("../utils/fileUtil");
const { sortArray } = require("../service/sortingService");
const {
  ASCENDING_ORDER,
  DESCENDING_ORDER,
  MIXED_ORDER
} = require("../utils/constants");
const os = require("os");

async function ascending(req, res, next) {
  let ascendingArray = [];
  writeFileContent(`${ASCENDING_ORDER}${os.EOL}`);

  await readFileContent().then(data => {
    const splittedArrays = data.split("\n");

    for (let i = 0; i < splittedArrays.length; i++) {
      let currentSortedArray = sortArray(
        splittedArrays[i].split(","),
        ASCENDING_ORDER
      );

      writeFileContent(currentSortedArray);

      ascendingArray.push(currentSortedArray);
    }

    return res.status(200).json({
      message: "The array values have been successfully re-ordered ascending",
      asc: ascendingArray
    });
  });
}

async function descending(req, res, next) {
  let descendingArray = [];
  writeFileContent(`${DESCENDING_ORDER}${os.EOL}`);

  await readFileContent().then(data => {
    const splittedArrays = data.split("\n");

    for (let i = 0; i < splittedArrays.length; i++) {
      let currentSortedArray = sortArray(
        splittedArrays[i].split(","),
        DESCENDING_ORDER
      );

      writeFileContent(currentSortedArray);

      descendingArray.push(currentSortedArray);
    }

    return res.status(200).json({
      message: "The array values have been successfully re-ordered descending",
      des: descendingArray
    });
  });
}

async function mixed(req, res, next) {
  let mixedArray = [];
  writeFileContent(`${MIXED_ORDER}${os.EOL}`);

  await readFileContent().then(data => {
    const splittedArrays = data.split("\n");
    let isAscendingOrder = true;

    for (let i = 0; i < splittedArrays.length; i++) {
      let currentSortedArray = [];

      if (isAscendingOrder) {
        currentSortedArray = sortArray(
          splittedArrays[i].split(","),
          ASCENDING_ORDER
        );

        isAscendingOrder = false;
      } else {
        currentSortedArray = sortArray(
          splittedArrays[i].split(","),
          DESCENDING_ORDER
        );

        isAscendingOrder = true;
      }

      writeFileContent(currentSortedArray);

      mixedArray.push(currentSortedArray);
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
