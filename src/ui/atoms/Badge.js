import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

export const colors = {
    purple: "purple",
    grey: "green"
};

const BadgeWrapper = styled.span`
  background: ${props => (props.color === colors.purple ? Colors.brand_primary : Colors.neutral_grey)};
  margin-right: 8px;
  padding: 4px 8px;
  border-radius: 22px;
  color: white;
  font-family: sans-serif;
  font-size: 12px;
`;

const Badge = props => {
    const { text, color } = props;
    return <BadgeWrapper color={color}>{text}</BadgeWrapper>;
};

Badge.defaultProps = {
    color: colors.grey
};

export default Badge;
