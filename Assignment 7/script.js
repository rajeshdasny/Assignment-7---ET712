document.addEventListener("DOMContentLoaded", function () {
  const buttonCount = 10;

  const buttonContainer = document.body;

  for (let i = 1; i <= buttonCount; i++) {
      const button = document.createElement("button");
      button.innerText = `Button ${i}`;
      button.addEventListener("click", () => openModal());
      buttonContainer.appendChild(button);
  }
});

function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
});
