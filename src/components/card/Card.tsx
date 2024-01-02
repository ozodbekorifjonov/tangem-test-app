import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CardBG from '../../assets/images/card-bg.png';
import Icon from '@/assets/icons/Icon';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/types/types';
import { closeCard } from '@/store/reducers/applicationSlice';

const StyledDiv = styled.div`
  margin-top: 100vh;
  display: flex;
  justify-content: flex-end;
  padding: 0 34px;

  @media (max-width: 768px) {
    padding: unset;
  }
`;

const StyledCard = styled.div<{ $isVisible: boolean }>`
  width: 600px;
  height: 345px;
  background-color: #111111;
  background-image: url(${CardBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 16px;
  box-shadow: 0 4px 34px 0 rgba(0, 0, 0, 0.45);
  box-sizing: border-box;
  color: #fff;
  padding: 75px 30px 55px;
  position: relative;
  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 345px;
    border-radius: unset;
    background-position: 80% 50%;
  }
`;

const StyledClose = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 24px;
  height: 24px;

  .icon {
    background-color: #fff;
    cursor: pointer;
  }
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }

  .card-body {
    min-width: 50%;
    text-align: center;

    h1 {
      color: var(--color-light);
      font-size: 46px;
      font-weight: 500;
      line-height: 110%;
      letter-spacing: -1.84px;
      margin: unset;
    }

    h2 {
      background: linear-gradient(to right, #7d5317, #eddf95);
      color: transparent;
      -webkit-background-clip: text;
      font-size: 40px;
      font-weight: 500;
      line-height: 110%;
      letter-spacing: -1.6px;
      margin: 25px 0 14px 0;
    }

    p {
      margin: 0 0 40px 0;
      color: #6c6c70;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 130%;
      letter-spacing: 0.08px;
    }

    .black-friday {
      color: #d7a830 !important;
    }

    button {
      color: rgba(255, 255, 255, 0.9);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 110%;
      letter-spacing: 0.08px;
      padding: 12px 24px;
      border-radius: 14px;
      background: rgba(40, 37, 31, 0.85);
      border: none;
      outline: none;
    }
  }
`;

const Card: React.FunctionComponent = () => {
  const { formatMessage } = useIntl();
  const { showCard } = useSelector((state: RootState) => state.application);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCloseCard = () => {
    dispatch(closeCard());
  };

  if (showCard) {
    return (
      <StyledDiv>
        <StyledCard $isVisible={isVisible}>
          <StyledClose>
            <Icon
              name={'close'}
              onClick={handleCloseCard}
            />
          </StyledClose>
          <StyledContent>
            <div className="card-body">
              <h1>{formatMessage({ id: 'ALERT.BLACK_FRIDAY' })}</h1>
              <h2>10%OFF</h2>
              <p>
                {formatMessage({ id: 'ALERT.USE_CODE' })}{' '}
                <span className="black-friday"> 10FRIDAY</span>{' '}
                {formatMessage({ id: 'ALERT.AT_CHECKOUT' })}
              </p>
              <button>{formatMessage({ id: 'CARD.SHOP_NOW_THROUGH_MONDAY' })}</button>
            </div>
          </StyledContent>
        </StyledCard>
      </StyledDiv>
    );
  }

  return null;
};

export default Card;
