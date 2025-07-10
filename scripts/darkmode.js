document.addEventListener("DOMContentLoaded", () => {
  let darkMode = localStorage.getItem("darkMode");
  const darkModeToggle = document.querySelector("#dark-mode-toggle");

  const enableDarkMode = () => {
    // add class dark mode to the html
    document.documentElement.classList.add("darkmode");
    // update dark mode in the local storage
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    // remove class dark mode from the html
    document.documentElement.classList.remove("darkmode");
    // update dark mode in the local storage
    localStorage.setItem("darkMode", "disabled");
  };

  if (darkMode === "enabled") {
    enableDarkMode();
  }

  darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
      console.log("Dark mode enabled");
    } else {
      disableDarkMode();
      console.log("Dark mode disabled");
    }
  });

  // set the initial state based on local storage
  if (darkMode === "enabled") {
    enableDarkMode();
  }
});
