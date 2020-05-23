import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import FontSize from '../particles/FontSize';

export const sizes = {
  title : "18px",
  desc : "12px"
}

const Texte = styled.p`
  color: black;
  font-size: ${props => (props.size === sizes.title ? FontSize.size_primary : sizes.desc)}
`

const Title = props => {
  const {size, text} = props;
  return <Texte size={size}>{text}</Texte>
}

Title.defaultProps = {
  size: sizes.title
};

export default Title;