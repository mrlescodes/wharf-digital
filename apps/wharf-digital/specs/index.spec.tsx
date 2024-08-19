import React from 'react';
import { render } from '@testing-library/react';

import HomePage from '../src/pages/index';

describe('HomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePage />);
    expect(baseElement).toBeTruthy();
  });
});
