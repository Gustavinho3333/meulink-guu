const button = document.getElementById('toggle-theme');
button.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const mode = document.body.classList.contains('dark') ? '🌙' : '🌞';
  button.textContent = mode;
});
