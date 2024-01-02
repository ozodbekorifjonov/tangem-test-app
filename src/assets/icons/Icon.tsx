import React, { CSSProperties, MouseEvent, ReactElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tell from './src/tell.svg';
import Close from './src/close.svg';
import ArrowRight from './src/arrow-right.svg';

const StyledSpan = styled.span<{ $bgcolor?: string; $src: string }>`
    width: 24px;
    height: 24px;
    display: inline-block;
    mask-repeat: no-repeat;
    mask-size: 100%;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    -webkit-mask-position: center;
    background-color: ${(props) => props.$bgcolor};
    vertical-align: middle;
    mask-image: url(${(props) => props.$src});
    -webkit-mask-image: url(${(props) => props.$src});
`;

const ImgObj: { [key: string]: string } = {
  tell: Tell,
  close: Close,
  arrowRight: ArrowRight,
  // Add more icons here
};

const IconColor: { [key: string]: string } = {
  green: '#1AD598',
  black: '#000',
  blue: '#0090FF',
  purple: '#3A36DB',
  lightBlue: '#0077B6',
  pink: '#DB5AEE',
  yellow: '#FECC00',
};

interface IconProps {
  name: keyof typeof ImgObj;
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
  style?: CSSProperties;
  color?: keyof typeof IconColor;
}

function Icon({ name, onClick, style, color, ...rest }: IconProps): ReactElement {
  return (
    <StyledSpan
      style={style}
      $src={ImgObj[name]}
      $bgcolor={color ? IconColor[color] : undefined}
      onClick={onClick}
      className={'icon'}
      {...rest}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(ImgObj)).isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  color: PropTypes.oneOf(Object.keys(IconColor)),
};

export default Icon;
