import i18n from "../../../commons/utils/locales/i18n";

const sendRequestRules = {
  amountRules: [
    { required: true, message: i18n.t("send.form.errors.missing_amount") }
  ],
  addressRules: [
    { required: true, message: i18n.t("send.form.errors.missing_address") }
  ],
  twoFaRules: [
    { required: true, message: i18n.t("send.form.errors.missing_2fa") }
  ]
};

export default sendRequestRules;
