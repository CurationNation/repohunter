import React from 'react';
import style from './curatedItem.scss';


class CuratedItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const [name, url, description] = this.props.item;
    return (
      <div className={style.itemRow}>
        <span className={style.name}><a href={url} target="_blank">{name}</a></span>
        <span className={style.description}>{description}</span>
      </div>
    );
  }
}

export default CuratedItem;
