import PAGES from "../../routes/pageModel.js";
import { onChangePage } from "../../routes/router.js";

const logoutButton = document.getElementById('logout-page-link');
logoutButton.addEventListener('click', function () {
    localStorage.removeItem('user');
    user = null;
    const logout = document.getElementById("logout-page-link")
    logout.classList.replace("d-block", "d-none")
    const addpic = document.getElementById("create-pic-link")
    addpic.classList.replace("d-block", "d-none")
    const signup = document.getElementById("signup-page-link")
    signup.classList.replace("d-none", "d-block")
    const login = document.getElementById("login-page-link")
    login.classList.replace("d-none", "d-block")
    onChangePage(PAGES.HOME);
});
