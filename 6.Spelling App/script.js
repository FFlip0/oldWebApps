const words = [
    'apple',
    'banana',
    'cherry',
    // Add more words here
];

let currentWordIndex = 0;
const apiKey = 'YOUR_WORDNIK_API_KEY'; // Replace with your actual API key

function playAudio(word) {
    const audio = document.getElementById('audio');
    const url = `https://api.wordnik.com/v4/word.json/${word}/audio?useCanonical=false&limit=1&api_key=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                audio.src = data[0].fileUrl;
                audio.play();
            } else {
                console.error('No audio found for this word.');
            }
        })
        .catch(error => console.error('Error fetching audio:', error));
}

function getNextWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    return words[currentWordIndex];
}

function checkSpelling(userInput) {
    const currentWord = words[currentWordIndex];
    return userInput.toLowerCase() === currentWord.toLowerCase();
}

document.getElementById('nextButton').addEventListener('click', () => {
    const userInput = document.getElementById('spellingInput').value;
    const feedback = document.getElementById('feedback');

    if (userInput) {
        if (checkSpelling(userInput)) {
            feedback.textContent = 'Correct!';
        } else {
            feedback.textContent = `Incorrect! The correct word is "${words[currentWordIndex]}".`;
        }
    }

    const nextWord = getNextWord();
    playAudio(nextWord);
    document.getElementById('spellingInput').value = '';
    feedback.textContent = '';
});

window.onload = () => {
    const initialWord = getNextWord();
    playAudio(initialWord);
};
