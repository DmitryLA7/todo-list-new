import { device } from "@/styles/breakpoints";
import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    html,
    body {
        max-width: 100vw;
    }

    body {
        font-size: 14px;

        @media ${device.tablet} {
            font-size: 16px
        }
    }    

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

`