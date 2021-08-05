import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());

  it('renders Article', () => {
    const { asFragment } = render(<Article article={{ 
      title: 'Florida man is just misunderstood', 
      description: 'He\'s actually not a bad guy at all.',
      author: 'Florida Man Blog'
    }}/>);
    expect(asFragment()).toMatchSnapshot();
  });
  
});
