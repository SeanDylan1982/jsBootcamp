const app = document.querySelector("#app");

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");
window.addEventListener("keyup", function(e) {
  console.log(e.key);
  if (e.key === "ArrowDown" || e.key === "Down") {
    const currTop = extractPos(player.style.top);
    player.style.top = `${currTop + 50}px`;
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    const currTop = extractPos(player.style.top);
    player.style.top = `${currTop - 50}px`;
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    const currLeft = extractPos(player.style.left);
    player.style.transform = 'scale(1,1)';
    player.style.left = `${currLeft + 50}px`;
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    const currLeft = extractPos(player.style.left);
    player.style.transform = 'scale(-1,1)';
    player.style.left = `${currLeft - 50}px`;
  }
  if(isTouching(player,coin)) moveCoin();
})

const extractPos = (pos) => {
  if(!pos) return 100;
  return parseInt(pos.slice(0, -2));
}

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
}
moveCoin();