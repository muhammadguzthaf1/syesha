document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#celebrate-button").addEventListener("click", () => {
    for (let i = 0; i < 30; i++) {
      let confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 1000);
    }
  });
});
