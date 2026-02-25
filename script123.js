const toggleBtn = document.getElementById("themeToggle");
let darkMode = false;

toggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark");

    if (darkMode) {
        document.documentElement.style.setProperty("--bg-color", "#121212");
        document.documentElement.style.setProperty("--card-color", "#1f1f1f");
        document.documentElement.style.setProperty("--text-color", "#ffffff");
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        document.documentElement.style.setProperty("--bg-color", "#f5f5f5");
        document.documentElement.style.setProperty("--card-color", "white");
        document.documentElement.style.setProperty("--text-color", "#111");
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});