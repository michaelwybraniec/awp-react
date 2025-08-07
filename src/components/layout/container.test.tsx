import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Container } from './container';

describe('Container Component', () => {
  it('renders container with children', () => {
    render(<Container>Container content</Container>);
    expect(screen.getByText('Container content')).toBeInTheDocument();
  });

  it('applies default size and padding classes', () => {
    render(<Container>Content</Container>);
    const container = screen.getByText('Content').closest('div');
    expect(container).toHaveClass('max-w-xl', 'px-4', 'sm:px-6', 'lg:px-8');
  });

  it('applies custom className', () => {
    render(<Container className='custom-container'>Content</Container>);
    const container = screen.getByText('Content').closest('div');
    expect(container).toHaveClass('custom-container');
  });

  it('handles different size variants', () => {
    const { rerender } = render(<Container size='sm'>Small</Container>);
    expect(screen.getByText('Small').closest('div')).toHaveClass('max-w-sm');

    rerender(<Container size='md'>Medium</Container>);
    expect(screen.getByText('Medium').closest('div')).toHaveClass('max-w-md');

    rerender(<Container size='lg'>Large</Container>);
    expect(screen.getByText('Large').closest('div')).toHaveClass('max-w-lg');

    rerender(<Container size='xl'>Extra Large</Container>);
    expect(screen.getByText('Extra Large').closest('div')).toHaveClass(
      'max-w-xl'
    );

    rerender(<Container size='full'>Full</Container>);
    expect(screen.getByText('Full').closest('div')).toHaveClass('max-w-full');
  });

  it('handles different padding variants', () => {
    const { rerender } = render(
      <Container padding='none'>No Padding</Container>
    );
    const noPaddingContainer = screen.getByText('No Padding').closest('div');
    expect(noPaddingContainer).not.toHaveClass('px-4', 'sm:px-6', 'lg:px-8');

    rerender(<Container padding='sm'>Small Padding</Container>);
    expect(screen.getByText('Small Padding').closest('div')).toHaveClass(
      'px-4',
      'sm:px-6'
    );

    rerender(<Container padding='md'>Medium Padding</Container>);
    expect(screen.getByText('Medium Padding').closest('div')).toHaveClass(
      'px-4',
      'sm:px-6',
      'lg:px-8'
    );

    rerender(<Container padding='lg'>Large Padding</Container>);
    expect(screen.getByText('Large Padding').closest('div')).toHaveClass(
      'px-6',
      'sm:px-8',
      'lg:px-12'
    );

    rerender(<Container padding='xl'>Extra Large Padding</Container>);
    expect(screen.getByText('Extra Large Padding').closest('div')).toHaveClass(
      'px-8',
      'sm:px-12',
      'lg:px-16'
    );
  });

  it('combines custom className with default classes', () => {
    render(<Container className='custom-class'>Content</Container>);
    const container = screen.getByText('Content').closest('div');
    expect(container).toHaveClass(
      'custom-class',
      'max-w-xl',
      'px-4',
      'sm:px-6',
      'lg:px-8'
    );
  });

  it('combines size and padding with custom className', () => {
    render(
      <Container size='sm' padding='lg' className='custom-container'>
        Complex Content
      </Container>
    );

    const container = screen.getByText('Complex Content').closest('div');
    expect(container).toHaveClass(
      'custom-container',
      'max-w-sm',
      'px-6',
      'sm:px-8',
      'lg:px-12'
    );
  });

  it('renders complex children structure', () => {
    render(
      <Container>
        <div data-testid='header'>Header</div>
        <main data-testid='main'>Main content</main>
        <footer data-testid='footer'>Footer</footer>
      </Container>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('applies base container classes', () => {
    render(<Container>Content</Container>);
    const container = screen.getByText('Content').closest('div');
    expect(container).toHaveClass('mx-auto', 'w-full');
  });
});
