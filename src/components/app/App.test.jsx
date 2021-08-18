import React from 'react';
import { 
  render, 
  cleanup,
  fireEvent,
  screen,
  waitFor
} from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());

  it('renders App', async () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('test search functionality', async () => {
    render(<App />);

    const searchInput = screen.getByDisplayValue('kahnawake');
    
    // search for florida 
    fireEvent.change(searchInput, { target: { value: 'florida' } });
    
    waitFor(async () => {
      const newsList = await screen.findByRole('list');
      expect(newsList).not.toBeEmptyDOMElement();
      expect(newsList).toContainHTML('</li>');

      const newsItem = await newsList.findByTestId('article');
      expect(newsItem).not.toBeEmptyDOMElement();
    }, 9000);

  });

});
