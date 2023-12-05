ref: for (let i = 0; i < 10; i++) {
  console.log(`z = ${i}`);
  for (let j = 0; j < 10; j++) {
    console.log(`j = ${j}`);
    if (i === 2 && j === 2) {
      break ref;
    }
  }
}
