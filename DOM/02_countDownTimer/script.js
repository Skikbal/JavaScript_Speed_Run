const resumeButton = document.getElementById("resume");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const daysInput = document.getElementById("day");
const hoursInput = document.getElementById("hour");
const minutesInput = document.getElementById("minute");
const secondsInput = document.getElementById("second");
const setTimerButton = document.getElementById("setTimer");
const dayDisplay = document.getElementById("dayDisplay");
const hourDisplay = document.getElementById("hourDisplay");
const minuteDisplay = document.getElementById("minuteDisplay");
const secondDisplay = document.getElementById("secondDisplay");
const tickSound = new Audio("./asset/tick.mp3");
const moon = document.getElementById("dark");
const sun = document.getElementById("light");
const currentMode = document.getElementById("mode");

//count down time
let totalCountdownTime = 0;
let remainingCountdownTime = 0;
let isRunning = "pause";
let timer;
let mode = true;
//mode
currentMode.addEventListener("click", () => {
  mode = !mode;
  if (mode) {
    sun.style.display = "block"; // Hide sun
    moon.style.display = "none"; // Show moon
    document.body.classList.add("dark-mode");
    document.getElementById("timer").classList.add("dark-timer");
  } else {
    moon.style.display = "block"; // Hide moon
    sun.style.display = "none"; // Show sun
    document.body.classList.remove("dark-mode");
    document.getElementById("timer").classList.remove("dark-timer");
  }
});

//fetch data from local storage and feed
window.onload = () => {
  let savedTime = localStorage.getItem("timer");
  isRunning = "pause";
  totalCountdownTime = parseInt(savedTime);
  settingClientData();
  if (totalCountdownTime > 0) {
    setTimerButton.setAttribute("disabled", true);
  }
};

//listener
setTimerButton.addEventListener("click", setTimerFunction);

//function for setting data
function settingClientData() {
  const day = Math.floor(totalCountdownTime / 86400);
  const hour = Math.floor((totalCountdownTime % 86400) / 3600);
  const minute = Math.floor((totalCountdownTime % 3600) / 60);
  const second = Math.floor(totalCountdownTime % 60);
  dayDisplay.innerText = day.toString().padStart(2, "0");
  hourDisplay.innerText = hour.toString().padStart(2, "0");
  minuteDisplay.innerText = minute.toString().padStart(2, "0");
  secondDisplay.innerText = second.toString().padStart(2, "0");
}

//setting interval
function intervalSetter() {
  isRunning = "active";
  timer = setInterval(() => {
    if (totalCountdownTime <= 0) {
      setTimerButton.removeAttribute("disabled");
      tickSound.pause();
      clearInterval(timer);
      Toastify({
        text: "DING DING! Time’s UP! 🎉 What’s next on your list?",
        duration: 3000,
        className: "warning",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))",
        },
      }).showToast();
      return;
    }

    if (totalCountdownTime > 0) {
      tickSound.currentTime = 0; // Reset audio time
      tickSound
        .play()
        .catch((error) => console.log("Audio play error:", error)); // Catch errors
    }

    totalCountdownTime--;
    localStorage.setItem("timer", totalCountdownTime);
    settingClientData();
  }, 1000);
  return timer;
}

//setting timer function
function setTimerFunction() {
  const daysValue = parseInt(daysInput.value) || 0;
  const hoursValue = parseInt(hoursInput.value) || 0;
  const minutesValue = parseInt(minutesInput.value) || 0;
  const secondsValue = parseInt(secondsInput.value) || 0;
  daysInput.value = "";
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";

  //validation
  if (!daysValue && !hoursValue && !minutesValue && !secondsValue) {
    Toastify({
      text: "Oops! You must enter a valid time before starting the countdown! ⏳",
      duration: 3000,
      className: "warning",
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background:
          "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))",
      },
    }).showToast();
    return;
  }

  if (
    daysValue < 0 ||
    hoursValue < 0 ||
    hoursValue > 23 ||
    minutesValue < 0 ||
    minutesValue > 59 ||
    secondsValue < 0 ||
    secondsValue > 59
  ) {
    Toastify({
      text: "No negative time travel allowed! Please enter a future time! 🕰️",
      duration: 3000,
      className: "warning",
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background:
          "linear-gradient(to right, rgb(0, 176, 155), rgb(150, 201, 61))",
      },
    }).showToast();
    return;
  }

  //functionality starts here
  totalCountdownTime =
    daysValue * 86400 + hoursValue * 3600 + minutesValue * 60 + secondsValue;
  setTimerButton.setAttribute("disabled", true);
  const result = intervalSetter();
  if (result) {
    Toastify({
      text: "Time is precious! Your journey to zero starts now! 🚀",
      duration: 3000,
      className: "success",
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  }
}

//reset
resetButton.addEventListener("click", () => {
  if (totalCountdownTime > 0) {
    clearInterval(timer);
    totalCountdownTime = 0;
    localStorage.setItem("timer", totalCountdownTime);
    tickSound.pause();
    tickSound.currentTime = 0;
    dayDisplay.innerText = "00";
    hourDisplay.innerText = "00";
    minuteDisplay.innerText = "00";
    secondDisplay.innerText = "00";
    setTimerButton.removeAttribute("disabled");
    Toastify({
      text: "Boom! Back to square one! Set a new countdown and start fresh!",
      duration: 3000,
      className: "warning",
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  }
});

//pause
pauseButton.addEventListener("click", () => {
  if (totalCountdownTime > 0 && isRunning === "active") {
    isRunning = "pause";
    clearInterval(timer);
    tickSound.pause();

    Toastify({
      text: "Paused! But remember, time waits for no one! ⏳",
      duration: 3000,
      className: "warning",
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  }
});

//resume
resumeButton.addEventListener("click", () => {
  if (totalCountdownTime > 0 && isRunning === "pause") {
    isRunning = "active";
    localStorage.setItem("isRunning", isRunning);
    clearInterval(timer);
    intervalSetter();
    Toastify({
      text: "Every second counts! Stay focused! 🎯",
      duration: 3000,
      className: "info",
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  }
});
