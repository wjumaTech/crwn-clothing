import './categories.styles.scss';

import { Directory } from './components/directory/directory.component';

const App = () => {

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
  ]

  
  return <Directory categories={ categories } />;
}

export default App;