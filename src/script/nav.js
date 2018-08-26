function bindEvent() {
  const e = document.getElementById("nav-toggle");
  e.addEventListener("click", function() {
    document.documentElement.classList.toggle("nav-open");
  });
}

export default bindEvent;
