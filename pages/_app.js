import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
  }
  img {
    border-radius: 50%;
    width: 25%;
}
  ul {
    list-style-type: none;
    background-color: gray;
    width: 30%;
    padding: 15px;   
    margin: 1% auto;
  }
  li div {
    background-color: white;
    width: 70%;
    padding: 10%;
    border-radius: 2%;
    margin: 5% auto;    
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
