import { findByLabelText } from '@testing-library/react';
import {createGlobalStyle} from 'styled-components'
import configOverrides from '../../config-overrides';
import CovidImg from '../../assets/images/covid.jpg'

const globalstyle = createGlobalStyle
* {
    outline: none;
    box-sizing: border-box;
}

body {
    line-height: normal;
}

html, body {
    widht:100%;
    min-height: 100%;
    display:flex;
    padding: 0;
    margin: 0;
}

#root {
    background: URL(s{CovidImg});
    height: 100%;
    widht: 100%;
    background-size: cover;
    background-position:center center;
}

.mb-2 {
    margin-bottom: 16px;
}

.pt-2 {
    padding-top: 10px;
}

.cursor {
    cursor: pointer;
}

export default globalstyle