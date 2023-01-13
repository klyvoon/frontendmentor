import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-lavender: #E0E8FF;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
    }
    body {
        background-color: var(--color-lavender);
    }
    
`

export default GlobalStyles;