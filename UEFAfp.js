// UEFAfp.js

// Function to simulate a UEFA tournament match
function playMatch(team1, team2) {
    const team1Score = Math.floor(Math.random() * 5);
    const team2Score = Math.floor(Math.random() * 5);
    return {
        team1: team1,
        team2: team2,
        team1Score: team1Score,
        team2Score: team2Score,
        winner: team1Score > team2Score ? team1 : team2Score > team1Score ? team2 : 'Draw'
    };
}

playMatch('Real Madrid', 'Barcelona');
const matchResult = playMatch('Real Madrid', 'Barcelona');
console.log(`Match Result: ${matchResult.team1} ${matchResult.team1Score} - ${matchResult.team2Score} ${matchResult.team2}`);
console.log(`Winner: ${matchResult.winner}`);