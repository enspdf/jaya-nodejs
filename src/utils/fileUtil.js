const { readFile, write, open, close } = require("fs");
const os = require("os");

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
}

function writeFileContent(contentToWrite = "") {
  open(`${process.env.PWD}/public/assets/sorted.txt`, "a", 666, (error, id) => {
    if (error) {
      console.log(error);
    } else {
      write(id, `${contentToWrite}${os.EOL}`, null, "utf-8", () => {
        close(id, () => {});
      });
    }
  });
  /*appendFile(
    `${process.env.PWD}/public/assets/sorted.txt`,
    `${contentToWrite}${os.EOL}`,
    error => {
      if (error) {
        console.log(error);
      }
    }
  );*/
}

module.exports = {
  readFileContent,
  writeFileContent
};
