import { Chart } from '@common/Chart';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '@contexts/ProductsContext';
import AdminLayout from '@layout/AdminLayout';
import Nav from '@common/Nav';

export default function Dashboard() {
  const { products, getProducts } = useContext(ProductsContext);
  useEffect(() => {
    getProducts();
  }, []);
  const categoryNames = products?.map((product) => product.categories);
  const countOcurrences = (arr) => arr?.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  const chartData = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoryNames),
        borderWidth: 2,
        backgroundColor: ['#3F2305', '#DFD7BF', '#F2EAD3', '#606C9D', '#F1C376', '#A8A196'],
      },
    ],
  };

  return (
    <>
      <Nav page={'Dashboard'} />

      <Chart className="mb-8 mt-2" chartData={chartData} />
    </>
  );
}

Dashboard.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
