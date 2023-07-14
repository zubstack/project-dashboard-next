import { Menu, Transition } from '@headlessui/react';
import Logo from '../../public/logo-icon';
import { Fragment } from 'react';
import Nav from '@common/Nav';
import { FaList, FaTags } from 'react-icons/fa';
import Link from 'next/link';

function AdminLayout({ children }) {
  const userNavigation = [
    { name: 'Account', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
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
              <Logo
                className="text-white
              "
              />
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
                          <a href={item.href} className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                            {item.name}
                          </a>
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
              <Link href={'/dashboard'} className="flex items-center p-2 text-cafe-500 rounded-lg hover:text-black dark:hover:bg-galleta-600 group">
                {/* <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg> */}
                <div className="flex items-center gap-3 ml-3">
                  {' '}
                  <FaList />
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/dashboard/products'} className="flex items-center p-2 text-cafe-500 rounded-lg hover:text-black dark:hover:bg-galleta-600 group">
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

      <div className="mt-30 p-20 sm:ml-64">
        <Nav></Nav>
        {children}
      </div>
    </>
  );
}

export default AdminLayout;
