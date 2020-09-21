import React from "react";

const styles = {
  icon: {
    height: "2em"
  }
};

const brandIcons = {
  momo: <img src={require("./ic-momo.png")} style={styles.icon} alt="momo" />,
  gpay: <img src={require("./ic-paypal.png")} style={styles.icon} alt="gpay" />,
  paypal: <img src={require("./ic-paypal.png")} style={styles.icon} alt="paypal" />,
  zalopay: <img src={require("./ic-zalopay.png")} style={styles.icon} alt="opay" />,
  opay: <img src={require("./ic-opay.png")} style={styles.icon} alt="opay" />,
  cse: <img src={require("./ic-cse.png")} style={styles.icon} alt="cse" />,
  btc: <img src={require("./ic-paypal.png")} style={styles.icon} alt="btc" />,
  eth: <img src={require("./ic-paypal.png")} style={styles.icon} alt="eth" />,
  ltc: <img src={require("./ic-paypal.png")} style={styles.icon} alt="ltc" />,
  bch: <img src={require("./ic-paypal.png")} style={styles.icon} alt="bch" />
};

export default brandIcons;
