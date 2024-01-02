import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CustomButton from './CustomButton';

test('CustomButton renders correctly', () => {
  const { getByText } = render(
    <CustomButton onClick={() => console.log('Button clicked')}>Click me</CustomButton>,
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

test('CustomButton click handler is called', () => {
  const handleClick = jest.fn();

  const { getByText } = render(<CustomButton onClick={handleClick}>Click me</CustomButton>);

  fireEvent.click(getByText('Click me'));

  expect(handleClick).toHaveBeenCalled();
});

test('CustomButton is disabled', () => {
  const { getByText } = render(<CustomButton disabled>Click me</CustomButton>);

  const button = getByText('Click me').parentElement as HTMLElement;
  expect(button).toHaveAttribute('disabled');
});
