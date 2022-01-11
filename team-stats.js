const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11,
        },
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11,
        },
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11,
        },
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27,
        },
        {
            opponent: 'Juventus',
            teamPoints: 30,
            opponentPoints: 20,
        },
        {
            opponent: 'Barcelona',
            teamPoints: 50,
            opponentPoints: 30,
        },
    ],
    get players() {
        return this._players
    },
    get games() {
        return this._games
    },
    addPlayer: function(firstName, lastName, age) {
        const newPlayer = {
            firstName,
            lastName,
            age,
        };
        this._players.push(newPlayer);
    },
    addGame: function(opponentName, teamPoints, opponentPoints) {
        const newGame = {
            opponentName,
            teamPoints,
            opponentPoints
        };
        this._games.push(newGame);
    },
    
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Liverpool', 50, 28);
team.addGame('Real Madrid', 40, 24);
team.addGame('PSG', 30, 25);

console.log(team.players)
console.log(team.games)
