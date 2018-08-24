import mediumZoom from "medium-zoom";

export default function() {
  mediumZoom(".post-content img:not(.medium-zoom-image)");
}
