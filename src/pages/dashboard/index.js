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

  console.log('products', products);

  const brandNames = products?.map((product) => product.item.brand);
  const countOcurrences = (arr) => arr?.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  const chartData = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(brandNames),
        borderWidth: 2,
        backgroundColor: ['#3F2305', '#DFD7BF', '#F2EAD3', '#606C9D', '#F1C376', '#A8A196'],
      },
    ],
  };

  return (
    <>
      <Nav title={'Dashboard'} />

      <Chart className="mb-8 mt-2" chartData={chartData} />
    </>
  );
}

Dashboard.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
