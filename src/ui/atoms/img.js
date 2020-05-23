import React from 'react';
// import PropTypes from 'props-type';
import defaultBackground from '../../assets/img/Thumbnail.png';

const image = {
  src: defaultBackground,
  alt: 'my image',
};



const Img = (props) => (
  <img src={image.src} alt={image.alt} />
);

export default Img;