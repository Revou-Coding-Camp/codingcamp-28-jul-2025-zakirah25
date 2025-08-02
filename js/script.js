// Greet the user by name
const userName = prompt("What's your name?");
const greeting = document.getElementById("greeting");
if (userName) {
  greeting.textContent = `Hi ${userName}, Welcome To Website`;
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("messageText").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  // Show the values
  document.getElementById("result").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});
