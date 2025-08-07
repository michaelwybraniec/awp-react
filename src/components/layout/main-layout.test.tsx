import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MainLayout } from './main-layout';

describe('MainLayout Component', () => {
  it('renders main layout with children', () => {
    render(<MainLayout>Main content</MainLayout>);
    expect(screen.getByText('Main content')).toBeInTheDocument();
  });

  it('renders header and footer by default', () => {
    render(<MainLayout>Content</MainLayout>);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('hides header when showHeader is false', () => {
    render(<MainLayout showHeader={false}>Content</MainLayout>);
    expect(screen.queryByRole('banner')).not.toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer still shows
  });

  it('hides footer when showFooter is false', () => {
    render(<MainLayout showFooter={false}>Content</MainLayout>);
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header still shows
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
  });

  it('hides both header and footer when both are false', () => {
    render(
      <MainLayout showHeader={false} showFooter={false}>
        Content
      </MainLayout>
    );
    expect(screen.queryByRole('banner')).not.toBeInTheDocument();
    expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies custom className to main element', () => {
    render(<MainLayout className='custom-main'>Content</MainLayout>);
    const main = screen.getByText('Content').closest('main');
    expect(main).toHaveClass('custom-main');
  });

  it('applies default layout classes', () => {
    render(<MainLayout>Content</MainLayout>);
    const layout = screen.getByText('Content').closest('.min-h-screen');
    expect(layout).toHaveClass('min-h-screen', 'flex', 'flex-col');
  });

  it('applies flex-1 class to main element', () => {
    render(<MainLayout>Content</MainLayout>);
    const main = screen.getByText('Content').closest('main');
    expect(main).toHaveClass('flex-1');
  });

  it('renders complex children structure', () => {
    render(
      <MainLayout>
        <div data-testid='section1'>Section 1</div>
        <div data-testid='section2'>Section 2</div>
        <div data-testid='section3'>Section 3</div>
      </MainLayout>
    );

    expect(screen.getByTestId('section1')).toBeInTheDocument();
    expect(screen.getByTestId('section2')).toBeInTheDocument();
    expect(screen.getByTestId('section3')).toBeInTheDocument();
  });

  it('combines custom className with default classes', () => {
    render(<MainLayout className='custom-main'>Content</MainLayout>);
    const main = screen.getByText('Content').closest('main');
    expect(main).toHaveClass('custom-main', 'flex-1');
  });

  it('maintains proper layout structure', () => {
    render(<MainLayout>Content</MainLayout>);

    const layout = screen.getByText('Content').closest('.min-h-screen');
    const header = layout?.querySelector('header');
    const main = layout?.querySelector('main');
    const footer = layout?.querySelector('footer');

    expect(layout).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('renders header content correctly', () => {
    render(<MainLayout>Content</MainLayout>);
    expect(screen.getAllByText('AWP React')).toHaveLength(2); // From Header and Footer
    expect(screen.getAllByText('Dashboard')).toHaveLength(2); // From Header and Footer
  });

  it('renders footer content correctly', () => {
    render(<MainLayout>Content</MainLayout>);
    expect(screen.getByText('Platform')).toBeInTheDocument(); // From Footer
    expect(screen.getByText('Company')).toBeInTheDocument(); // From Footer
  });
});
