import Nav from '@common/Nav';
import { AuthContext } from '@contexts/AuthContext';
import AdminLayout from '@layout/AdminLayout';
import { useSession } from 'next-auth/react';

function Account() {
  const { data: session } = useSession();
  console.log('session', session);
  return (
    <>
      <Nav page={'Account'} />

      <div className="bg-white mt-10 py-3 px-20">
        <h1>Email:</h1>
        <p>{session?.user.email}</p>
        <h1>Name:</h1>
        <p>{session?.user.name}</p>
      </div>
    </>
  );
}

Account.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Account;
