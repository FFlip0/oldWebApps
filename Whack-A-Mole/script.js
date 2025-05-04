let score = 0;

function createMole() {
  const mole = document.createElement('div');
  mole.classList.add('mole');
  mole.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
  mole.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
  mole.addEventListener('click', whackMole);
  document.body.appendChild(mole);

  setTimeout(() => {
    mole.remove();
    createMole();
  }, 1000);
}

function whackMole() {
  score += 1;
  document.getElementById('score').textContent = `${score}`;
  this.remove();
}

createMole();
