"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

console.log(submissions);

// these functions Hoist the "current" values to all previous versions of the array in the console.log


const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};

addSubmission(submissions, "Lo", 10, "2020-07-29");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 4);
console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  let indexDesired = array.findIndex((student) => {
    return student.name === name;
  });
  array.splice(indexDesired, 1);
};

deleteSubmissionByName(submissions, "Jane");
console.log(submissions);

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

editSubmission(submissions, 1, 95);

console.log(submissions);

const findSubmissionByName = (array, name) => {
  let nameFound = array.find((student) => {
    return student.name === name;
  });
  return nameFound;
};

console.log(findSubmissionByName(submissions, "Jack"));

// first initialize the variable to an array
// compare each object in the array to the previous one
// must start at the first object in the array thus [0] index
// if the current object in the array.propertySeached then reset the variable value to the new better qualifying statement

const findLowestScore = (array) => {
  let lowestScore = array[0];
  array.forEach((person) => {
    if (person.score < lowestScore.score) {
      lowestScore = person;
    }
  });
  return lowestScore;
};

console.log("The Lowest Score");
console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  let scoreAverage = 0;
  for (let person of array) {
    scoreAverage = +person.score;
  }
  return Math.round(scoreAverage / array.length);
};

console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  let successfulStudents = array.filter((success) => {
    return success.passed === true;
  });
  return successfulStudents;
};

console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  let scores90Plus = array.filter((theScore) => {
    return theScore.score > 90;
  });
  return scores90Plus;
};

console.log(filter90AndAbove(submissions));

const createRange = (start, end) => {
  let rangeArray = [start];
  for (let i = start + 1; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
};

console.log(createRange(10, 20));

let strings = ["a", "a", "b", "c", "a", "a", "b", "c", "D"];

const countElements = (array) => {
  let elementCountObject = {};
  for (let i = 0; i < array.length; i++) {
    elementCountObject[array[i]] = (elementCountObject[array[i]] || 0) + 1;
  }
  return elementCountObject;
};

console.log(countElements(strings));
