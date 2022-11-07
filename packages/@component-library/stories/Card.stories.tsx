import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '../src';

const meta: Meta = {
  title: 'Card',
  component: Card,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<CardProps> = (args) => (
  <Card {...args}>
    <h1>Hello</h1>
  </Card>
);

export const Active = Template.bind({});
export const Inactive = Template.bind({});
Active.args = {};
