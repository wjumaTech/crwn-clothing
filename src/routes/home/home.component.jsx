import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

export const Home = () => {

	 const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'hats.jpg'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'jackets.jpg'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'sneakers.jpg'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'womens.jpg'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'mens.jpg'
    }
  ];
  
  return (
    <div>
      <Outlet />
      <Directory categories={ categories } />
    </div>
  )
}