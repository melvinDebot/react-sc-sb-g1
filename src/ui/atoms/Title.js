import React from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import FontSize from '../particles/FontSize';

export const sizes = {
  title : "18px",
  desc : "12px"
}

const Texte = styled.h1`
  color: ${(props) => props.color};
  margin:0;
  margin-top:5px;
  font-family: roboto;
  padding:0;
  font-size: ${sizes.desc}
`

const Title = props => {
  const {size, text} = props;
  return <Texte size={size}>{text}</Texte>
}


export default Title;