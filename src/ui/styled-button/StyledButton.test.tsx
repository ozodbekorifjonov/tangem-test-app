import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StyledButton from './StyledButton';

test('StyledButton renders correctly', () => {
  const { getByText } = render(
    <StyledButton onClick={() => console.log('Button clicked')}>Click me</StyledButton>,
  );

  const buttonText = getByText('Click me');
  expect(buttonText).toBeInTheDocument();

  const button = buttonText.parentElement as HTMLElement;
  expect(button).toHaveStyle({
    background: 'var(--color-light)',
    width: 'auto',
    padding: '10px 20px',
    borderRadius: '100px',
    cursor: 'pointer',
  });
});

test('StyledButton click handler is called', () => {
  const handleClick = jest.fn();

  const { getByText } = render(<StyledButton onClick={handleClick}>Click me</StyledButton>);

  fireEvent.click(getByText('Click me'));

  expect(handleClick).toHaveBeenCalled();
});

test('StyledButton is disabled', () => {
  const { getByText } = render(<StyledButton disabled>Click me</StyledButton>);

  const button = getByText('Click me').parentElement as HTMLElement;
  expect(button).toHaveAttribute('disabled');
});
