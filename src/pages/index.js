import { AuthContext } from 'contexts/AuthContext';
import Logo from '../../public/logo-icon';
import Dashboard from './dashboard/index';
import AdminLayout from '@layout/AdminLayout';
import { useRouter } from 'next/router';
import Button from '@common/Button';

function Home() {
  const router = useRouter();
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-40 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"></div>
        <div className="mx-auto max-w-2xl py-0 sm:py-0 lg:py-0">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Welcome to LOGO</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">Logo is your store. Take a walk for our store and fall in love with our exclusive products. Great products are waiting for you.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button onClick={() => router.push('/login')} color={'grey'}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
export default Home;
