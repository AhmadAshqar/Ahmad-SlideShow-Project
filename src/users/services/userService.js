import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import PAGES from "../../routes/pageModel.js";
import { onChangePage } from "../../routes/router.js";
import {
  LOGIN_EMAIL_FIELD,
  LOGIN_EMAIL_ERROR,
  LOGIN_PASSWORD_FIELD,
  LOGIN_PASSWORD_ERROR,
  LOGIN_SUBMIT_BTN,
} from "../../services/domService.js";
import useForm from "./../../forms/useForm.js";

export const login = () => {
  const INITIAL_LOGIN_FORM = {
    email: "",
    password: "",
  };

  const LOGIN_SCHEMA = {
    email: "email",
    password: "password",
  };

  const LOGIN_INPUTS_ARRAY = [LOGIN_EMAIL_FIELD, LOGIN_PASSWORD_FIELD];
  const LOGIN_ERROR_ARRAY = [LOGIN_EMAIL_ERROR, LOGIN_PASSWORD_ERROR];

  const handleLoginSubmit = data => {
    console.log(data);
    try {
      const email = document.getElementById('login-email-field').value;
      const password = document.getElementById('login-password-field').value;
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) {
        throw new Error('User email or password are incorrect');
      } else {
        const userData = {
          id: user._id,
          isAdmin: user.isAdmin ? 'true' : 'false',
          isBusiness: user.isBusiness ? 'true' : 'false',
        };
        const existingUserData = localStorage.getItem(`user_${user._id}`);
        if (existingUserData) {
          const existingUserObj = JSON.parse(existingUserData);
          const updatedUserObj = { ...existingUserObj, ...userData };
          localStorage.setItem(`user_${user._id}`, JSON.stringify(updatedUserObj));
        } else {
          localStorage.setItem(`user_${user._id}`, JSON.stringify(userData));
        }
        onChangePage(PAGES.HOME);
        const logout = document.getElementById("logout-page-link")
        logout.classList.replace("d-none", "d-block")
        const addpic = document.getElementById("create-pic-link")
        addpic.classList.replace("d-none", "d-block")
        const signup = document.getElementById("signup-page-link")
        signup.classList.replace("d-block", "d-none")
        const login = document.getElementById("login-page-link")
        login.classList.replace("d-block", "d-none")

      };
    } catch (error) {
      console.log(error);
    }
    onReset(
      LOGIN_INPUTS_ARRAY,
      LOGIN_ERROR_ARRAY,
      LOGIN_SUBMIT_BTN,
      form.handleReset
    );
  };

  const form = useForm(INITIAL_LOGIN_FORM, LOGIN_SCHEMA, handleLoginSubmit);

  LOGIN_EMAIL_FIELD.addEventListener("input", event => {
    onInputChange(
      event,
      LOGIN_EMAIL_ERROR,
      LOGIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  LOGIN_PASSWORD_FIELD.addEventListener("input", event => {
    onInputChange(
      event,
      LOGIN_PASSWORD_ERROR,
      LOGIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  LOGIN_SUBMIT_BTN.addEventListener("click", form.onSubmit);
};
