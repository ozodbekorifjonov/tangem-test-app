import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { EN } from '@/const';
import { RootState } from '@/types/types';

interface GenericProviderProps {
  children: ReactNode;
}

const GenericProvider: React.FC<GenericProviderProps> = ({ children }) => {
  const { locale, messages } = useSelector((state: RootState) => state.intl);

  return (
    <IntlProvider messages={messages} locale={locale} defaultLocale={EN}>
      {children}
    </IntlProvider>
  );
};

export default GenericProvider;
