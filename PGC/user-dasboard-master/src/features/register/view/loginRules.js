import i18n from "../../../commons/utils/locales/i18n";

const registerRules = {
  usernameRules: [
    { required: true, message: i18n.t("register.errors.missing_username") }
  ],
  emailRules: [
    { required: true, message: i18n.t("register.errors.missing_email") }
  ],
  firstNameRules: [
    { required: true, message: i18n.t("register.errors.missing_first_name") }
  ],
  lastNameRules: [
    { required: true, message: i18n.t("register.errors.missing_last_name") }
  ],
  passwordRules: [
    { required: true, message: i18n.t("register.errors.missing_password") }
  ],
  phoneRules: [
    { required: true, message: i18n.t("register.errors.missing_phone") }
  ],
  phoneCodeRules: [
    { required: true, message: i18n.t("register.errors.missing_phone_code") }
  ]
};

export default registerRules;
