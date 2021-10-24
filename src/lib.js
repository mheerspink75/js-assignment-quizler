import fs from "fs";

export const chooseRandom = (array, number) => {
  // TODO implement chooseRandom
  if (array.length === 0 || array.length === 1) {
    return array;
  }
  if (array.length > 1) {
    let arr = [];
    for (let i = 0; i < number; i++) {
      let numItems = array[i];
      arr.push(numItems);
    }
    return arr;
  }
};

export const createPrompt = () => {
  // TODO implement createPrompt
};

export const createQuestions = () => {
  // TODO implement createQuestions
};

export const readFile = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => (err ? reject(err) : resolve(data)));
  });

export const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) =>
      err ? reject(err) : resolve("File saved successfully")
    );
  });
