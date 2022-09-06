import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{          
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
        list-style: none;
    }

    body {        
        font-family: 'Inter', sans-serif;
    }

`;

export default GlobalStyle;
