#!/usr/bin/env node
import readlineSync from 'readline-sync';

function exampleGCD(a, b) {
  if (b === 0) {
    return a;
  }
  return exampleGCD(b, a % b);
}

// eslint-disable-next-line consistent-return
export default function gcd() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let step = 1;
  while (step <= 3) {
    let stepAnswer;

    const minimal = 0;
    const maximum = 100;

    const randomNum1 = `${Math.floor(Math.random() * (maximum - minimal) + minimal)}`;
    const randomNum2 = `${Math.floor(Math.random() * (maximum - minimal) + minimal)}`;

    console.log(`Question: ${randomNum1} ${randomNum2}`);

    const yourAnswer = readlineSync.question('Your answer: ');

    if (yourAnswer === `${exampleGCD(randomNum1, randomNum2)}`) { stepAnswer = 'Correct!'; } else if (yourAnswer !== `${exampleGCD(randomNum1, randomNum2)}`) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${exampleGCD(randomNum1, randomNum2)}'.`);
      return console.log(`Let's try again, ${name}!`);
    }

    if (stepAnswer !== 'Correct!') { step = 0; }
    console.log(stepAnswer);
    step += 1;
  }
  console.log(`Congratulations, ${name}!`);
}
gcd();
