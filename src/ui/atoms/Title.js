import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FontSize from '../particles/FontSize';

export const sizes = {
  title : "18px",
  desc : "12px"
}

const Title = (textColor = "white", text) => {
  const TitleColor = styled.h1`
    color = ${textColor}
    margin:0;
    margin-top:5px;
    padding:0;
    font-size: ${sizes.desc}
  `
  return (
    <TitleColor>{text}</TitleColor>
  )
}

Title.propTypes = {
  textColor: PropTypes.string
};


export default Title;