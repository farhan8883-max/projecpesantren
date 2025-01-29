// Ambil nama pengguna dari Local Storage
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

// Jika tidak ada user yang login, arahkan ke halaman login
if (!loggedInUser) {
  alert("Anda harus login terlebih dahulu!");
  window.location.href = "login.html";
} else {
  // Tampilkan nama user di dashboard
  const usernameSpan = document.getElementById("username");
  usernameSpan.textContent = loggedInUser.username; // Ambil username dari Local Storage
}

// Tombol Logout
const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", () => {
  // Hapus data login dari Local Storage
  localStorage.removeItem("loggedInUser");
  alert("Anda telah logout.");
  // Arahkan ke halaman login
  window.location.href = "index.html";
});

function openMenu() {
  document.getElementById('sideMenu').style.left = '0';
}

function closeMenu() {
  document.getElementById('sideMenu').style.left = '-250px';
}