import { render, screen } from '@testing-library/react';
import { Table, TableColumn } from './Table';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import React from 'react';

vi.mock('./Table.module.css', () => ({
  default: {
    container: 'container'
  }
}));

const mockData = [
  { id: 1, name: 'Item 1', value: 10 },
  { id: 2, name: 'Item 2', value: 20 },
];

const mockColumns: TableColumn<typeof mockData[0]>[] = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Name' },
  { key: 'value', header: 'Value' },
];

describe('Table', () => {
  it('renders table component', () => {
    render(<Table data={mockData} columns={mockColumns} />);
    expect(screen.getByText('ID')).toBeDefined();
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByText('Value')).toBeDefined();
    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
  });

  it('has correct base class', () => {
    const { container } = render(<Table data={mockData} columns={mockColumns} />);
    const tableElement = container.firstElementChild;
    expect(tableElement?.className).toContain('container');
  });
});
