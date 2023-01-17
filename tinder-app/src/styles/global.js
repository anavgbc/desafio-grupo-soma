import { createGlobalStyle } from "styled-components";

const GlobalBase = createGlobalStyle`

:root {

    --white: #FFFFFF;
    --black: #000000;
    --gray: #808080;

    --base-white: rgba(255, 255, 255, 0.75);

    --btn-accept: #81d47d;
    --btn-reject: #e66868;
    --superlike-blue: #7497fb;

    --shadow: 0px 0px 11px 3px rgba(0, 0, 0, 0.12);
}

`;
export default GlobalBase;
