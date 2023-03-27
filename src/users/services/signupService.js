import {
    SIGNUP_CITY,
    SIGNUP_COUNTRY,
    SIGNUP_EMAIL,
    SIGNUP_FIRST_NAME,
    SIGNUP_HOUSE_NUMBER,
    SIGNUP_LAST_NAME,
    SIGNUP_PASSWORD,
    SIGNUP_RE_PASSWORD,
    SIGNUP_STATE,
    SIGNUP_STREET,
    SIGNUP_ZIP,
    SIGNUP_FIRST_NAME_ERROR,
    SIGNUP_LAST_NAME_ERROR,
    SIGNUP_STATE_ERROR,
    SIGNUP_COUNTRY_ERROR,
    SIGNUP_CITY_ERROR,
    SIGNUP_STREET_ERROR,
    SIGNUP_HOUSE_NUMBER_ERROR,
    SIGNUP_ZIP_ERROR,
    SIGNUP_EMAIL_ERROR,
    SIGNUP_PASSWORD_ERROR,
    SIGNUP_RE_PASSWORD_ERROR,
    SIGNUP_SUBMIT_BTN,
    SIGNUP_PHONE,
    SIGNUP_PHONE_ERROR,
    SIGNUP_CANCEL_BTN,
} from "../../services/domService.js";
import useForm from "./../../forms/useForm.js";
import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import User from "../models/User.js";
import { onChangePage } from "../../routes/router.js";
import PAGES from "../../routes/pageModel.js";

export const signup = () => {
    const INITIAL_SIGNUP_FORM = {
        firstname: "",
        lastname: "",
        state: "",
        country: "",
        city: "",
        street: "",
        housenumber: "",
        zip: "",
        email: "",
        phone: "",
        password: "",
        repassword: "",
    };

    const SIGNUP_SCHEMA = {
        firstname: "string",
        lastname: "string",
        state: "string",
        country: "string",
        city: "string",
        street: "string",
        housenumber: "number",
        zip: "number",
        email: "email",
        phone: "number",
        password: "password",
        repassword: "password",
    };

    const SIGNUP_INPUTS_ARRAY = [
        SIGNUP_FIRST_NAME,
        SIGNUP_LAST_NAME,
        SIGNUP_STATE,
        SIGNUP_COUNTRY,
        SIGNUP_CITY,
        SIGNUP_STREET,
        SIGNUP_HOUSE_NUMBER,
        SIGNUP_ZIP,
        SIGNUP_EMAIL,
        SIGNUP_PHONE,
        SIGNUP_PASSWORD,
        SIGNUP_RE_PASSWORD
    ];

    const SIGNUP_ERROR_ARRAY = [
        SIGNUP_FIRST_NAME_ERROR,
        SIGNUP_LAST_NAME_ERROR,
        SIGNUP_STATE_ERROR,
        SIGNUP_COUNTRY_ERROR,
        SIGNUP_CITY_ERROR,
        SIGNUP_STREET_ERROR,
        SIGNUP_HOUSE_NUMBER_ERROR,
        SIGNUP_ZIP_ERROR,
        SIGNUP_EMAIL_ERROR,
        SIGNUP_PHONE_ERROR,
        SIGNUP_PASSWORD_ERROR,
        SIGNUP_RE_PASSWORD_ERROR
    ];

    const handleSignSubmit = data => {
        console.log(data);
        try {
            const user = new User(data, users);
            onReset(
                SIGNUP_INPUTS_ARRAY,
                SIGNUP_ERROR_ARRAY,
                SIGNUP_SUBMIT_BTN,
                sign.handleReset
            );
            users.push(user);
            onChangePage(PAGES.HOME);
        } catch (error) {
            console.log(error);
        }
    };
    const sign = useForm(INITIAL_SIGNUP_FORM, SIGNUP_SCHEMA, handleSignSubmit);

    SIGNUP_FIRST_NAME.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_FIRST_NAME_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });
    SIGNUP_LAST_NAME.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_LAST_NAME_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });
    SIGNUP_STATE.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_STATE_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });
    SIGNUP_COUNTRY.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_COUNTRY_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });
    SIGNUP_CITY.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_CITY_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });
    SIGNUP_STREET.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_STREET_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });
    SIGNUP_HOUSE_NUMBER.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_HOUSE_NUMBER_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });
    SIGNUP_ZIP.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_ZIP_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });
    SIGNUP_EMAIL.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_EMAIL_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });
    SIGNUP_PHONE.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_PHONE_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });
    SIGNUP_RE_PASSWORD.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_RE_PASSWORD_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });


    SIGNUP_PASSWORD.addEventListener("input", event => {
        onInputChange(
            event,
            SIGNUP_PASSWORD_ERROR,
            SIGNUP_SUBMIT_BTN,
            sign.handleInputChange,
            sign.handleDisableSubmitBtn
        );
    });

    SIGNUP_SUBMIT_BTN.addEventListener("click", sign.onSubmit);
    SIGNUP_CANCEL_BTN.addEventListener("click", () =>
        onReset(SIGNUP_INPUTS_ARRAY, SIGNUP_ERROR_ARRAY, SIGNUP_SUBMIT_BTN, sign.handleReset)
    );
};