// darkmode
  // Function to toggle dark mode on and off
  function toggleDarkMode() {
    if (document.body.classList.contains("light-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
}

  // Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add("light-mode");
    localStorage.setItem("darkMode", "enabled");
}

  // Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove("light-mode");
    localStorage.setItem("darkMode", "disabled");
}

