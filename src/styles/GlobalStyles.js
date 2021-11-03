import { createGlobalStyle } from 'styled-components'
import arvoreMob from '../assets/arvore-mobile.png'
import arvoreMid from '../assets/arvore-mid.png'
import arvoreEsq from '../assets/arvore-esquerda.png'
import arvoreDir from '../assets/arvore-direita.png'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, input, button {
        font-family: 'Source Serif Pro', serif;
    }

    body {
        background: #D2E9D9;
        background-image: url(${arvoreMob});
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: right bottom -150px;

        @media (min-width: 539px) {
            background-image: url(${arvoreMid});
            background-repeat: no-repeat;
            background-position: left bottom -150px;
        }

        @media (min-width: 1024px) {
            background-image: url(${arvoreEsq}), url(${arvoreDir});
            background-repeat: no-repeat;
            background-position: left bottom -130px, right bottom -130px;        
        }
    }
`
