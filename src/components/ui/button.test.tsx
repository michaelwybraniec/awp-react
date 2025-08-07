import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './button';

describe('Button Component', () => {
  it('renders with default variant and size', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary', 'text-primary-foreground');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant='destructive'>Delete</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-destructive');

    rerender(<Button variant='outline'>Outline</Button>);
    expect(screen.getByRole('button')).toHaveClass('border', 'border-input');

    rerender(<Button variant='secondary'>Secondary</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary');

    rerender(<Button variant='ghost'>Ghost</Button>);
    expect(screen.getByRole('button')).toHaveClass('hover:bg-accent');

    rerender(<Button variant='link'>Link</Button>);
    expect(screen.getByRole('button')).toHaveClass(
      'text-primary',
      'underline-offset-4'
    );
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size='sm'>Small</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-9', 'px-3');

    rerender(<Button size='lg'>Large</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-11', 'px-8');

    rerender(<Button size='icon'>Icon</Button>);
    expect(screen.getByRole('button')).toHaveClass('h-10', 'w-10');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'disabled:opacity-50',
      'disabled:pointer-events-none'
    );

    button.click();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Button ref={ref}>Ref Test</Button>);
    expect(ref).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<Button className='custom-class'>Custom</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('renders as different HTML elements', () => {
    const { rerender } = render(
      <Button asChild>
        <a href='/test'>Link</a>
      </Button>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');

    rerender(
      <Button asChild>
        <span>Span</span>
      </Button>
    );
    expect(screen.getByText('Span')).toBeInTheDocument();
  });

  it('combines multiple props correctly', () => {
    render(
      <Button variant='destructive' size='lg' className='custom-class' disabled>
        Complex Button
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'bg-destructive',
      'h-11',
      'px-8',
      'custom-class',
      'disabled:opacity-50'
    );
    expect(button).toBeDisabled();
  });
});
