import { SessionProvider } from 'next-auth/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from '../components/layout';

import 'bootstrap/dist/css/bootstrap.css';

const GlobalStyle = createGlobalStyle`
iframe {
  background: #ccc;
  border: 1px solid #ccc;
  height: 10rem;
  width: 100%;
  border-radius: .5rem;
  filter: invert(1);
}

  .pre-wrap {
    white-space: pre-wrap;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3'
  }
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <Layout>
            <Component {...pageProps}/>
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
