import React from 'react';
import defaultBackground from '../../assets/img/Thumbnail.png';
import styled from 'styled-components';

const image = {
  src: defaultBackground,
  alt: 'my image',
};

const ImageStyled = styled.div`
  background-size: cover;
  width: 72px;
  height: 86px;
`

const Img = (props) => (
  <ImageStyled src={image.src}/>
);

export default Img;