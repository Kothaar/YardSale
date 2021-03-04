import styled, {createGlobalStyle, css} from 'styled-components';
import img from './test.png'

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        weidth: 100vw;
        height: 100vw;
        front-size: 16px;
        overflow: hidden;
    }
`

const Background = styled.div`

    background-image: url(${img});
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
`


export {
    GlobalStyle,
    Background
}