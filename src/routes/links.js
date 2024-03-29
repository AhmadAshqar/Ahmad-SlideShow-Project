import PAGES from "./pageModel.js";
import {
  ABOUT_PAGE_LINK,
  CREATE_PIC_PAGE_LINK,
  HOME_PAGE_LINK,
  LOGIN_PAGE_LINK,
  RETURN_TO_HOME_PAGE_LINK,
  SIGNUP_PAGE_LINK,
} from "../services/domService.js";
import { onChangePage } from "./router.js";
import { createPicture } from "./../pictures/services/pictureService.js";
import { login } from "./../users/services/userService.js";
import { signup } from "../users/services/signupService.js";

/********* האזנה לאירועים **********/

// ניתוב דפים
HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
CREATE_PIC_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.CREATE_PIC);
  createPicture();
});
SIGNUP_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.SIGNUP);
  signup();
});
LOGIN_PAGE_LINK.addEventListener("click", () => {
  onChangePage(PAGES.LOGIN);
  login();
});
RETURN_TO_HOME_PAGE_LINK.addEventListener("click", () =>
  onChangePage(PAGES.HOME)
);
