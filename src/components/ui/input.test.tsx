import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './input';

describe('Input Component', () => {
  it('renders input with default props', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    // Default type is not explicitly set, so we don't check for it
  });

  it('renders input with custom type', () => {
    render(<Input type='email' />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('renders input with placeholder', () => {
    render(<Input placeholder='Enter your name' />);
    const input = screen.getByPlaceholderText('Enter your name');
    expect(input).toBeInTheDocument();
  });

  it('handles value changes', async () => {
    const user = userEvent.setup();
    render(<Input />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test value');
    expect(input).toHaveValue('test value');
  });

  it('calls onChange handler', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'a');
    expect(handleChange).toHaveBeenCalled();
  });

  it('can be disabled', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('applies custom className', () => {
    render(<Input className='custom-input' />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-input');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });

  it('applies all standard HTML input attributes', () => {
    render(
      <Input
        id='test-input'
        name='testName'
        value='test value'
        required
        readOnly
        maxLength={10}
        minLength={2}
        pattern='[A-Za-z]+'
        autoComplete='name'
        autoFocus
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('id', 'test-input');
    expect(input).toHaveAttribute('name', 'testName');
    expect(input).toHaveValue('test value');
    expect(input).toBeRequired();
    expect(input).toHaveAttribute('readonly');
    expect(input).toHaveAttribute('maxlength', '10');
    expect(input).toHaveAttribute('minlength', '2');
    expect(input).toHaveAttribute('pattern', '[A-Za-z]+');
    expect(input).toHaveAttribute('autocomplete', 'name');
  });

  it('handles controlled input with value prop', () => {
    render(<Input value='controlled value' onChange={() => {}} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('controlled value');
  });

  it('handles uncontrolled input with defaultValue', () => {
    render(<Input defaultValue='default value' />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('default value');
  });

  it('applies focus styles correctly', async () => {
    const user = userEvent.setup();
    render(<Input />);

    const input = screen.getByRole('textbox');
    await user.click(input);
    expect(input).toHaveFocus();
  });

  it('handles complex input scenarios', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(
      <Input
        placeholder='Complex input'
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='complex-class'
        disabled={false}
      />
    );

    const input = screen.getByPlaceholderText('Complex input');
    expect(input).toHaveClass('complex-class');
    expect(input).not.toBeDisabled();

    await user.click(input);
    expect(handleFocus).toHaveBeenCalled();
    expect(input).toHaveFocus();

    await user.type(input, 'test');
    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue('test');

    await user.tab();
    expect(handleBlur).toHaveBeenCalled();
  });
});
