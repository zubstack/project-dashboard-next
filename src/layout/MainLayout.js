import Nav from '@common/Nav';
import Header from '@components/Header';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainLayout({ children }) {
  const router = useRouter();

  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6">{children}</div>
        </main>
      </div>
    </>
  );
}
