// Select elements
const statusText = document.getElementById("statusText");
const toggleBtn = document.getElementById("toggleBtn");

// Track state
let isOn = false;

// Click event
toggleBtn.addEventListener("click", function () {
    if (isOn) {
        statusText.textContent = "OFF";
        statusText.classList.remove("on");
        statusText.classList.add("off");
        document.body.style.backgroundColor = "#f0f0f0"; // Light gray
    } else {
        statusText.textContent = "ON";
        statusText.classList.remove("off");
        statusText.classList.add("on");
        document.body.style.backgroundColor = "#e8f5e9"; // Light green
    }

    isOn = !isOn;
});
