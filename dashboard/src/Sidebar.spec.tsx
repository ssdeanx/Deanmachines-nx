import { render, screen } from '@testing-library/react';
import { Sidebar, SidebarItem } from './Sidebar';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';

vi.mock('./Sidebar.module.css', () => ({
  default: {
    container: 'container'
  }
}));

const mockItems: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
  },
];

describe('Sidebar', () => {
  it('renders sidebar component', () => {
    render(<Sidebar items={[]} />);
    const element = screen.getByText('Welcome to Sidebar!');
    expect(element).toBeTruthy();
  });

  it('has correct base class', () => {
    const { container } = render(<Sidebar items={mockItems} />);
    const sidebarElement = container.firstElementChild;
    expect(sidebarElement?.className).toContain('container');
  });
});
