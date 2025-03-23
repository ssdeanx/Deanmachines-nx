import { render } from '@testing-library/react';

import Navbar, { NavItem } from './navbar';
import React from 'react';
import { describe } from 'vitest';
import { it } from 'vitest';
import { expect } from 'vitest';

const mockItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/',
  },
];

describe('Navbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Navbar
        brand={{ name: 'Test Brand' }}
        items={mockItems}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
