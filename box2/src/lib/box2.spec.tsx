import { render } from '@testing-library/react';

import Box2 from './box2';

describe('Box2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Box2 />);
    expect(baseElement).toBeTruthy();
  });
});
