import "intersection-observer";
import IconInit from "./icon";
import ZoomInit from "./zoom";
import NavInit from "./nav";
import QuickLinkInit from "./quicklink";

function init() {
  IconInit();
  NavInit();
  ZoomInit();
  QuickLinkInit();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
