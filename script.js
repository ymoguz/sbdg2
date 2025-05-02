let targetTime = new Date().getTime() + 1 * 30 * 60 * 1000;

let countdownEl = document.getElementById('countdown');
let countdownContainer = document.getElementById('countdown-container');
let videoContainer = document.getElementById('video-container');

function updateCountdown() {
  let now = new Date().getTime();
  let diff = targetTime - now;

  if (diff <= 0) {
    countdownContainer.style.display = 'none';
    videoContainer.style.display = 'flex';
    return;
  }

  let hours = Math.floor(diff / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

setInterval(updateCountdown, 1000);
