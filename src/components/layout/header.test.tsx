import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './header';

describe('Header Component', () => {
  it('renders header with default content', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Header className='custom-header' />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('custom-header');
  });

  it('renders logo and navigation', () => {
    render(<Header />);
    expect(screen.getByText('AWP React')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Labs')).toBeInTheDocument();
    expect(screen.getByText('Pharmaceuticals')).toBeInTheDocument();
    expect(screen.getByText('Proposals')).toBeInTheDocument();
  });

  it('renders user menu buttons', () => {
    render(<Header />);
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('applies default styling classes', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('border-b', 'bg-background/95', 'backdrop-blur');
  });

  it('combines custom className with default classes', () => {
    render(<Header className='custom-header' />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('custom-header', 'border-b', 'bg-background/95');
  });

  it('renders navigation links with correct hrefs', () => {
    render(<Header />);

    const dashboardLink = screen.getByText('Dashboard').closest('a');
    const labsLink = screen.getByText('Labs').closest('a');
    const pharmaceuticalsLink = screen
      .getByText('Pharmaceuticals')
      .closest('a');
    const proposalsLink = screen.getByText('Proposals').closest('a');

    expect(dashboardLink).toHaveAttribute('href', '/dashboard');
    expect(labsLink).toHaveAttribute('href', '/labs');
    expect(pharmaceuticalsLink).toHaveAttribute('href', '/pharmaceuticals');
    expect(proposalsLink).toHaveAttribute('href', '/proposals');
  });

  it('renders logo with correct link', () => {
    render(<Header />);
    const logoLink = screen.getByText('A').closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('has responsive navigation classes', () => {
    render(<Header />);
    const nav = screen.getByText('Dashboard').closest('nav');
    expect(nav).toHaveClass('hidden', 'md:flex');
  });
});
