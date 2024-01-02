import React from 'react';
import styled from 'styled-components';
import AlertBg from '@/assets/images/alert-bg.png';
import { useIntl } from 'react-intl';
import CustomButton from '@/ui/custom-button/CustomButton';
import Icon from '@/assets/icons/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/types/types';
import { closeAlert } from '@/store/reducers/applicationSlice';

const StyledAlert = styled.div`
  background: linear-gradient(180deg, #101010 0%, #0b0b0b 100%);
  position: sticky;
  width: 100%;
  right: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  color: var(--color-light);
`;

const StyledBgImage = styled.div`
  position: absolute;
  height: 100%;
  width: 20%;
  left: 0;
  top: 0;

  img {
    object-fit: contain;
    height: 100%;
    margin-left: 8px;
  }

  @media (max-width: 768px) {
    img {
      width: auto;
      margin-left: unset;
      transform: translateX(-30%);
    }
  }
`;

const StyledMessage = styled.div`
  position: inherit;
  width: 60%;
  left: 20%;
  text-align: center;

  ul {
    list-style-type: none;
    margin: unset;

    li {
      display: inline-block;
      font-size: var(--font-size-medium);
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.048px;

      .content {
        display: flex;
        align-items: center;
        flex-direction: row;

        .text-bold {
          font-weight: 600;
        }

        .text-bright {
          color: #d7a830;
          letter-spacing: -0.64px;
        }

        @media (max-width: 768px) {
          .responsive-span {
            display: none;
          }

          .text-responsive-comma::after {
            content: ',';
            margin-right: 4px;
          }
        }
      }

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.048px;
      }
    }
  }
`;

const StyledCollapse = styled.div`
  position: inherit;
  width: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 22px;

  .icon {
    background-color: #fff;
    margin-left: 14px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledResponsiveCollapse = styled.div`
  position: inherit;
  width: 20%;
  justify-content: flex-end;
  align-items: center;
  padding-right: 22px;
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }

  .icon {
    background-color: #fff;
    margin-left: 14px;
  }
`;

const StyledDot = styled.span`
  width: 3px;
  height: 3px;
  margin: 0 12px;
  background-color: #313131;
  display: inline-block;
  border-radius: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Alert: React.FunctionComponent = () => {
  const { formatMessage } = useIntl();
  const { showAlert } = useSelector((state: RootState) => state.application);
  const dispatch = useDispatch();

  const handleCloseAlert = () => {
    dispatch(closeAlert());
  };

  if (showAlert) {
    return (
      <StyledAlert>
        <StyledBgImage>
          <img
            src={AlertBg}
            alt={'AlertBg'}
          />
        </StyledBgImage>
        <StyledMessage>
          <ul>
            <li>
              <div className="content">
                <span className="text-bold text-responsive-comma">
                  {formatMessage({ id: 'ALERT.BLACK_FRIDAY' })}
                </span>
                <span className="responsive-span">
                  , {formatMessage({ id: 'ALERT.24_27_NOVEMBER' })}
                </span>
                <StyledDot />
              </div>
            </li>
            <li>
              <div className="content">
                <span className="text-bold text-bright">10%OFF </span>
                <StyledDot />
              </div>
            </li>
            <li>
              <div className="content">
                <span className="responsive-span">
                  {formatMessage({ id: 'ALERT.USE_CODE' })}{' '}
                  <span className="text-bold text-bright"> 10FRIDAY</span>{' '}
                  {formatMessage({ id: 'ALERT.AT_CHECKOUT' })}
                </span>
              </div>
            </li>
          </ul>
        </StyledMessage>
        <StyledCollapse>
          <CustomButton>{formatMessage({ id: 'ALERT.SHOP_NOW' })}</CustomButton>
          <Icon
            name="close"
            onClick={handleCloseAlert}
          />
        </StyledCollapse>
        <StyledResponsiveCollapse>
          <Icon name="arrowRight" />
        </StyledResponsiveCollapse>
      </StyledAlert>
    );
  }

  return null;
};

export default Alert;
