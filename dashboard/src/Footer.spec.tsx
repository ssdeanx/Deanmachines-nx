import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';

vi.mock('./Footer.module.css', () => ({
  default: {
    container: 'container'
  }
}));

describe('Footer', () => {
  it('renders footer component', () => {
    render(<Footer />);
    expect(screen.getByText('Welcome to Footer!')).toBeDefined();
  });

  it('has correct class', () => {
    const { container } = render(<Footer />);
    expect(container.firstElementChild?.className).toContain('container');
  });
});
