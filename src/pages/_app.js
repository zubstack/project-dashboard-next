import '@styles/tailwind.css';
import '@styles/global.css';
import { ProductsProvider } from '@contexts/ProductsContext';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      <ProductsProvider>{getLayout(<Component {...pageProps} />)}</ProductsProvider>
    </SessionProvider>
  );
}

export default MyApp;
