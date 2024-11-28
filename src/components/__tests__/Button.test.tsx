import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../atoms/Button';

// NOTE: I just did some sample tests to illustrate the Jest functionality.

describe('Button component', () => {
  // Test for rendering the button with children text
  it('should render the button with the given children', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  // Test for click functionality when the handleClick function is passed
  it('should call handleClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button handleClick={handleClick}>Click me</Button>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test for ensuring the button is disabled when the disabled prop is true
  it('should be disabled when the disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    
    // Try clicking the button, handleClick should not be called
    const handleClick = jest.fn();
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Test the default behavior (button is not disabled by default)
  it('should not be disabled by default', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  // Test for applying the 'disabled' style when disabled is true
  it('should apply the disabled style when the button is disabled', () => {
    render(<Button disabled>Click me</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('disabled:bg-gray-400');
  });
});
