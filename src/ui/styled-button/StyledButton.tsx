import React, { useCallback, ReactNode, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
  isFilled?: boolean;
}

const Button = styled.button`
  background: var(--color-light);
  width: auto;
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 100px;
  backdrop-filter: blur(12px);
  cursor: ${(props: { disabled?: boolean }) => (props.disabled ? 'not-allowed' : 'pointer')};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    background: linear-gradient(to right, rgba(102, 204, 255, 0.2) -50%, #0b0b0b 75%);
    color: transparent;
    -webkit-background-clip: text;
    font-size: var(--font-size-medium);
    font-style: normal;
    line-height: 110%;
    font-weight: 600;
    margin: unset;
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    span {
      color: #0b0b0b;
      -webkit-text-fill-color: unset;
    }
  }
`;

function StyledButton({
  type = 'button',
  color,
  onClick,
  children,
  disabled = false,
  isFilled,
  ...rest
}: ButtonProps): JSX.Element {
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <Button
      type={type}
      color={color}
      disabled={disabled}
      onClick={handleClick}
      className={isFilled ? 'filled' : ''}
      {...rest}
    >
      <span>{children}</span>
    </Button>
  );
}

export default StyledButton;
