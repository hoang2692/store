import React from "react";
import BackgroundSource from "../../images/background.png";
import { Typography } from "antd";
import i18n from "../../utils/locales/i18n";

export default function LayoutBackgroundImage(props) {
  const lang = {
    copyright: i18n.t("app.copyright")
  };

  return (
    <div {...props} style={{ ...styles.page, ...props.style }}>
      {props.children}
      {/* <Typography.Text style={styles.copyright}>
        {lang.copyright}
      </Typography.Text> */}
    </div>
  );
}

const styles = {
  page: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${BackgroundSource})`
  },
  copyright: {
    position: "absolute",
    bottom: 24,
    textAlign: "center"
  }
};
