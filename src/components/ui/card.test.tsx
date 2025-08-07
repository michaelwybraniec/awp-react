import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

describe('Card Component', () => {
  it('renders Card with children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies custom className to Card', () => {
    render(<Card className='custom-card'>Content</Card>);
    const card = screen.getByText('Content').parentElement;
    expect(card).toHaveClass('custom-card');
  });

  it('forwards ref to Card', () => {
    const ref = vi.fn();
    render(<Card ref={ref}>Content</Card>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardHeader Component', () => {
  it('renders CardHeader with children', () => {
    render(<CardHeader>Header content</CardHeader>);
    expect(screen.getByText('Header content')).toBeInTheDocument();
  });

  it('applies custom className to CardHeader', () => {
    render(<CardHeader className='custom-header'>Header</CardHeader>);
    const header = screen.getByText('Header');
    expect(header).toHaveClass('custom-header');
  });

  it('forwards ref to CardHeader', () => {
    const ref = vi.fn();
    render(<CardHeader ref={ref}>Header</CardHeader>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardTitle Component', () => {
  it('renders CardTitle with children', () => {
    render(<CardTitle>Card Title</CardTitle>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
  });

  it('renders as h3 by default', () => {
    render(<CardTitle>Title</CardTitle>);
    const title = screen.getByText('Title');
    expect(title.tagName).toBe('H3');
  });

  it('applies custom className to CardTitle', () => {
    render(<CardTitle className='custom-title'>Title</CardTitle>);
    const title = screen.getByText('Title');
    expect(title).toHaveClass('custom-title');
  });

  it('forwards ref to CardTitle', () => {
    const ref = vi.fn();
    render(<CardTitle ref={ref}>Title</CardTitle>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardDescription Component', () => {
  it('renders CardDescription with children', () => {
    render(<CardDescription>Card description</CardDescription>);
    expect(screen.getByText('Card description')).toBeInTheDocument();
  });

  it('renders as p by default', () => {
    render(<CardDescription>Description</CardDescription>);
    const desc = screen.getByText('Description');
    expect(desc.tagName).toBe('P');
  });

  it('applies custom className to CardDescription', () => {
    render(
      <CardDescription className='custom-desc'>Description</CardDescription>
    );
    const desc = screen.getByText('Description');
    expect(desc).toHaveClass('custom-desc');
  });

  it('forwards ref to CardDescription', () => {
    const ref = vi.fn();
    render(<CardDescription ref={ref}>Description</CardDescription>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardContent Component', () => {
  it('renders CardContent with children', () => {
    render(<CardContent>Content</CardContent>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies custom className to CardContent', () => {
    render(<CardContent className='custom-content'>Content</CardContent>);
    const content = screen.getByText('Content');
    expect(content).toHaveClass('custom-content');
  });

  it('forwards ref to CardContent', () => {
    const ref = vi.fn();
    render(<CardContent ref={ref}>Content</CardContent>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('CardFooter Component', () => {
  it('renders CardFooter with children', () => {
    render(<CardFooter>Footer</CardFooter>);
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('applies custom className to CardFooter', () => {
    render(<CardFooter className='custom-footer'>Footer</CardFooter>);
    const footer = screen.getByText('Footer');
    expect(footer).toHaveClass('custom-footer');
  });

  it('forwards ref to CardFooter', () => {
    const ref = vi.fn();
    render(<CardFooter ref={ref}>Footer</CardFooter>);
    expect(ref).toHaveBeenCalled();
  });
});

describe('Card Integration', () => {
  it('renders complete card structure', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
        </CardHeader>
        <CardContent>Test Content</CardContent>
        <CardFooter>Test Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByText('Test Footer')).toBeInTheDocument();
  });

  it('applies all custom classes in complete card', () => {
    render(
      <Card className='custom-card'>
        <CardHeader className='custom-header'>
          <CardTitle className='custom-title'>Title</CardTitle>
          <CardDescription className='custom-desc'>Description</CardDescription>
        </CardHeader>
        <CardContent className='custom-content'>Content</CardContent>
        <CardFooter className='custom-footer'>Footer</CardFooter>
      </Card>
    );

    const card = screen.getByText('Title').closest('.custom-card');
    expect(card).toBeInTheDocument();
    expect(screen.getByText('Title')).toHaveClass('custom-title');
    expect(screen.getByText('Description')).toHaveClass('custom-desc');
    expect(screen.getByText('Content')).toHaveClass('custom-content');
    expect(screen.getByText('Footer')).toHaveClass('custom-footer');
  });
});
