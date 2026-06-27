import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the personal introduction and contact links', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /把产品想法/ })).toBeInTheDocument();
  expect(screen.getByText(/iOS 研发工程师/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /查看 GitHub/ })).toHaveAttribute('href', 'https://github.com/windcry1');
});
