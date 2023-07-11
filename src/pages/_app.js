import '@styles/tailwind.css';
import MainLayout from '@layout/MainLayout';
import { AuthContext } from '@contexts/AuthContext';
import { useAuth } from '@hooks/useAuth';
import { ProductsProvider } from '@contexts/ProductsContext';

function MyApp({ Component, pageProps }) {
  const auth = useAuth();
  return (
    <AuthContext.Provider value={auth}>
      <ProductsProvider>
        {' '}
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProductsProvider>
    </AuthContext.Provider>
  );
}

export default MyApp;
