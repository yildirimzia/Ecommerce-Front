import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  padding: 0;
  margin: 0;
  font-family: 'roboto', sans-serif;
`;


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
