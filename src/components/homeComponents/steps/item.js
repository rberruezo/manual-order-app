import React from 'react';
import ItemStatus from 'components/homeComponents/resources/itemStatus';
import 'styles/wizard.styl';

class Item extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <div>
        <h3>Item</h3>
        <table className='wizard-table'>
          <tbody className='wizard-tbody'>      
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Name</strong> </td>
              <td>
                {item.name}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Color</strong> </td>
              <td>
                {item.color}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Size</strong> </td>
              <td>
                {item.size}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Quantity</strong> </td>
              <td>
                {item.quantity}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>List Price Cents</strong> </td>
              <td>
                {item.listPriceCents}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Sale Price Cents</strong> </td>
              <td>
                {item.salePriceCents}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Source Url</strong> </td>
              <td>
                <a target="_blank" href={item.sourceUrl} name="sourceUrl">{item.sourceUrl}</a>
              </td>
            </tr>
          </tbody>
        </table>
        <ItemStatus selectedValue={item.status} onChange={this.handleStatusChange} />
      </div>
    )
  }

  handleStatusChange = value => {
    this.props.item.status = value;
    this.setState(this.props.item);
  }
}

export default Item;