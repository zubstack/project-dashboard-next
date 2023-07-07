import '@styles/tailwind.css';
import MainLayout from '@layout/MainLayout';
import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from 'hooks/useAuth';

function MyApp({ Component, pageProps }) {
  const auth = useAuth();
  return (
    <AuthContext.Provider value={auth}>
      {' '}
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthContext.Provider>
  );
}

export default MyApp;
