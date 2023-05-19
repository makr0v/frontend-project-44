#!/usr/bin/env node
import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
export default function even() {
  console.log('node bin/brain-games.js');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= 4; i++) {
    const randomSign = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomSign}`);
    const answer = readlineSync.question('Your answer: ');
    let yesNo = '';
    if (answer === 'yes') { yesNo = 'no'; } else { yesNo = 'yes'; }
    // eslint-disable-next-line no-unused-expressions, no-sequences
    if (randomSign % 2 === 0 && answer === 'yes') { i += 1, console.log('Correct!'); } else if (randomSign % 2 !== 0 && answer === 'no') { i += 1, console.log('Correct!'); } else { return console.log(`Answer "${answer}" if the number is even, otherwise answer "${yesNo}".`); }
  }
  console.log(`Congratulations, ${name}!`);
}
even();
