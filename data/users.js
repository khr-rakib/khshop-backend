import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('password'),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: bcrypt.hashSync('password'),
  },
  {
    name: 'Kh Rakib',
    email: 'khr.rakib@gmail.com',
    password: bcrypt.hashSync('password'),
  },
];

export default users;
