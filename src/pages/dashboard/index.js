import { Chart } from '@common/Chart';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '@contexts/ProductsContext';
import AdminLayout from '@layout/AdminLayout';
import Nav from '@common/Nav';
import axios from 'axios';
import { endpoints } from '@services/api';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      // setLoading(true);
      try {
        const response = await axios.get(endpoints.products.allProducts);
        setProducts(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
      // setLoading(false);
    }
    fetchProducts();
  }, []);

  const brandNames = products?.map((product) => product.item?.brand);
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
