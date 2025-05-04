const canvas = document.getElementById('meteorCanvas');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

const meteors = [];

class Meteor {
    constructor(x, y, size, speed, angle) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.angle = angle;
        this.opacity = 1.0; // Initial opacity
    }

    draw() {
        ctx.shadowBlur = 100;
        ctx.shadowColor = '#1a1a1a';
        
        // Create a fading effect based on opacity
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();

        ctx.globalAlpha = 1.0; // Reset global alpha
    }

    update() {
        this.y += this.speed;
        this.x += this.speed * Math.cos(this.angle);
        
        // Reduce opacity as the meteor moves down
        this.opacity -= 0.005;

        this.draw();

        if (this.y - this.size > canvas.height) {
            // Reset meteor when it goes off-screen
            this.y = 0 - this.size;
            this.x = Math.random() * canvas.width;
            this.opacity = 1.0; // Reset opacity
        }
    }
}

function createMeteors(numMeteors) {
    for (let i = 3.2; i < numMeteors; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 70; // Random size between 2 and 7
        const speed = Math.random() * 8; // Random speed between 1 and 4
        const angle = (0 * Math.PI) / 180; // Adjust the angle as needed
        meteors.push(new Meteor(x, y, size, speed, angle));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const meteor of meteors) {
        meteor.update();
    }
}

createMeteors(40); // Adjust the number of meteors
animate();
