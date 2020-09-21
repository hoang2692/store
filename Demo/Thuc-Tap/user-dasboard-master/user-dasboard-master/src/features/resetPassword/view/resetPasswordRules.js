import i18n from "../../../commons/utils/locales/i18n";

const resetPasswordRules = {
  passwordRules: [
    { required: true, message: i18n.t("resetPassword.errors.missing_password") }
  ],
  rePasswordRules: [
    { required: true, message: i18n.t("resetPassword.errors.missing_repassword") }
  ],
};

export default resetPasswordRules;
