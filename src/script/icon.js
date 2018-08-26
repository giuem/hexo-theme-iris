import { dom, library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendar,
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from "@fortawesome/free-regular-svg-icons";
import { faTag, faFolder, faHeart } from "@fortawesome/free-solid-svg-icons";

library.add(
  faCalendar,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faTag,
  faFolder,
  faHeart
);

export default function init() {
  dom.i2svg();
}
