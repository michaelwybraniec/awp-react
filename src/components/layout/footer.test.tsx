import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './footer';

describe('Footer Component', () => {
  it('renders footer with default content', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Footer className='custom-footer' />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('custom-footer');
  });

  it('renders brand section with logo and description', () => {
    render(<Footer />);
    expect(screen.getByText('AWP React')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(
      screen.getByText(/Connecting labs and pharmaceutical companies/)
    ).toBeInTheDocument();
  });

  it('renders platform links section', () => {
    render(<Footer />);
    expect(screen.getByText('Platform')).toBeInTheDocument();
    expect(screen.getByText('Find Labs')).toBeInTheDocument();
    expect(screen.getByText('Find Pharmaceuticals')).toBeInTheDocument();
    expect(screen.getByText('Proposals')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders company links section', () => {
    render(<Footer />);
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Careers')).toBeInTheDocument();
  });

  it('renders platform links with correct hrefs', () => {
    render(<Footer />);

    const labsLink = screen.getByText('Find Labs').closest('a');
    const pharmaceuticalsLink = screen
      .getByText('Find Pharmaceuticals')
      .closest('a');
    const proposalsLink = screen.getByText('Proposals').closest('a');
    const dashboardLink = screen.getByText('Dashboard').closest('a');

    expect(labsLink).toHaveAttribute('href', '/labs');
    expect(pharmaceuticalsLink).toHaveAttribute('href', '/pharmaceuticals');
    expect(proposalsLink).toHaveAttribute('href', '/proposals');
    expect(dashboardLink).toHaveAttribute('href', '/dashboard');
  });

  it('renders company links with correct hrefs', () => {
    render(<Footer />);

    const aboutLink = screen.getByText('About').closest('a');
    const contactLink = screen.getByText('Contact').closest('a');
    const careersLink = screen.getByText('Careers').closest('a');

    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(contactLink).toHaveAttribute('href', '/contact');
    expect(careersLink).toHaveAttribute('href', '/careers');
  });

  it('applies default styling classes', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('border-t', 'bg-background');
  });

  it('combines custom className with default classes', () => {
    render(<Footer className='custom-footer' />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('custom-footer', 'border-t', 'bg-background');
  });

  it('has responsive grid layout', () => {
    render(<Footer />);
    const gridContainer = screen.getByText('AWP React').closest('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-4');
  });

  it('renders logo with correct styling', () => {
    render(<Footer />);
    const logo = screen.getByText('A').closest('div');
    expect(logo).toHaveClass('h-8', 'w-8', 'rounded-lg', 'bg-primary');
  });

  it('renders all section headings', () => {
    render(<Footer />);
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(3); // Platform, Company, and Support
    expect(headings[0]).toHaveTextContent('Platform');
    expect(headings[1]).toHaveTextContent('Company');
    expect(headings[2]).toHaveTextContent('Support');
  });

  it('renders all links with hover effects', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');

    // Check that all links have hover classes
    links.forEach(link => {
      expect(link).toHaveClass('hover:text-foreground', 'transition-colors');
    });
  });
});
