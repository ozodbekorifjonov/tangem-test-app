import { createGlobalStyle } from 'styled-components';

import regular from '../assets/fonts/graphiklcweb_medium.ttf';

const colors = {
  primary: '#D7A830',
  secondary: '#1AD598',
  light: '#FFF',
  background: '#FEFEFE', // Add more colors as needed
};

const fontSizes = {
  small: '12px',
  medium: '16px',
  large: '20px', // Add more font sizes as needed
};

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: ${colors.primary};
        --color-secondary: ${colors.secondary};
        --color-light: ${colors.light};
        --background-color: ${colors.background};
        --font-size-small: ${fontSizes.small};
        --font-size-medium: ${fontSizes.medium};
        --font-size-large: ${fontSizes.large};
    }

    @font-face {
        font-family: 'Graphik LC Web';
        font-style: normal;
        font-weight: 400;
        src: local('Graphik LC Web'), url(${regular}) format('truetype');
    }

    html {
        font-weight: normal;
        font-size: 100%;
    }

    body {
        font-family: 'Graphik LC Web', sans-serif;
        text-rendering: optimizeSpeed;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--background-color);
        color: var(--color-light);
        margin: unset;
        padding: unset;
    }


    @media (prefers-reduced-motion: no-preference) {
        html {
            scroll-behavior: smooth;
        }
    }

    img {
        height: auto;
        user-select: none;
    }

    button {
        cursor: pointer;
        color: inherit;
    }
`;

export default GlobalStyle;
