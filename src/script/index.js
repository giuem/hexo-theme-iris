import IconInit from "./icon";
import ZoomInit from "./zoom";
import NavInit from "./nav";

function init() {
  IconInit();
  NavInit();
  ZoomInit();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init()
}


