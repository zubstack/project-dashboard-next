import '@styles/tailwind.css';
import MainLayout from '@layout/MainLayout';
import { AuthContext } from '@contexts/AuthContext';
import { useAuth } from '@hooks/useAuth';
import { ProductsProvider } from '@contexts/ProductsContext';

function MyApp({ Component, pageProps }) {
  const auth = useAuth();
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <AuthContext.Provider value={auth}>
      <ProductsProvider>
        {' '}
        <Component {...pageProps} />
      </ProductsProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
