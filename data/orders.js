let date = new Date().toLocaleDateString();
console.log(date); // 6/17/2022

const orders = [
  {
    id: 'cvnre857th',
    date: date,
    products: [
      {
        id: 'cvnrenfu9rewtgh95y4t854t54hgfiurhgitrjg9irtjuy50u0r9jg0irfjv0irejvoirejvnri9ewjgf9irejwg9r8ejgwee73rh23r8042574375',
        quantity: 10,
      },
      {
        id: 'cvnrenfu9rewtgh95y4t854t54hgfiurhgitrjg9irtjuy50u0r9jg0irfjv0irejvoirejvnri9ewjgf9irejwg9r8ejgwer8025744e73rh23375',
        quantity: 5,
      },
    ],
    user: 'user@email.com',
  },
  {
    id: 'cvnrethfnu',
    date: '3/3/2023',
    products: [
      {
        id: 'cvnrenfu9rewtgh95y4t854t54hgfiurhgitrjg9irtjuy50u0r9jg0irfjv0irejvoirejvnri9ewjgf9irejwg9r8ejgwer8025744e73rh23375',
        quantity: 5,
      },
    ],
    user: 'user@email.com',
  },
];

export default orders;
