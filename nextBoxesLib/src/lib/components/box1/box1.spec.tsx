import React from 'react';
import { render } from '@testing-library/react';

import Box1 from './box1';

describe('Box1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Box1>
        <div>test</div>
      </Box1>
    );
    expect(baseElement).toBeTruthy();
  });
});
