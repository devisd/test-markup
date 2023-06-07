window.onload = function () {
  const day = new Date().toLocaleDateString();
  document.getElementById("day").innerHTML = day;

  window.setInterval(function () {
    const time = new Date().toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
  }, 1000);
};
