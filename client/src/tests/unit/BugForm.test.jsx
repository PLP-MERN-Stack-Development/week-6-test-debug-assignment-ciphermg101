import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';

test('renders form and validates input', () => {
  const handleSubmit = vi.fn();
  render(<BugForm onSubmit={handleSubmit} />);
  fireEvent.click(screen.getByText(/report bug/i));
  expect(screen.getByTestId('form-error')).toHaveTextContent('Title is required');
  fireEvent.change(screen.getByTestId('title-input'), { target: { value: 'Bug' } });
  fireEvent.click(screen.getByText(/report bug/i));
  expect(handleSubmit).toHaveBeenCalledWith({ title: 'Bug', description: '' });
}); 