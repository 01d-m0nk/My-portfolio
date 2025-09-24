
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};


const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "⏳ Sending...";

    try {
      const data = new FormData(form);
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
      });

      if (res.ok) {
        status.textContent = "✅ Message sent successfully!";
        form.reset();
      } else {
        status.textContent = "❌ Failed to send. Try again.";
      }
    } catch (error) {
      status.textContent = "⚠️ Network error. Please try again.";
    }
  });
