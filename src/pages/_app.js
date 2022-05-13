import { SessionProvider } from 'next-auth/react';
import Layout from '../components/layout';

import '../styles/main.scss';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </SessionProvider>
    </>
  );
};

export default App;
