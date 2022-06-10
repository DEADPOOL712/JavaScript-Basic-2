// while loop

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log('The dice number is ' + dice);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log('The dice number is' + dice + 'its gona end ');
  }
}
