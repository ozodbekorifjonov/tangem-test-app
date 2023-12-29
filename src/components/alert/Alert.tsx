import React from 'react';
import styled from 'styled-components';
import AlertBg from '@/assets/images/alert-bg.png';
import { useIntl } from 'react-intl';
import StyledButton from '@/ui/StyledButton';
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

  span {
    background-color: #fff;
    margin-left: 14px;
    cursor: pointer;
  }
`;

const StyledDot = styled.span`
  width: 3px;
  height: 3px;
  margin: 0 12px;
  background-color: #313131;
  display: inline-block;
  border-radius: 50%;
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
                <span className="text-bold">{formatMessage({ id: 'ALERT.BLACK_FRIDAY' })}</span>
                <span>, {formatMessage({ id: 'ALERT.24_27_NOVEMBER' })}</span>
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
                <span>
                  {formatMessage({ id: 'ALERT.USE_CODE' })}{' '}
                  <span className="text-bold text-bright"> 10FRIDAY</span>{' '}
                  {formatMessage({ id: 'ALERT.AT_CHECKOUT' })}
                </span>
              </div>
            </li>
          </ul>
        </StyledMessage>
        <StyledCollapse>
          <StyledButton>{formatMessage({ id: 'ALERT.SHOP_NOW' })}</StyledButton>
          <Icon
            name="close"
            onClick={handleCloseAlert}
          />
        </StyledCollapse>
      </StyledAlert>
    );
  }

  return null;
};

export default Alert;
