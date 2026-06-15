// Roll number logic
let rollNumber = prompt("Enter your roll number:");

// Background color for button & video
let btn = document.getElementById("btn");
let video = document.getElementById("demo-video");

let lastDigit = rollNumber % 10;
if (lastDigit >= 0 && lastDigit <= 3) {
  btn.style.backgroundColor = "blue";
  video.style.backgroundColor = "blue";
} else if (lastDigit >= 4 && lastDigit <= 6) {
  btn.style.backgroundColor = "green";
  video.style.backgroundColor = "green";
} else {
  btn.style.backgroundColor = "purple";
  video.style.backgroundColor = "purple";
}

// Border-radius for image
let img = document.getElementById("profile-img");
if (rollNumber % 2 === 0) {
  img.style.borderRadius = "50px";
} else {
  img.style.borderRadius = "20px";
}