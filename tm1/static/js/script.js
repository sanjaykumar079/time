function updateOptions() {
  const field = document.getElementById('field').value;
  const year = document.getElementById('year').value;
  window.location.href = `/select_options?field=${field}&year=${year}`;
}