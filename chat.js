// Inisialisasi elemen DOM
const formTitle = document.getElementById("form-title");
const authForm = document.getElementById("auth-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit-button");
const switchText = document.getElementById("switch-text");
const switchLink = document.getElementById("switch-link");
const errorMessage = document.getElementById("error-message");

// State untuk mengetahui apakah sedang di mode login atau registrasi
let isLoginMode = false;

// Fungsi registrasi
function registerUser(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.some((user) => user.username === username);

  if (userExists) {
    return { success: false, message: "Username sudah digunakan." };
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true, message: "Registrasi berhasil!" };
}

// Fungsi login
function loginUser(username, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    return { success: true, message: "Login berhasil!" };
  } else {
    return { success: false, message: "Username atau password salah." };
  }
}

// Event listener untuk submit form
authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (isLoginMode) {
    // Mode Login
    const result = loginUser(username, password);
    if (result.success) {
      alert(result.message);
      window.location.reload(); // Ganti dengan redirection ke halaman utama
    } else {
      errorMessage.textContent = result.message;
    }
  } else {
    // Mode Registrasi
    const result = registerUser(username, password);
    if (result.success) {
      alert(result.message);
      switchToLogin();
    } else {
      errorMessage.textContent = result.message;
    }
  }
});

// Fungsi untuk mengubah ke mode login
function switchToLogin() {
  isLoginMode = true;
  formTitle.textContent = "Login";
  submitButton.textContent = "Login";
  switchText.innerHTML = 'Belum punya akun? <a href="#" id="switch-link">Daftar di sini</a>';
  errorMessage.textContent = "";
}

// Fungsi untuk mengubah ke mode registrasi
function switchToRegister() {
  isLoginMode = false;
  formTitle.textContent = "Registrasi";
  submitButton.textContent = "Daftar";
  switchText.innerHTML = 'Sudah punya akun? <a href="#" id="switch-link">Login di sini</a>';
  errorMessage.textContent = "";
}

// Event listener untuk switch mode
switchText.addEventListener("click", (e) => {
  e.preventDefault();
  if (isLoginMode) {
    switchToRegister();
  } else {
    switchToLogin();
  }
});
// Fungsi login
function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.username === username && user.password === password);
  
    if (user) {
      // Simpan data pengguna yang sedang login ke Local Storage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      return { success: true, message: "Login berhasil!" };
    } else {
      return { success: false, message: "Username atau password salah." };
    }
  }
  
  // Event listener untuk submit form
  authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
  
    if (isLoginMode) {
      // Mode Login
      const result = loginUser(username, password);
      if (result.success) {
        alert(result.message);
        window.location.href = "dashboard.html"; // Arahkan ke halaman dashboard
      } else {
        errorMessage.textContent = result.message;
      }
    } else {
      // Mode Registrasi
      const result = registerUser(username, password);
      if (result.success) {
        alert(result.message);
        switchToLogin();
      } else {
        errorMessage.textContent = result.message;
      }
    }
  });
  
