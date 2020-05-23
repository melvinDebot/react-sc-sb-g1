import React from 'react';
import { action } from '@storybook/addon-actions';
import { files } from '@storybook/addon-knobs';

//IMPORT COMPONENT
import Title, {sizes} from '../ui/atoms/Title';
import { Button } from '@storybook/react/demo';
import  Img from '../ui/atoms/img';
import styled from "styled-components";
import { withKnobs, text  } from "@storybook/addon-knobs";
import Large from '../ui/molecules/Large'

export default {
  title : 'Categories',
  component: [Title, Button, Img],
  decorators: [withKnobs]
};

const SmallBlock = styled.div`
  width:88px;
  height:151px;
  display:flex;
  flex-direction : column;
  background-color:#15121C
  justify-content: space-between;
`

export const Small = () => {
  return (
    <SmallBlock>
      <Img />
      <Title text={text("Label", "Just Chatting")} size={sizes.title} />
      <Title text={text("Label", "253,2  k spectateurs")} size={sizes.desc} />
    </SmallBlock>
  )
}
export const LargeVersion = () => {
  return (
    <Large></Large>
  )
}



export const Titre = () => <Title text={text("Label", "Just Chatting")} size={sizes.title} />
export const Description = () => <Title text={text("Label", "253,2  k spectateurs")} size={sizes.desc} />
export const Bouton = () => <Button onClick={action('clicked')}>irl</Button>;
export const Image = () => <Img />

