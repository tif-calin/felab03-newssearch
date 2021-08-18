import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(() => cleanup());

  it('renders Search', () => {
    act(() => {
      const { asFragment } = render(<Search query="" setQuery={() => true}/>);
      expect(asFragment()).toMatchSnapshot();
    });
  });
  
});
