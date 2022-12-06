// Competitions = [
// 	['HTML', 'C#'],
// 	['C#', 'Python'],
// 	['Python', 'HTML'],
// ];

// Indices of who lost
// Results = [ 0, 0, 1]

//Points per win = 3

const tournamentWinner = (competitions, results) => {
  let currentBestTeam = "",
    scores = { currentBestTeam: 0 };

  const updateScores = (team, points, scores) => {
    !team in scores ? (scores[team] = 0) : (scores[team] += points);
  };

  for (let i = 0; i < competitions.length; i++) {
    let result = results[i],
      [homeTeam, awayTeam] = competitions[i],
      winningTeam = result === 1 ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam])
      currentBestTeam = winningTeam;
  }

  return currentBestTeam;
};
