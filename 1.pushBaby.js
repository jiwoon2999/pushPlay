const pushBtn = document.querySelectorAll('.pushBtn');
const textBox = document.querySelector('#textBox');
const pushButton = document.querySelector('.pushButton');

const textArray = ['P', 'U', 'S', 'H'];
pushBtn.forEach((push, index) => {
  const pushIndex = index;
  console.log(pushIndex);
  push.addEventListener('click', () => {
    textArray.forEach((text, i) => {
      if (pushIndex === i) {
        textBox.innerHTML = textArray[i];
      }
    });
  });
});
let count = 0;
pushButton.addEventListener('click', () => {
  count++;
  if (count % 2 === 1) {
    textBox.innerHTML = 'PUSH!!!!!!!!!!!!!!!!!!!!!!!';
    pushButton.innerHTML = 'BABY!';
  } else {
    textBox.innerHTML = 'BABYYYYYYYYYYY!!!!!!!!!!!!!!';
    pushButton.innerHTML = 'PUSH!';
  }
});
