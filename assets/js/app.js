// Select DOM elements
const elements = {
    redButton: document.querySelector('#red-button'),
    rBackgroundbutton: document.querySelector('#reset-background-button'),
    refreshButton: document.getElementById('refresh-button'),
    popupButton: document.querySelector('#popup-button'),
    colorCycleButton: document.querySelector('#color-cycle-button'),
    showMessageButton: document.querySelector('#show-message-button'),
    removeMessageButton: document.querySelector('#remove-message-button'),
    colorChangeButton: document.querySelector('#color-change-button'),
    body: document.body,
    soundButtons: {
        dawg: document.getElementById('dawg-button'),
        vineboom: document.getElementById('vineboom-button'),
        disgusting: document.getElementById('disgusting-button'),
        nerd: document.getElementById('nerd-button'),
        dolphinelaugh: document.getElementById('dolphinelaugh-button'),
        ehehhh: document.getElementById('ehehhh-button'),
        moai: document.getElementById('moai-button'),
        ahh: document.getElementById('ahh-button'),
        strokin: document.getElementById('strokin-button'),
        warni: document.getElementById('warni-button'),
        slaugh: document.getElementById('slaugh-button'),
        raawr: document.getElementById('raawr-button')
    }
};

// Variables for managing state
let message = null;
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'lightblue', 'black', 'white'];
let currentColorIndex = 0;
const buttonColors = [...colors];
let currentButtonColorIndex = 0;

// Change the background color of the body
function changeBackgroundColor(color) {
    elements.body.style.backgroundColor = color;
}

// Display a message on the page
function showMessage() {
    if (!message) {
        message = document.createElement('h2');
        message.textContent = "Hej med dig";
        elements.body.appendChild(message);
    }
}

// Remove the displayed message
function removeMessage() {
    if (message) {
        elements.body.removeChild(message);
        message = null;
    }
}

// Reload the page
function refreshPage() {
    location.reload();
}

// Show a popup alert
function showPopup() {
    alert('Hej med dig din adem');
}

// Cycle through colors for the background
function cycleBackgroundColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    changeBackgroundColor(colors[currentColorIndex]);
}

// Change the color of the button
function changeButtonColor() {
    currentButtonColorIndex = (currentButtonColorIndex + 1) % buttonColors.length;
    elements.colorChangeButton.style.backgroundColor = buttonColors[currentButtonColorIndex];
}

// Play sound
function playSound(soundName) {
    const audio = new Audio(`/assets/mp3/${soundName}.mp3`);
    audio.play();
}

// Event listeners for buttons
elements.redButton.addEventListener('click', () => changeBackgroundColor('red'));
elements.rBackgroundbutton.addEventListener('click', () => changeBackgroundColor('#090c17'));
elements.showMessageButton.addEventListener('click', showMessage);
elements.removeMessageButton.addEventListener('click', removeMessage);
elements.refreshButton.addEventListener('click', refreshPage);
elements.popupButton.addEventListener('click', showPopup);
elements.colorCycleButton.addEventListener('click', cycleBackgroundColor);
elements.colorChangeButton.addEventListener('click', changeButtonColor);

// Sound buttons
const soundEvents = {
    Dawg: 'dawg',
    VineBoom: 'vineboom',
    Disgusting: 'disgusting',
    Nerd: 'nerd',
    DolphineLaugh: 'dolphinelaugh',
    ehehhh: 'ehehhh',
    Moai: 'moai',
    Ahh: 'ahh',
    Strokin: 'strokin',
    Warni: 'warni',
    SLaugh: 'slaugh',
    Raawr: 'raawr'
};

Object.keys(soundEvents).forEach(sound => {
    elements.soundButtons[soundEvents[sound]].addEventListener('click', () => playSound(sound));
});
