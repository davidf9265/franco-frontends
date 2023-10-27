import { render } from '@testing-library/react';

import NextBoxesLib from './nextBoxesLib';

describe('NextBoxesLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextBoxesLib />);
    expect(baseElement).toBeTruthy();
  });
});
