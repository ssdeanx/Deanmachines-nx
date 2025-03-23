import { render, screen } from '@testing-library/react';
import { Button } from './button';
import { describe, it, expect } from 'vitest';

describe('Button', () => {
  it('renders button', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('shows content', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDefined();
  });

  it('renders with variant', () => {
    render(<Button variant="primary">Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
  });

  it('renders with size', () => {
    render(<Button size="large">Test</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
  });
});
