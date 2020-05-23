import React from 'react';
import styled from 'styled-components';

// import PropTypes from 'props-type';
import defaultBackground from '../../assets/img/Thumbnail.png';

export const photo = {
  imageBg : defaultBackground
}

const img = styled.img`
  height: 86px;
  width: 72px;
  background-image: url('${props => (props.image)}')
  background-size: cover;
`;

const Img = (props) => {
  const { image } = props;
  return <Img src={props.image}/>
}

Img.defaultProps = {
  image : photo.imageBg
}

export default Img;