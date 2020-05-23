import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import FontSize from '../particles/FontSize';

export const sizes = {
  title : "18px",
  desc : "12px"
}

const Texte = styled.h1`
  color: white;
  margin:0;
  padding:0;
  font-size: ${sizes.title}
`

const Title = props => {
  const {size, text} = props;
  return <Texte size={size}>{text}</Texte>
}




export default Title;