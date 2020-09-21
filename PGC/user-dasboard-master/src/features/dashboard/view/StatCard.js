import React from "react";
import { Col, Typography, Divider, Row } from "antd";
import { getTheme } from "../../../commons/theme";
import i18n from "../../../commons/utils/locales/i18n";

const { colors } = getTheme();

const styles = {
  container: {
    minHeight: "5em"
    // padding: 5
  },
  body: {
    height: "10em",
    borderRadius: 14,
    textAlign: "left",
    padding: "1em"
  },
  statName: {
    color: colors.text_color,
    fontFamily: "HelveticaNeue",
    fontSize: "1em",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.57,
    letterSpacing: "normal"
  },
  statNumber: {
    fontFamily: "HelveticaNeue",
    fontSize: "2.3em",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.06,
    letterSpacing: "normal",
    color: colors.text_color
  },
  currencyWrapper: {
    background: "red",
    padding: 0,
    margin: 0
  }
};

function StartCard(props) {
  const { name, number, backgroundColor, icon, footer, ...rest } = props;
  const lang = {
    currency: i18n.t("app.currency_name")
  };

  return (
    <Col {...rest} style={styles.container}>
      <div style={{ ...styles.body, ...{ background: backgroundColor } }}>
        <Row gutter={16}>
          <Col span={20}>
            <Typography.Text style={styles.statName}>
              {name || ""}
            </Typography.Text>
          </Col>
          <Col span={4}>{icon && icon}</Col>
        </Row>
        <div>
          <Typography.Text style={{ ...styles.statNumber }}>
            {number || ""}
          </Typography.Text>
          <Typography.Text
            style={{
              ...styles.statNumber,
              fontSize: "1.3em",
              marginLeft: 10
            }}
          >
            {lang.currency}
          </Typography.Text>
        </div>
        <Divider style={{ marginBottom: "0.5em", marginTop: "1em" }} />
        {footer && footer}
      </div>
    </Col>
  );
}

export default StartCard;
