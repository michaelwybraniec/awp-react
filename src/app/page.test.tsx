import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('renders the main page content', () => {
    render(<Home />);
    expect(screen.getByText(/Connect Labs &/)).toBeInTheDocument();
  });

  it('renders hero section with main heading', () => {
    render(<Home />);
    expect(screen.getByText(/Connect Labs &/)).toBeInTheDocument();
    expect(screen.getAllByText('Pharmaceuticals')).toHaveLength(2); // Header nav + hero heading
  });

  it('renders hero section description', () => {
    render(<Home />);
    expect(
      screen.getByText(/AWP React Platform bridges the gap/)
    ).toBeInTheDocument();
  });

  it('renders hero section call-to-action buttons', () => {
    render(<Home />);
    expect(screen.getAllByText('Get Started')).toHaveLength(2); // Header button + hero button
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders features section heading', () => {
    render(<Home />);
    expect(screen.getByText('Why Choose AWP React?')).toBeInTheDocument();
  });

  it('renders features section description', () => {
    render(<Home />);
    expect(
      screen.getByText(/Our platform provides everything you need/)
    ).toBeInTheDocument();
  });

  it('renders all three feature cards', () => {
    render(<Home />);
    expect(screen.getByText('Lab Discovery')).toBeInTheDocument();
    expect(screen.getByText('Pharma Partnerships')).toBeInTheDocument();
    expect(screen.getByText('Collaboration Tools')).toBeInTheDocument();
  });

  it('renders feature card descriptions', () => {
    render(<Home />);
    expect(
      screen.getByText(/Find and connect with research laboratories/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Connect with pharmaceutical companies/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Built-in tools for proposal management/)
    ).toBeInTheDocument();
  });

  it('renders feature card icons', () => {
    render(<Home />);
    expect(screen.getByText('🔬')).toBeInTheDocument();
    expect(screen.getByText('💊')).toBeInTheDocument();
    expect(screen.getByText('🤝')).toBeInTheDocument();
  });

  it('renders CTA section heading', () => {
    render(<Home />);
    expect(screen.getByText('Ready to Get Started?')).toBeInTheDocument();
  });

  it('renders navigation links with correct hrefs', () => {
    render(<Home />);

    const getStartedLinks = screen.getAllByText('Get Started');
    const heroGetStartedLink = getStartedLinks.find(
      link => link.closest('a')?.getAttribute('href') === '/register'
    );
    const learnMoreLink = screen.getByText('Learn More').closest('a');

    expect(heroGetStartedLink).toBeInTheDocument();
    expect(learnMoreLink).toHaveAttribute('href', '/about');
  });

  it('renders hero section with gradient background', () => {
    render(<Home />);
    const heroSection = screen.getByText(/Connect Labs &/).closest('section');
    expect(heroSection).toHaveClass(
      'bg-gradient-to-br',
      'from-primary/5',
      'to-secondary/5'
    );
  });

  it('renders features section with grid layout', () => {
    render(<Home />);
    const featuresGrid = screen.getByText('Lab Discovery').closest('.grid');
    expect(featuresGrid).toHaveClass('grid-cols-1', 'md:grid-cols-3');
  });

  it('renders CTA section with primary background', () => {
    render(<Home />);
    const ctaSection = screen
      .getByText('Ready to Get Started?')
      .closest('section');
    expect(ctaSection).toHaveClass('bg-primary', 'text-primary-foreground');
  });

  it('renders feature cards with proper styling', () => {
    render(<Home />);
    const featureCards = screen.getAllByText(
      /Lab Discovery|Pharma Partnerships|Collaboration Tools/
    );

    featureCards.forEach(card => {
      const cardContainer = card.closest('.space-y-4');
      expect(cardContainer).toHaveClass(
        'p-6',
        'rounded-lg',
        'border',
        'bg-card'
      );
    });
  });

  it('renders feature icons with proper styling', () => {
    render(<Home />);
    const iconContainers = screen.getAllByText(/🔬|💊|🤝/);

    iconContainers.forEach(icon => {
      const container = icon.closest('div');
      expect(container).toHaveClass(
        'h-12',
        'w-12',
        'bg-primary/10',
        'rounded-lg'
      );
    });
  });

  it('renders responsive text classes', () => {
    render(<Home />);
    const mainHeading = screen.getByText(/Connect Labs &/);
    expect(mainHeading).toHaveClass('text-4xl', 'sm:text-5xl', 'lg:text-6xl');
  });

  it('renders button hover effects', () => {
    render(<Home />);
    const getStartedLinks = screen.getAllByText('Get Started');
    const heroGetStartedLink = getStartedLinks.find(
      link => link.closest('a')?.getAttribute('href') === '/register'
    );
    const learnMoreButton = screen.getByText('Learn More').closest('a');

    expect(heroGetStartedLink).toHaveClass(
      'hover:bg-primary/90',
      'transition-colors'
    );
    expect(learnMoreButton).toHaveClass(
      'hover:bg-accent',
      'hover:text-accent-foreground',
      'transition-colors'
    );
  });
});
