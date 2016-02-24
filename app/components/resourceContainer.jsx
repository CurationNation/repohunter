import React from 'react';
import Category from './category';
import style from './resourceContainer.scss';

class ResourceContainer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const categories = this.props.categories.map((category, idx) => <Category key={idx + category.category_name} category={category}/>);

    return (
      <div className={style.resourceContainer}>
        {categories}
      </div>
    );
  }
}

export default ResourceContainer;
