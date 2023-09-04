import Nav from '@common/Nav';
import AdminLayout from '@layout/AdminLayout';
import orders from '../../../data/orders';

function Orders() {
  console.log('orders', typeof orders[0].products);
  return (
    <div>
      <Nav page={'Orders'} />
      <div className="bg-white mt-4 p-4">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Products
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orders?.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-400">{order.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">{order.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {order.products.map((product) => (
                            <tr className="h-10 gap">
                              <td className=" w-8 text-center font-bold">{product.quantity} </td>
                              <td className="max-w-[400px] truncate ">{product.id}</td>
                            </tr>
                          ))}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-700">{order.user}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
Orders.getLayout = (page) => <AdminLayout>{page}</AdminLayout>;
