import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar';

const meta = {
  title: 'Navigation/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onNavChange: { action: 'navChanged' },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

const defaultItems = [
  { label: 'Dashboard', href: '/', icon: '🏠', active: true },
  { label: 'Users', href: '/users', icon: '👥' },
  { label: 'Analytics', href: '/analytics', icon: '📊' },
  { label: 'Settings', href: '/settings', icon: '⚙️' },
];

export const Default: Story = {
  args: {
    brand: {
      name: 'DashPro',
      logo: '⚡',
    },
    items: defaultItems,
  },
};

export const WithoutIcons: Story = {
  args: {
    brand: {
      name: 'DashPro',
    },
    items: defaultItems.map(({ icon, ...item }) => item),
  },
};

export const CustomBranding: Story = {
  args: {
    brand: {
      name: 'Enterprise',
      logo: '🏢',
    },
    items: defaultItems,
  },
};

export const Minimal: Story = {
  args: {
    brand: {
      name: 'Mini',
    },
    items: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
  },
};
