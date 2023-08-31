import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    console.log('session', session);
    router.push('/dashboard');
  }
  return (
    <>
      <button
        onClick={() => {
          setLoading(true);

          signIn('google').then((result) => {
            if (session) {
              router.push('/dashboard');
              Swal.fire({
                toast: true,
                title: 'Welcome',
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }}
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whity-500"
      >
        <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1"></span>
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {loading ? (
            <>
              <svg fill="none" className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z" fill="currentColor" fillRule="evenodd" />
              </svg>
            </>
          ) : (
            <FaGoogle className="h-5 w-5 text-whity-500 group-hover:text-whity-400" aria-hidden="true" />
          )}
        </span>
        Sign in
      </button>
    </>
  );
}

// <button
//   type="submit"
//   className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-whity-500"
// >
//   <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1"></span>
//   <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//     {loading ? (
//       <>
//         <svg fill="none" className="w-6 h-6 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//           <path clipRule="evenodd" d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z" fill="currentColor" fillRule="evenodd" />
//         </svg>
//       </>
//     ) : (
//       <FaLock className="h-5 w-5 text-whity-500 group-hover:text-whity-400" aria-hidden="true" />
//     )}
//   </span>
//   Sign in
// </button>;
