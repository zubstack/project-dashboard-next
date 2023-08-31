import '@styles/tailwind.css';
import '@styles/global.css';
import MainLayout from '@layout/MainLayout';
import { AuthContext } from '@contexts/AuthContext';
import { useAuth } from '@hooks/useAuth';
import { ProductsProvider } from '@contexts/ProductsContext';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const auth = useAuth();
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={session}>
      {/* <AuthContext.Provider value={auth}> */}
      <ProductsProvider>{getLayout(<Component {...pageProps} />)}</ProductsProvider>
      {/* </AuthContext.Provider> */}
    </SessionProvider>
  );
}

export default MyApp;
