import React from 'react';
import defaultBackground from '../../assets/img/Thumbnail.png';
import styled from 'styled-components';

const image = {
  src: defaultBackground,
  alt: 'my image',
};

const ImageStyled = styled.div`
  background-image: ${image.src};
  background-size: cover;
  width: 72px;
  height: 86px;
`

const Img = (props) => (
  <ImageStyled/>
);

export default Img;