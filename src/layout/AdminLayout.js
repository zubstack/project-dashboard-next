import { Menu, Transition } from '@headlessui/react';
import Logo from '../../public/logo-icon';
import { Fragment } from 'react';
import { FaList, FaTags } from 'react-icons/fa';
import Link from 'next/link';

function AdminLayout({ children }) {
  const userNavigation = [
    { name: 'Account', to: '/account' },
    { name: 'Settings', to: '/settings' },
    //PENDING: /logout is not a link
    { name: 'Sign out', to: '/logout' },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Logo />
            </div>
            <div className="flex flex-end">
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"></img>{' '}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link href={item.to} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 bg-galleta-500 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-galleta-500">
          <ul className="space-y-2 font-medium  bg-galleta-500 ">
            <li>
              <Link href={'/dashboard'} className="flex items-center p-2 text-darkblue-500 rounded-lg hover:text-black dark:hover:bg-galleta-600 group">
                <div className="flex items-center gap-3 ml-3">
                  {' '}
                  <FaList />
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/dashboard/products'} className="flex items-center p-2 text-darkblue-500 rounded-lg hover:text-black dark:hover:bg-galleta-600 group">
                <div className="flex items-center gap-3 ml-3">
                  {' '}
                  <FaTags />
                  Products
                </div>{' '}
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="mt-30 p-20 sm:ml-64">{children}</div>
    </>
  );
}

export default AdminLayout;
