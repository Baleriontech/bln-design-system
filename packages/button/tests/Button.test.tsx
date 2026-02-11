import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from '../src/Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders button with children', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('renders with primary variant by default', () => {
      render(<Button>Default Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bln-button--primary');
    });

    it('applies base button class', () => {
      render(<Button>Base Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bln-button');
    });
  });

  describe('Variants', () => {
    it('renders primary variant correctly', () => {
      render(<Button variant="primary">Primary</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bln-button--primary');
    });

    it('renders outlined variant correctly', () => {
      render(<Button variant="outlined">Outlined</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bln-button--outlined');
    });

    it('renders glass variant correctly', () => {
      render(<Button variant="glass">Glass</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bln-button--glass');
    });
  });

  describe('Custom className', () => {
    it('merges custom className with variant classes', () => {
      render(<Button className="custom-class" variant="primary">Custom</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bln-button--primary');
      expect(button).toHaveClass('custom-class');
    });

    it('maintains base class with custom className', () => {
      render(<Button className="my-custom-class">Custom</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bln-button');
      expect(button).toHaveClass('my-custom-class');
    });
  });

  describe('Event Handlers', () => {
    it('calls onClick handler when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Clickable</Button>);
      const button = screen.getByRole('button');
      
      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('calls onClick handler multiple times', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Multi Click</Button>);
      const button = screen.getByRole('button');
      
      await user.click(button);
      await user.click(button);
      await user.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(3);
    });
  });

  describe('HTML Attributes', () => {
    it('applies disabled attribute', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('does not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick} disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      
      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('applies type attribute', () => {
      render(<Button type="submit">Submit</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('applies aria-label attribute', () => {
      render(<Button aria-label="Close dialog">X</Button>);
      const button = screen.getByRole('button', { name: /close dialog/i });
      expect(button).toBeInTheDocument();
    });

    it('applies data attributes', () => {
      render(<Button data-testid="test-button" data-custom="value">Test</Button>);
      const button = screen.getByTestId('test-button');
      expect(button).toHaveAttribute('data-custom', 'value');
    });
  });

  describe('Accessibility', () => {
    it('is keyboard accessible', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();
      
      render(<Button onClick={handleClick}>Keyboard</Button>);
      const button = screen.getByRole('button');
      
      button.focus();
      expect(button).toHaveFocus();
      
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('has correct role', () => {
      render(<Button>Accessible</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('renders without children', () => {
      render(<Button />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders with complex children', () => {
      render(
        <Button>
          <span>Icon</span> Click me
        </Button>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByText('Icon')).toBeInTheDocument();
    });

    it('handles null variant gracefully', () => {
      render(<Button variant={null}>Null Variant</Button>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });
});
