import { render, screen } from '@testing-library/react';
import { Input } from './Input';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';

vi.mock('./Input.module.css', () => ({
  default: {
    container: 'container',
    input: 'input',
    label: 'label',
    error: 'error',
    errorText: 'errorText'
  }
}));

describe('Input', () => {
  it('renders input element', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();
  });

  it('displays label when provided', () => {
    render(<Input label="Username" />);
    expect(screen.getByText('Username')).toBeDefined();
  });

  it('shows error message', () => {
    render(<Input error="Required field" />);
    expect(screen.getByText('Required field')).toBeDefined();
  });

  it('passes through html attributes', () => {
    const { container } = render(<Input placeholder="Enter text" />);
    const input = container.querySelector('input');
    expect(input?.getAttribute('placeholder')).toBe('Enter text');
  });
});
