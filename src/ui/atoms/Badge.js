import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

export const sizeBadge = {
    large: "60px",
    small: "29px"
};

const BadgeStyle = styled.div`
  background-color: #3A2E5D
  width: ${props=> (props.size)};
  height: 18px;
  text-align:center;
  color:white;
`

const Badge = ({ size, text }) => (
  <BadgeStyle>{text}</BadgeStyle>
);

export default Badge;

// Badge.defaultProps = {
//     color: colors.grey
// };


