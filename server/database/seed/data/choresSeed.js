const faker = require('faker');

const createArrayOfSentences = numberOfSentences => {
  const sentenceArr = [];
  Array(numberOfSentences)
    .fill(1)
    .forEach(val => sentenceArr.push(faker.lorem.sentence()));
  return sentenceArr;
};

const choresSeed = [
  {
    name: 'Clean the kitchen',
    difficulty: Math.floor(Math.random() * 10) + 1,
    penalty: Math.random() * 5,
    isActive: true,
    timeLimit: Math.floor(Math.random() * 7) + 1,
    details: createArrayOfSentences(Math.floor(Math.random() * 3) + 1),
  },
  {
    name: 'Take out the trash',
    difficulty: Math.floor(Math.random() * 10) + 1,
    penalty: Math.random() * 5,
    isActive: true,
    timeLimit: Math.floor(Math.random() * 7) + 1,
    details: createArrayOfSentences(Math.floor(Math.random() * 3) + 1),
  },
  {
    name: 'Clean the bathroom',
    difficulty: Math.floor(Math.random() * 10) + 1,
    penalty: Math.random() * 5,
    isActive: true,
    timeLimit: Math.floor(Math.random() * 7) + 1,
    details: createArrayOfSentences(Math.floor(Math.random() * 3) + 1),
  },
  {
    name: 'Feed the dog',
    difficulty: Math.floor(Math.random() * 10) + 1,
    penalty: Math.random() * 5,
    isActive: true,
    timeLimit: Math.floor(Math.random() * 7) + 1,
    details: createArrayOfSentences(Math.floor(Math.random() * 3) + 1),
  },
  {
    name: 'Vacuum the living room',
    difficulty: Math.floor(Math.random() * 10) + 1,
    penalty: Math.random() * 5,
    isActive: true,
    timeLimit: Math.floor(Math.random() * 7) + 1,
    details: createArrayOfSentences(Math.floor(Math.random() * 3) + 1),
  },
];

module.exports = choresSeed;
