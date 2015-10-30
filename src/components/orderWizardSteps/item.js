import React from 'react';

class Item extends React.Component {
  render() {
    var item = this.props.data;
    console.log('Item');
    console.log(item.sourceUrl);
    return (
      <div>
        {item.sourceUrl}
      </div>
    )
  }
}

export default Item;