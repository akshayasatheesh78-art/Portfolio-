// Login page functionality
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const phoneInput = document.getElementById("phone").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    const phonePattern = /^[0-9]{10}$/;

    if (phonePattern.test(phoneInput)) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("phoneNumber", phoneInput);
      window.location.href = "index.html";
    } else {
      errorMsg.textContent = "Please enter a valid 10-digit phone number.";
    }
  });
}

// Protect portfolio page
if (window.location.pathname.includes("index.html")) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    window.location.href = "login.html";
  }
}

// Redirect logged-in user away from login page
if (window.location.pathname.includes("login.html") || window.location.pathname.endsWith("/")) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true" && loginForm) {
    window.location.href = "index.html";
  }
}

// Logout functionality
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("phoneNumber");
    window.location.href = "login.html";
  });
}
