
let progressSpans = document.querySelectorAll(".the-bar span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((number) => startCount(number));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

let btnUp = document.querySelector(".btn");
window.onscroll = function () {
  if (window.scrollY >= 800){
    btnUp.style.display = "block";
  }else{
    btnUp.style.display = "none";
  }
};

btnUp.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior:"smooth",
  });
};