import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the personal introduction and contact links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Hello, I’m Yu Hao/ })).toBeInTheDocument();
  expect(screen.getByText(/large internet company in China/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /GitHub/ })).toHaveAttribute('href', 'https://github.com/windcry1');
});
