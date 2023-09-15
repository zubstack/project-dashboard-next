export default function Nav({ title }) {
  // const router = useRouter();
  // const route = router.asPath.substring(1);

  return (
    <nav className="bg-white shadow rounded-sm">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">{title}</h1>
      </div>
    </nav>
  );
}
