const timerInputHours = document.getElementById('timer-hours');
const timerInputMinutes = document.getElementById('timer-minutes');
const timerInputSeconds = document.getElementById('timer-seconds');
const startButton = document.getElementById('start-button');
timerInputHours.contentEditable="true";
timerInputMinutes.contentEditable="true";
timerInputSeconds .contentEditable="true";
startButton.addEventListener('click', () => {
    
    const hours = parseInt((timerInputHours.value) || 0);
    const minutes = parseInt(timerInputMinutes.value) || 0;
    const seconds = parseInt(timerInputSeconds.value) || 0;

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    console.log(totalSeconds);
    if (totalSeconds > 0) {
        startTimer(totalSeconds);
    }
});


    // Logic to start a new timer and add it to Active Timers Display Section
    // You can use setInterval to update the timers every second
    // Store active timers and their IDs in an array
const activeTimers = [];

function startTimer(totalSeconds) {
    const timerId = setInterval(() => {
        // ... (same timer logic as before)
        // Store timer ID and timer element in the activeTimers array
        activeTimers.push({ id: timerId, element: document.createElement('div') });
        const currentTimer = activeTimers[activeTimers.length - 1];
        currentTimer.element.classList.add('timer');
        activeTimersSection.appendChild(currentTimer.element);

        // ... (same timer logic as before)

        // Update the timer element with the updated time remaining
        currentTimer.element.innerHTML = `${timerDisplay} <button class="stop-button" onclick="stopTimer(${timerId})">Stop Timer</button>`;

        // ... (same timer logic as before)
        if (totalSeconds <= 0) {
            clearInterval(timerId); // Stop the timer

            // Update the timer display to 01 min 29 sec
            timerDisplay = '01:29';

            // Update the timer element with the new display
            currentTimer.element.innerHTML = `${timerDisplay} <button class="stop-button" onclick="stopTimer(${timerId})">Stop Timer</button>`;

            // Play an audio alert
            playAudioAlert();
        }

        totalSeconds--; // Decrease the total seconds
    }, 1000);
       
}

const activeTimersSection = document.querySelector('.active-timers-section');

function startTimer(totalSeconds) {
    const timerId = setInterval(() => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        // Display the timer in the active timers section
        const timerDisplay = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        activeTimersSection.innerHTML += `<div class="timer">Set Timer ${timerDisplay} <button class="stop-button" onclick="stopTimer(${timerId})">Dlete</button></div>`;

        // Check if the timer has reached zero
        if (totalSeconds <= 0) {
            clearInterval(timerId); // Stop the timer
            showTimerEndDisplay(); // Display timer end design
            playAudioAlert(); // Play audio alert
        }

        totalSeconds--; // Decrease the total seconds
    },1000);
}
function stopTimer(timerId) {
    // Logic to stop the timer
    clearInterval(timerId);
}



function updateTimerDisplay(timerId, timerDisplay) {
    // Find the timer in the activeTimers array based on its ID
    const timerToUpdate = activeTimers.find(timer => timer.id === timerId);
    
    // Update the timer element with the updated time remaining
    if (timerToUpdate) {
        timerToUpdate.element.innerHTML = `${timerDisplay} <button class="stop-button" onclick="stopTimer(${timerId})">Stop Timer</button>`;
    }
}

// Example usage:
// Call updateTimerDisplay function with the timer ID and updated time display
// updateTimerDisplay(timerId, updatedTimerDisplay);

function playAudioAlert() {
    // Play your desired audio alert (e.g., beep sound)
    const audio = new Audio('sound.mp3');
    audio.play("./sound.mp3");
}

