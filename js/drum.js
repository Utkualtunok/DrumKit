document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
        const sound = new Audio(button.dataset.sound);
        sound.play();
        animateButton(button);
    });
});

document.addEventListener('keydown', (event) => {
    const keyMap = {
        'a': 'kick.wav',
        'b': 'snare.wav',
        'c': 'hihat.wav',
        'd': 'tom.wav',
        'e': 'tink.wav',
        'f': 'ride.wav',
        'g': 'openhat.wav',
        'h': 'clap.wav',
        'i': 'boom.wav'
    };

    const soundFile = keyMap[event.key];
    if (soundFile) {
        const sound = new Audio(`../assets/sounds${soundFile}`);
        sound.play();
        const button = document.querySelector(`.drum[data-sound="../assets/sounds/${soundFile}"]`);
        if (button) {
            animateButton(button);
        }
    }
});

function animateButton(button) {
    button.classList.add('playing');
    setTimeout(() => {
        button.classList.remove('playing');
    }, 100);
}
