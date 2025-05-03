//1 read file hello.txt
//2 create fiile and copy the content of hello to backup.txt
// delete the hello.txt

const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");

// fs.readFile("./hello.txt", "utf-8", function (err, content) {
//   if (err) {
//     console.log("error: ", err);
//   } else {
//     console.log("content: ", content);
//     fs.writeFile("./backup.txt", content, function (err) {
//       if (err) {
//         console.log("error: ", err);
//       } else {
//         console.log("new file created and printed");
//         fs.unlink("./hello.txt", function (err) {
//           if (err) {
//             console.log("error: ", err);
//           } else {
//             console.log("file deleted successfull");
//           }
//         });
//       }
//     });
//   }
// });

// custom promises

function readFileWithPromise(filePath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}

function writeFileWithPromise(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function deleteFileWithPromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
//function to wait 10 seconds

function wait(sconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), sconds * 1000);
  });
}

//async await
async function doTask() {
  try {
    const fileContent = await readFileWithPromise("./backup.txt", "utf-8");
    await writeFileWithPromise("./hello.txt", fileContent);
    await wait(10);
    await deleteFileWithPromise("./backup.txt");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("all done");
  }
}

doTask().then(() => console.log("done"));
