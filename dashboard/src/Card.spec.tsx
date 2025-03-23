import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';

vi.mock('./Card.module.css', () => ({
  default: {
    card: 'card',
    outlined: 'outlined',
    title: 'title',
    content: 'content'
  }
}));

describe('Card', () => {
  it('renders title correctly', () => {
    render(<Card title="Test Card" />);
    const titleElement = screen.getByText('Test Card');
    expect(titleElement).toBeTruthy();
  });

  it('renders children content', () => {
    render(
      <Card title="Test Card">
        <div>Test Content</div>
      </Card>
    );
    const contentElement = screen.getByText('Test Content');
    expect(contentElement).toBeTruthy();
  });

  it('applies correct class for default variant', () => {
    render(<Card title="Test Card" />);
    const cardElement = screen.getByText('Test Card').closest('div');
    expect(cardElement?.className.includes('card')).toBeTruthy();
  });

  it('applies correct class for outlined variant', () => {
    render(<Card title="Test Card" variant="outlined" />);
    const cardElement = screen.getByText('Test Card').closest('div');
    expect(cardElement?.className.includes('outlined')).toBeTruthy();
  });
});
