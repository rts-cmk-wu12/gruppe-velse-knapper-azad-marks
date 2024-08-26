const redButton = document.querySelector('#red-button');
const blueButton = document.querySelector('#blue-button');
const refreshButton = document.getElementById('refresh-button');
const popupButton = document.querySelector('#popup-button');
const colorCycleButton = document.querySelector('#color-cycle-button');
const showMessageButton = document.querySelector('#show-message-button');
const removeMessageButton = document.querySelector('#remove-message-button');
const colorChangeButton = document.querySelector('#color-change-button');



const body = document.body;



function colorChange(color) {
    body.style.backgroundColor = color;
}

// Til at få siden til at være rød ved at trykke på knappen
redButton.addEventListener('click', () => colorChange('red'));



// Til at få siden til at være blå ved at trykke på knappen
blueButton.addEventListener('click', () => colorChange('blue'));




// Til at vise en besked på siden når man trykker på knappen

showMessageButton.addEventListener('click', showMessage);

function showMessage() {
    
    if (!message) {
        message = document.createElement('p');
        message.textContent = "Hej med dig";
        body.appendChild(message);
    }
}


// Til at fjerne beskeden når man trykker på knappen

removeMessageButton.addEventListener('click', removeMessage);

function removeMessage() {
  
    if (message) {
        body.removeChild(message);
        message = null; 
    }
}


// Til at opdatere hjemmesiden ved at trykke på knappen
refreshButton.addEventListener('click', function() {
    location.reload();
});


// Til at få en popup når man trykker på knappen
popupButton.addEventListener('click', function() {
    alert('Hej med dig');
});


// Til at skifte imellem nye farver når man trykker på knappen
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'lightblue', 'black', 'white']; 
let currentColorIndex = 0; 

colorCycleButton.addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length; 
    body.style.backgroundColor = colors[currentColorIndex]; 
});


// Til at skifte farve på knappen hver gang man trykker på den

const buttonColors = ['red', 'blue', 'green', 'yellow', 'purple', 'lightblue', 'black', 'white'];
let currentButtonColorIndex = 0;


colorChangeButton.addEventListener('click', function() {
  
    currentButtonColorIndex = (currentButtonColorIndex + 1) % buttonColors.length;
    colorChangeButton.style.backgroundColor = buttonColors[currentButtonColorIndex];
});


