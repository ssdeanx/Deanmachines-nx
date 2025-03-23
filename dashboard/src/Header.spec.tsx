import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('Header', () => {
  it('renders header component', () => {
    render(<Header />);
    expect(screen.getByText('Welcome to Header!')).toBeDefined();
  });

  it('has correct class', () => {
    const { container } = render(<Header />);
    expect(container.firstElementChild?.className).toContain('container');
  });
});
