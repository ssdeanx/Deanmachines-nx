import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';

const mockClasses = {
  button: 'button-mock',
  primary: 'primary-mock',
  secondary: 'secondary-mock',
  small: 'small-mock',
  medium: 'medium-mock',
  large: 'large-mock'
};

vi.mock('./Button.module.css', () => ({
  default: mockClasses
}));

describe('Button', () => {
  it('renders button element', () => {
    render(<Button label="Test" />);
    const button = screen.getByRole('button');
    expect(button).toBeDefined();
  });

  it('displays correct label', () => {
    render(<Button label="Click me" />);
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Click me');
  });

  it('applies primary class when primary prop is true', () => {
    const { container } = render(<Button label="Primary" primary />);
    expect(container.firstElementChild?.className).toContain('primary');
  });

  it('applies size class correctly', () => {
    const { container } = render(<Button label="Large" size="large" />);
    expect(container.firstElementChild?.className).toContain('large');
  });
});
