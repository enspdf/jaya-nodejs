const { readFile, writeFile, appendFile } = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "/assets");

function readFileContent() {
  return new Promise((resolve, reject) => {
    readFile(
      `${process.env.PWD}/public/assets/original.txt`,
      {
        encoding: "utf-8"
      },
      (error, fileContent) => {
        if (error) {
          reject(error);
        }
        resolve(fileContent);
      }
    );
  });
  /*  readFile(
    `${process.env.PWD}/public/assets/original.txt`,
    { encoding: "utf-8" },
    async (error, fileContent) => {
      if (!error) {
        console.log(fileContent);
        return fileContent;
      } else {
        console.log(error);
      }
    }
  );*/
}

function writeFileContent() {}

module.exports = {
  readFileContent,
  writeFileContent
};
