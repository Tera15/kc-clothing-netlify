import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'open sans condensed';
        padding: 20px 60px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;