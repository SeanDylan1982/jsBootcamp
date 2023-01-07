const warriorsGames = [{
  awayTeam: {
    team: 'Golden State',
    points: 119,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 106,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 105,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 127,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 126,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 85,
    isWinner: false
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 92,
    isWinner: false
  },
  awayTeam: {
    team: 'Houston',
    points: 95,
    isWinner: true
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 94,
    isWinner: false
  },
  homeTeam: {
    team: 'Houston',
    points: 98,
    isWinner: true
  }
},
{
  homeTeam: {
    team: 'Golden State',
    points: 115,
    isWinner: true
  },
  awayTeam: {
    team: 'Houston',
    points: 86,
    isWinner: false
  }
},
{
  awayTeam: {
    team: 'Golden State',
    points: 101,
    isWinner: true
  },
  homeTeam: {
    team: 'Houston',
    points: 92,
    isWinner: false
  }
}
]


const scoreTable = document.querySelector('#score-table');

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul');
  for (let game of games) {
    const {homeTeam,awayTeam} = game;
    const gameLi = document.createElement("li");
    gameLi.innerHTML = getScoreline(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'lose');
    ulParent.appendChild(gameLi);
  }
  return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
}

const getScoreline = ({ homeTeam, awayTeam }) => {
  const {team:hTeam, points:hPoints} = homeTeam;
  const {team:aTeam, points:aPoints} = awayTeam;
  const teamName = `${aTeam} @ ${hTeam}`;
  let scoreline;
  if (aPoints > hPoints) {
    scoreline = `<b>${aPoints}</b> - ${hPoints}`;
  } else {
    scoreline = `${aPoints} - <b>${hPoints}</b>`;
  }
  return `${teamName} ${scoreline}`;
}

const warriorsSection = document.querySelector('#warriors');
const rocketsSection = document.querySelector('#rockets');

const warriorsChart = makeChart(warriorsGames, 'Golden State');
const rocketsChart = makeChart(warriorsGames, 'Houston');

warriorsSection.appendChild(warriorsChart);
rocketsSection.appendChild(rocketsChart);
