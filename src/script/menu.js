function bindEvent() {
  const cl = document.documentElement.classList;
  const openIdentity = "nav-open";
  const toggle = document.getElementById("nav-toggle");
  const close = document.getElementById("nav-close");
  if (toggle) {
    toggle.addEventListener("click", function() {
      cl.add(openIdentity)
    });
  }

  if (close) {
    close.addEventListener("click", function() {
      cl.remove(openIdentity)
    });
  }
}

export default bindEvent;
