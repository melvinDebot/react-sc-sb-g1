import React from 'react';
import { action } from '@storybook/addon-actions';
import { files } from '@storybook/addon-knobs';

//IMPORT COMPONENT
import Title, {sizes} from '../ui/atoms/Title';
import Desc from '../ui/atoms/Description';
import { Button } from '@storybook/react/demo';
import  Img from '../ui/atoms/img';
import styled from "styled-components";
import { withKnobs, text  } from "@storybook/addon-knobs";

import {SmallBlock } from '../ui/molecules/Small';


export default {
  title : 'Categories',
  component: [Title, Button, Img],
  decorators: [withKnobs]
};

export const Small = () => {
  return(
    <SmallBlock>
      <Img />
      <Title text={text("Label", "Just Chatting")} size={sizes.title} />
      <Desc description="253,2  k spectateurs" />
    </SmallBlock>
  )
}


