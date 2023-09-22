import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

import * as _ from 'lodash';


const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      
      {
        _.map(categories, (category) => (
          <CategoryItem key={ category.id } category={ category } />
        ))
      }

    </div>
  )
}

export default Directory;