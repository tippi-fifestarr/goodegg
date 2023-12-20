let username;

document.getElementById('startButton').addEventListener('click', function() {
    username = document.getElementById('username').value;
    if(username) {
      alert('Welcome, ' + username + '!');
      renderNewEgg(username); // Call the renderNewEgg function here
      removeUsernameInput(); // Call the removeUsernameInput function here
      this.remove(); // Remove the start button
    } else {
      alert('Please enter a username.');
    }
  });
  
  let goodEggStats = {
    strong: 0,
    agile: 0,
    tanky: 0,
    clever: 0,
    wise: 0,
    cute: 1,
    lucky: 1,
    salt: 1,
    pepper: 1,
  };
  

  function createJobButton() {
    const jobButton = document.createElement('button');
    jobButton.id = 'jobButton';
    jobButton.innerText = 'Job';
    jobButton.className = "bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded";
    jobButton.addEventListener('click', function() {
      // Code to assign a job to the Good Egg goes here
      // add a dropdown menu of 7 jobs corresponding to the 7 stats: strong, agile, tanky, clever, wise, cute, lucky
      // such as 'engineer' for clever, 'teacher' for wise, 'artist' for cute, 'memecoin investor' for lucky, etc.
      // when a job is selected, the corresponding stat is increased by 1 and the job is locked for a "day"
        // when a job is locked, the button is disabled
         const jobDropdown = document.createElement('select');
         jobDropdown.id = 'jobDropdown';
         const jobs = ['strong', 'agile', 'tanky', 'clever', 'wise', 'cute', 'lucky'];
         jobs.forEach(job => {
           const option = document.createElement('option');
           option.value = job;
           option.text = job.charAt(0).toUpperCase() + job.slice(1);
           jobDropdown.appendChild(option);
         });
         this.appendChild(jobDropdown);
         jobDropdown.addEventListener('change', function() {
           goodEggStats[this.value]++;
           this.disabled = true;
           setTimeout(() => {
             this.disabled = false;
           }, 86400000); // 1 day in milliseconds
         });
    });
    return jobButton;
  }
  
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
  
// function called that starts a new egg timer for the Good Egg, there can be only one
function startNewEggTimer() {
    // create a new timer, where 1 "day" is really 60 seconds and store it in a variable;

    // display the egg timer
    
    // display the egg's stats
  }

  function renderNewEgg(username) {
    // call a function to start a new egg timer
    startNewEggTimer();

    const eggContainer = document.getElementById('eggContainer');
    const eggName = document.createElement('h2');
    eggName.innerText = username;
    eggContainer.appendChild(eggName);
    // Create the egg
    const egg = document.createElement('div');
    egg.className = 'egg mx-auto'; // Tailwind centering and custom egg class
    egg.addEventListener('click', function() {
      const messages = ['I need a job', 'No hobby, no happy', `my name is ${username}`, 'thank you tippi'];
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
    statsDiv.innerText = JSON.stringify(goodEggStats); // Convert the stats object to a string for display
    eggContainer.appendChild(statsDiv);
  }

  function removeUsernameInput() {
    const usernameInput = document.getElementById('username');
    usernameInput.remove();

  }