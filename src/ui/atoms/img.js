import React from 'react';
import backgroundImg from '../../assets/img/Thumbnail.png';

export default {
  title: 'img',
};

const image = {
  src: backgroundImg,
  alt: 'my image',
};

export const Img = () => (
  <img src={image.src} alt={image.alt} />
);