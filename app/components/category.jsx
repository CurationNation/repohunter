import React from 'react';
import Subcategory from './subcategory';
import CuratedItem from './curatedItem';

import style from './category.scss';

class Category extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const category = this.props.category;
    const hasSubcategories = category.subcategory_names[0] !== 'no_subcategory';
    let curatedItems;
    if (!hasSubcategories) {
      curatedItems = category.subcategory_list.map((item, idx) => <CuratedItem key={idx + item[0]} className={style.curatedItem} item={item}></CuratedItem>);
    }

    return (
      <div id={category.category_name} className={style.category}>
        <h5 className={style.categoryName}>{category.category_name}</h5>
        {curatedItems}
      </div>
    );
  }
}

export default Category;
