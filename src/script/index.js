import "intersection-observer";
import IconInit from "./icon";
import ZoomInit from "./zoom";
import NavInit from "./nav";
// import QuickLinkInit from "./quicklink";
import TocInit from "./toc";

function init() {
  IconInit();
  NavInit();
  ZoomInit();
  // QuickLinkInit();
  TocInit();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
