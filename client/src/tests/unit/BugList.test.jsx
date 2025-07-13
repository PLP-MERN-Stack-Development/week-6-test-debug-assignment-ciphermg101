import { render, screen } from '@testing-library/react';
import BugList from '../../components/BugList';

test('renders empty state', () => {
  render(<BugList bugs={[]} onUpdate={vi.fn()} onDelete={vi.fn()} />);
  expect(screen.getByText(/no bugs reported/i)).toBeInTheDocument();
}); 