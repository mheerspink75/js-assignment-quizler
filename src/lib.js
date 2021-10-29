import fs from "fs";
import { entries } from "lodash";

export const chooseRandom = (array, number) => {
  if (array.length < 2) {
    return array;
  }

  if (number < 2 || number > array.length) {
    number = array.length;
  }

  let arr = [], i, numItems;
  for (i = 0; i < number; i++) {
    numItems = array[i];
    arr.push(numItems);
  }
  return arr;
};

export const createPrompt = (numQuestions) => {
  let nq, nc;
  if (numQuestions && numQuestions.numQuestions !== undefined) {
    nq = numQuestions.numQuestions;
  } else {
    nq = 1;
  }
  
  if (numQuestions && numQuestions.numChoices !== undefined) {
    nc = numQuestions.numChoices;
  } else {
    nc = 2;
  }

  let arr = [], i, j;
  for (i = 1; i <= nq; i++) {
    arr.push({
      type: "input",
      name: `question-${i}`,
      message: `Enter question ${i}`,
    });
    for (j = 1; j <= nc; j++) {
      arr.push({
        type: "input",
        name: `question-${i}-choice-${j}`,
        message: `Enter answer choice ${j} for question ${i}`,
      });
    }
  }
  return arr;
};

export const createQuestions = (questions) => {
  let arr = [], key, q;
  for (key in questions) {
    if (key.indexOf(`-choice-`) !== -1) {
      q.choices.push(questions[key]);
    } else {
      q = {
        type: "list",
        name: key,
        message: questions[key],
        choices: [],
      };
      arr.push(q);
    }
  }
  return arr;
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
