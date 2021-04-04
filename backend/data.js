import bcrypt from 'bcryptjs';
const data={
    users: [
        {
          name: 'wasi',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
  products: [
      {
          name: 'Bread',
          image: '/images/bread.jpeg',
          price: '120',
          countInStock: 10,
          rating: '5.0',
          numReviews: '10',

      },
     {
          name: 'Cake',
          image: '/images/cake.jpg',
          price: '400',
          countInStock: 20,
          rating: '4.5',
          numReviews: '20',

      },
      {
          name: 'Jam',
          image: '/images/jam.jpg',
          price: '250',
          countInStock: 5,
          rating: '4.8',
          numReviews: '7',

      },
      {
          name: 'Buscuits',
          image: '/images/buscuit.jpg',
          price: '200',
          countInStock: 100,
          rating: '4.5',
          numReviews: '15',

      },
      {
          name: 'Chocklates',
          image: '/images/chocklate.jpg',
          price: '120',
          countInStock: 40,
          rating: '4.5',
          numReviews: '10',

      },
      {
          name: 'Butter',
          image: '/images/butter.jpg',
          price: '50',
          countInStock: 0,
          rating: '4.0',
          numReviews: '10',

      },
      {
          name: 'Bun',
          image: '/images/bun.jpg',
          price: '40',
          countInStock: 20,
          rating: '4.5',
          numReviews: '10',

      },
      {
          name: 'Pizza',
          image: '/images/pizza.jpg',
          price: '400',
          countInStock: 0,
          rating: '4.3',
          numReviews: '25',

      },
      {
          name: 'Egg',
          image: '/images/egg.jpg',
          price: '150',
          countInStock: 30,
          rating: '5',
          numReviews: '25',

      }, 
  ]} 
  export default data; 