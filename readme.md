# Good Egg Game

Good Egg is a web-based, interactive game that combines elements of virtual pet care and self-improvement themes. The game's mechanics are influenced by the Tamagotchi-style care system, where players nurture their Good Egg through daily activities.

## Game Features

1. **Player Engagement**: The game requires daily interaction, where players register and are responsible for the growth and development of their Good Egg.

2. **Time-Based Game Dynamics**: The game operates on a real-time clock system, with the Good Egg evolving based on the passage of time and player choices.

3. **Stat Growth and Specialization**: Each job and hobby impacts the Good Egg's stats differently, encouraging players to strategize their choices to shape their character's development.

4. **Random Events and Rewards**: Hobbies are designed to trigger random events that can yield bonuses or other unexpected outcomes.

5. **Character Evolution**: After a substantial period of nurturing (9 months), the Good Egg hatches into a character/avatar that players can potentially use in other games.

6. **Inclusivity and Balance**: The job mechanics are crafted to ensure a balanced and inclusive experience, with a variety of web3 and gaming culture-themed roles that offer different rewards and stat boosts.

7. **Persistence and Continuity**: Implementing features that allow for game state persistence, where choices like job selection carry consequences over time, and inactivity results in a default progression path.

8. **Creative and Educational Aspect**: Integrating educational components of web3 technologies by incorporating relevant jobs and activities that resonate with the theme.

9. **Prototype Development**: Starting with a simple HTML, JavaScript, and Tailwind CSS prototype, the project's approach is iterative, focusing on creating a minimal viable product first and then adding complexity and features based on user feedback and technical feasibility.

## Codebase

The codebase is organized with best practices in software development and game design, aiming to create an engaging, thematic, and user-friendly experience that encourages daily interaction and personal investment in the growth of the Good Egg character.

```function incrementStats(job) {
    gameState.goodEggStats[job]++
    // logic for salt & pepper increases
    if (gameState.selectedJob === gameState.lastJob) {
        gameState.goodEggStats.salt++;
    } else {
        gameState.goodEggStats.pepper++;
    }
    // set lastJob to selectedJob
    gameState.lastJob = gameState.selectedJob;
}
```

## Game Mechanics

The game mechanics are designed to be simple and intuitive, with a focus on encouraging daily interaction and engagement. The game's core mechanics are based on the Tamagotchi-style care system, where players nurture their Good Egg through daily activities.

# Getting Started

## Installation

1. Fork the repo and clone it locally

```sh
git clone https://github.com/tippi-fifestarr/goodegg.git
cd goodegg
npm install
```

2. Start the app

```sh
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
   
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'Add some amazing feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
6. Let's make something amazing together!
7. Have fun!
8. Be kind!
9. Be respectful!

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Tippi Fifestarr.


