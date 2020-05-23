import React from 'react';
import styled from 'styled-components';
import PropTypes from 'props-type';
import defaultBackground from '../../assets/img/Large';

const Img = styled.img`
  height: 86px;
  width: 72px
  background-size: cover;
`;

export const img = (props) => <Img src={props.background}/>

img.defaultProps = { background: defaultBackground };