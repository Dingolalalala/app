const letters = document.querySelectorAll('.letter');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
const letterFrame = document.getElementById('letterFrame');

letters.forEach(letter => {
  letter.addEventListener('click', () => {
    const file = letter.dataset.file;
    const password = letter.dataset.password;

    if(password){
      const userInput = prompt('Enter password to open this letter:');
      if(userInput !== password){
        alert('Wrong password!');
        return;
      }
    }

    letterFrame.src = file;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  letterFrame.src = '';
});

window.addEventListener('click', e => {
  if(e.target === modal){
    modal.style.display = 'none';
    letterFrame.src = '';
  }
});
