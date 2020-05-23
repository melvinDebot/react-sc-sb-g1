// IMPORT DES LIBRAIRIE
import React from 'react';
import styled from 'styled-components';
// IMPORT DES COMPONENTS
import Badge from '../atoms/Badge';
import Img from '../atoms/img';
import Title from '../atoms/Title';

// STYLE DU COMPONENT
const largeStyle = styled.div`
  width: 344px;
  height: 86px;
  display: flex;
`

export const Large = () => {
  return(
    <largeStyle>
      <Img/>
      <div>
        <Title/>
        <Badge/>
      </div>
    </largeStyle>
  )
}
