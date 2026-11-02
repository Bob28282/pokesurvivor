(() => {
  // Simple client-side gate only. The password is visible in public source code.
  const PASSWORD = "avalon";
  const KEY = "pokesurvivor_gate_unlocked";
  const gate = document.getElementById("site-password-gate");
  const form = document.getElementById("site-password-form");
  const input = document.getElementById("site-password");
  const error = document.getElementById("site-password-error");

  if (!gate || !form || !input || !error) return;

  const unlock = () => {
    gate.style.display = "none";
    document.documentElement.style.overflow = "";
    error.textContent = "";
  };

  try {
    if (sessionStorage.getItem(KEY) === "yes") {
      unlock();
      return;
    }
  } catch (_) {}

  document.documentElement.style.overflow = "hidden";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value === PASSWORD) {
      try { sessionStorage.setItem(KEY, "yes"); } catch (_) {}
      unlock();
    } else {
      error.textContent = "Contraseña incorrecta";
      input.value = "";
      input.focus();
    }
  });
})();