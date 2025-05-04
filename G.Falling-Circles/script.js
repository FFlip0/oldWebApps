let score = 0;

function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.left = `${Math.random() * (window.innerWidth - 30)}px`;
  circle.style.top = '0';
  circle.addEventListener('click', catchCircle);
  document.body.appendChild(circle);

  const fallInterval = setInterval(() => {
    const top = circle.offsetTop;
    circle.style.top = `${top + 5}px`;

    if (top > window.innerHeight) {
      circle.remove(); // Remove the circle element when reaching the bottom
    }
  }, 16);
}

function catchCircle() {
  score += 1;
  document.getElementById('score').textContent = `${score}`;
  this.remove(); // Remove the clicked circle element
}

setInterval(createCircle, 1000); // Spawn a new falling circle every second