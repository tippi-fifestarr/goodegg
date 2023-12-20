// Game State
let gameState = {
    username: null,
    goodEggStats: {
        strong: 0, agile: 0, tanky: 0, clever: 0, wise: 0, cute: 1, lucky: 1, salt: 1, pepper: 1
    },
    gameDay: 0
};

// Initialize Game
function initGame() {
    document.getElementById('startButton').addEventListener('click', handleStartButtonClick);
    startGameTimer();
}

// Handle Start Button Click
function handleStartButtonClick() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();

    if (username) {
        if (username.toLowerCase() === "tippi fifestarr") {
            // Special username logic
        }

        gameState.username = username;
        alert('Welcome, ' + username + '!');
        renderNewEgg();
        removeElement(usernameInput);
        removeElement(this);
    } else {
        alert('Please enter a username.');
    }
}

// Game Day Timer
function startGameTimer() {
    setInterval(() => {
        gameState.gameDay++;
        updateGameDayDisplay();
    }, 6000); // 6 seconds for a day
}

// Update Game Day Display
function updateGameDayDisplay() {
    const dayDisplay = document.getElementById('dayDisplay');
    if (dayDisplay) {
        dayDisplay.innerText = 'Day: ' + gameState.gameDay;
    } else {
        // Create and display game day if not exists
        const newDayDisplay = document.createElement('div');
        newDayDisplay.id = 'dayDisplay';
        newDayDisplay.innerText = 'Day: ' + gameState.gameDay;
        document.body.insertBefore(newDayDisplay, document.body.firstChild);
    }
}

// Render New Egg
function renderNewEgg() {
    // Existing renderNewEgg logic

    // call a function to start a new egg timer
    startGameTimer();

    const eggContainer = document.getElementById('eggContainer');
    const eggName = document.createElement('h2');
    eggName.innerText = gameState.username;
    eggContainer.appendChild(eggName);

    // Create the egg
    const egg = document.createElement('div');
    egg.className = 'egg mx-auto'; // Tailwind centering and custom egg class
    egg.addEventListener('click', function() {
        const messages = ['I need a job', 'No hobby, no happy', `my name is ${gameState.username}`, 'thank you tippi', `i am ${gameState.gameDay} days old`];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        alert(randomMessage);
    });

    // Create the job and hobby buttons
    const jobButton = createJobButton();
    const hobbyButton = createHobbyButton();

    // Append the egg and buttons to the eggContainer
    eggContainer.appendChild(egg);
    eggContainer.appendChild(jobButton);
    eggContainer.appendChild(hobbyButton);

    // Display the egg's stats
    const statsDiv = document.createElement('div');
    statsDiv.id = 'stats';
    statsDiv.innerText = JSON.stringify(gameState.goodEggStats); // Convert the stats object to a string for display
    eggContainer.appendChild(statsDiv);

}

// Utility Functions
function removeElement(element) {
    element.remove();
}

// Other existing functions (createJobButton, createHobbyButton, etc.)
// createJobButton
function createJobButton() {
    const jobButton = document.createElement('button');
    jobButton.id = 'jobButton';
    jobButton.innerText = 'Job';
    jobButton.className = "bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded";
    jobButton.addEventListener('click', function() {
        const jobDropdown = createJobDropdown();
        // This assumes the dropdown does not exist yet and only one can be created
        this.replaceWith(jobDropdown);
    });
    return jobButton;
}

// Add a dropdown for job selection
function createJobDropdown() {
    const jobDropdown = document.createElement('select');
    jobDropdown.id = 'jobDropdown';
    jobDropdown.className = 'my-2 p-2 border rounded';
    const placeholder = document.createElement('option');
    placeholder.text = 'Select a job';
    placeholder.disabled = true;
    placeholder.selected = true;
    jobDropdown.appendChild(placeholder);

    const jobs = ['strong', 'agile', 'tanky', 'clever', 'wise', 'cute', 'lucky'];
    jobs.forEach(job => {
        const option = document.createElement('option');
        option.value = job;
        option.text = job.charAt(0).toUpperCase() + job.slice(1);
        jobDropdown.appendChild(option);
    });

    jobDropdown.addEventListener('change', handleJobSelection);
    return jobDropdown;
}

// Handle job selection from dropdown
function handleJobSelection() {
    const selectedJob = this.value;
    gameState.goodEggStats[selectedJob]++;
    this.disabled = true; // Lock the dropdown
    updateStatsDisplay(); // Update the displayed stats

    // Set a timeout to "unlock" the dropdown after a day
    setTimeout(() => {
        this.disabled = false;
    }, 86400000); // 1 day in milliseconds
}

// Update stats display
function updateStatsDisplay() {
    const statsDiv = document.getElementById('stats');
    statsDiv.innerText = JSON.stringify(gameState.goodEggStats, null, 2);
}


// createHobbyButton
function createHobbyButton() {
    const hobbyButton = document.createElement('button');
    hobbyButton.id = 'hobbyButton';
    hobbyButton.innerText = 'Hobby';
    hobbyButton.className = "bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded";
    hobbyButton.addEventListener('click', function() {
        // Code to assign a hobby to the Good Egg goes here
    });
    return hobbyButton;
}

// 

// Start the game
initGame();
