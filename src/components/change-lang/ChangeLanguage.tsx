import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RU, EN } from '../../const';
import RUSSIAN from '../../lang/ru.json';
import ENGLISH from '../../lang/en.json';
import { selectLang, selectLocale } from '../../store/reducers/intlSlice';
import { RootState } from '@/types/types';

const LangBlock = styled.div`
  button {
    border: 1px solid rgba(115, 120, 144, 0.5);
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
`;

const ChangeLanguage: React.FC = () => {
  const locale = useSelector((state: RootState) => state.intl.locale);
  const dispatch = useDispatch();

  const handleChangeLang = (language: string) => {
    dispatch(selectLocale(language));
    localStorage.setItem('lang', language);
    dispatch(selectLang(language === RU ? RUSSIAN : ENGLISH));
  };

  return (
    <LangBlock>
      <button
        type="button"
        onClick={() => handleChangeLang(locale === EN ? RU : EN)}
      >
        {locale === EN ? 'En' : 'Ру'}
      </button>
    </LangBlock>
  );
};

export default ChangeLanguage;
