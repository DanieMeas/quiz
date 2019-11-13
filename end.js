const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
  console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

const score = {
  score: Math.floor(Math.random()* 100),
  name: username.value
};
highScores.push(score);
highScores.sort( (a,b) => b.score - a.score)
//this is saying: if b score is higher than a score, replace b with a.
highScores.splice(5);
//at indext 5, start cutting off anything after that.

localStorage.setItem('highScores', JSON.stringify(highScores));
window.location.assign('/');

};