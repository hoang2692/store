import i18n from "../../../commons/utils/locales/i18n";

const loginRules = {
  emailRules: [
    { required: true, message: i18n.t("login.errors.missing_email") }
  ],
  passwordRules: [
    { required: true, message: i18n.t("login.errors.missing_password") }
  ]
};

export default loginRules;
