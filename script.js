const email = document.getElementById("mail");
const form = document.querySelector("form");
const emailError = document.querySelector("#mail + span.error");
const confirmation = document.querySelector(".confirmation");
const container = document.querySelector(".container");
const success = document.querySelector(".success");
const dismiss = document.querySelector(".dismiss");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();

    event.preventDefault();
  } else {
    event.preventDefault();
    console.log("Email is valid");
    container.style.display = "none";
    success.style.display = "flex";
    confirmation.innerHTML =
      "A confirmation email has been sent to <strong>" +
      email.value +
      "</strong>. Please open it and click the button inside to confirm your subscription.";
  }
});

dismiss.addEventListener("click", () => {
  success.style.display = "none";
  container.style.display = "flex";
  form.reset();
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You must put your e-mail!";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Your e-mail must be at least ${email.minLength} characters, right now you have ${email.value.length}.`;
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  }

  emailError.className = "error active";
}
