import React from 'react';
import Drawer from 'react-toolbox/lib/drawer';
import {Button} from 'react-toolbox/lib/button';
import classnames from 'classnames';
import style from './sideBar.scss';

class SideBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      selectedIndex: -1
    };
  }

  handleClickItem(name, idx, event) {
    this.setState({
      selectedIndex: idx
    });
    console.log(idx);
    console.log(this.state.selectedIndex);

    window.location.hash = '#' + name;
  }

  render () {
    // const categoryNames = this.props.categories.map(
    //   (name, i) => <div className={style.categoryItem} key={i+name} onClick={() => window.location.hash = '#' + name}>{name}</div>
    // );

    let self = this;
    let categoryNames = this.props.categories.map(function(name, i) {
      let itemClasses;
      if (i === self.state.selectedIndex) {
        itemClasses = classnames(style.categoryItem, style.selected);
      } else {
        itemClasses = classnames(style.categoryItem);
      }

      return (
        <div
          className={itemClasses}
          key={i+name}
          onClick={self.handleClickItem.bind(self, name, i)}
        >
          {name}
        </div>
      );
    });

    return (
      <div className={style.sideBar}>
        <div className={style.sideBar_header}>
          <h1 className={style.sideBar_title}>Repo Hunter</h1>
        </div>
        <div className={style.sideBar_container}>
          {categoryNames}
        </div>
      </div>
    );
  }
}

export default SideBar;
