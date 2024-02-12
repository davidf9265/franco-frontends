import type { Meta, StoryObj } from '@storybook/react';
import { Box2 } from './box2';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Box2> = {
  component: Box2,
  title: 'Box2',
};
export default meta;
type Story = StoryObj<typeof Box2>;

export const Primary = {
  args: {},
};
