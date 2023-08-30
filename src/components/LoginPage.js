import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Logo from '../../public/logo-icon';

export default function LoginPage() {
  const { signIn, user } = useAuth();

  const router = useRouter();

  const [errorLogin, setErrorLogin] = useState(null);
  const [loading, setLoading] = useState(false);

  const userEmail = useRef(null);
  const userPassword = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = userEmail.current?.value;
    const password = userPassword.current?.value;
    setErrorLogin(null);
    setLoading(true);
    //Authorized user: john@mail.com / changeme
    signIn(email, password)
      .then(() => {
        router.push('/dashboard');
        Swal.fire({
          toast: true,
          title: 'Welcome',
          icon: 'success',
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response?.status == 401) {
          setErrorLogin('Incorrect credentials.');
        } else if (error.request) {
          setErrorLogin('Tenemos un problema.');
        } else {
          setErrorLogin('Algo salió mal.');
        }
        setLoading(false);
      });
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-20">
          <Logo />
        </div>

        <div className="max-w-md w-full space-y-8">
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-darkblue-500 focus:border-darkblue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={userEmail}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-darkblue-500 focus:border-darkblue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={userPassword}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-darkblue-600 focus:ring-darkblue-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-darkblue-600 hover:text-darkblue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-darkblue-600 hover:bg-darkblue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue-500"
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
                    <FaLock className="h-5 w-5 text-darkblue-500 group-hover:text-darkblue-400" aria-hidden="true" />
                  )}
                </span>
                Sign in
              </button>
              {errorLogin && (
                <div className="p-3 my-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                  <span className="font-medium">Error:</span> {errorLogin}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
