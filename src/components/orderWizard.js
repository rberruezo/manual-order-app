import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import OrdersActions from 'actions/ordersActions';
import Utilities from 'utilities/utilities';
import OrderWizardFlux from 'components/orderWizardFlux';

var originalOrder = {};

@connectToStores
class OrderWizard extends React.Component {

	constructor(props) {
    super(props);
    Utilities.copyObjectAttributes(originalOrder, props.dequeuedOrder);
    this.state = {
      dequeuedOrder: props.dequeuedOrder
    };
  }

  static getStores(props) {
    return [OrdersStore];
  }

  static getPropsFromStores(props) {
    return OrdersStore.getState();
  }

  render() {
  	var order = this.state.dequeuedOrder;
  	order.items =
  		[
				{
					"id":438,
					"quantity":7,
					"listPriceCents":14999,
					"salePriceCents":14249,
					"commissionCents":0,
					"orderId":420826,
					"apiKey":"d2bd33c0-f3a9-45f4-a44b-c726bb1a3f14",
					"widgetUuid":"d89acf61-1d64-4b77-8858-f3bf4df8ea38",
					"sourceUrl":"http://localhost:8000/temp-rama.html#shopbeam-open-widget-d89acf61-1d64-4b77-8858-f3bf4df8ea38",
					"variantId":9188055,
					"createdAt":"2015-10-30T15:55:26.735Z",
					"updatedAt":"2015-10-30T15:55:26.735Z",
					"status":3,
					"name":"Hair Regrowth Treatment Foam",
					"description":"Rogaine Hair Regrowth Treatment Foam is a clinically proven hair regrowth treatment foam.<br/><br/>Rogaine is the #1 Dermatologist recommended brand, clinically proven to reduce hair loss, revitalize hair follicles and regrow hair.  The active ingredient reactivates the hair growth cycle and stimulates regrowth to help men regrow hair.  Goes on easily, dries quickly.<br/><br/><b>Directions:</b> Apply one-half (1/2) capful twice a day to the scalp in the area of hair loss.  Massage into a dry scalp with fingers, then wash hands.  Do not exceed 2 doses of one-half capful within 24 hours.  Using more or more often will not improve results.  Continued use is necessary to increase and keep hair regrowth, or loss will begin again.  In the first 2-6 weeks, it is normal to shed your thin, older hairs (the ones you don't want) to make room for new growth. However, if shedding persists for longer than a 2 week duration, stop using ROGAINE Foam 5% and see your doctor.  Hair takes time to grow, so it may take time to see your hair loss improvement.   Every guy is different -- usually you must use ROGAINE® FOAM 5% for at least 4 months, before you can really see the results.<br/><b><br/>Medicinal Ingredient: </b>5% Minoxidil w/w<br/><b><br/>Warnings: </b>For external use only. For use by men 18-65 years. Do not use this medicine if you have: treated or untreated high blood pressure, baldness not due to male pattern baldness, any condition that affects your scalp such as redness, inflammation, irritation, pain on touching, sunburn, or psoriasis, a shaved scalp or broken skin on the scalp, any kind of dressing or bandage or other topical medication on your scalp for any skin scalp problems, temporary hair loss as a result of taking certain medications (cancer chemotherapy) or having disease state or nutritional problems, as well as poor grooming habits, an allergic reaction (hypersensitivity) to minoxidil or any of the other ingredients in Rogaine Foam 5%.  Extremely flammable: Avoid fire, flame or smoking during and immediately following application.",
					"partnerName":"Well.ca",
					"brandName":"Rogaine",
					"color":"Minoxidil Foam %",
					"size":"3 X 60 G Cans",
					"image":"https://cloudinary-a.akamaihd.net/shopbeam/image/fetch/w_75/https%3A%2F%2Fd…i%2Fd31bb1782cf38e2cea124bcf7b8b4eca_ra%2Cw403%2Ch403_pa%2Cw403%2Ch403.png"
				},
				{
					"id":439,
					"quantity":8,
					"listPriceCents":5999,
					"salePriceCents":5699,
					"commissionCents":0,
					"orderId":420826,
					"apiKey":"d2bd33c0-f3a9-45f4-a44b-c726bb1a3f14",
					"widgetUuid":"d89acf61-1d64-4b77-8858-f3bf4df8ea38",
					"sourceUrl":"http://localhost:8000/temp-rama.html#shopbeam-open-widget-d89acf61-1d64-4b77-8858-f3bf4df8ea38",
					"variantId":9188060,
					"createdAt":"2015-10-30T15:55:26.737Z",
					"updatedAt":"2015-10-30T15:55:26.737Z",
					"status":3,
					"name":"For Men Hair Regrowth Treatment",
					"description":"If you suffer from hereditary hair loss, Men's ROGAINE® Topical Solution can help regrow your hair, and reduce additional hair loss.<p><br/></p><p>When used twice daily, ROGAINE® solution helps prevent hereditary hair loss for 4 out of 5 sufferers within 4 months. After 12 months, close to 50% of users experience moderate to dense regrowth.</p><br/>Like all medications, ROGAINE® solution may or may not be right for you. To be sure, always read and follow the product label, including the consumer leaflet provided inside of the carton",
					"partnerName":"Well.ca",
					"brandName":"Rogaine",
					"color":"Minoxidil Topical Solution %",
					"size":"60 Ml",
					"image":"https://cloudinary-a.akamaihd.net/shopbeam/image/fetch/w_75/https%3A%2F%2Fd…i%2Fd5edbaa57203e7dbc9fd3787b82cef85_ra%2Cw403%2Ch403_pa%2Cw403% 2Ch403.jpg"
				}
			];
    return (
    	<section>
        <header>
          <h1>Hi, Im an order form! {order.consumerName}</h1>
        </header>
        <OrderWizardFlux order={order} />
        <div className="login-content" onSubmit={this.handleLogin}>
        	<input name="consumerName" type="text" value={order.consumerName} onChange={this.handleChange} placeholder="Consumer" className="login-mail"/>
        	<input name="itemCount" type="number" value={order.itemCount} onChange={this.handleChange} placeholder="Item Count" className="login-mail"/>
        	<input name="status" type="number" value={order.status} onChange={this.handleChange} placeholder="Status" className="login-mail"/>
          <button className="cancel-button" onClick={this.cancelChanges}>CANCEL</button>
        	<button className="accept-button" onClick={this.acceptChanges}>ACCEPT</button>
        </div>
      </section>
    );
  }

  cancelChanges = evt => {
  	Utilities.copyObjectAttributes(this.props.dequeuedOrder, originalOrder);
    OrdersActions.deselectOrder();
  }

  acceptChanges = evt => {
    OrdersActions.deselectOrder();
  }

  handleChange = evt => {
  	this.props.dequeuedOrder[evt.target.name] = evt.target.value;
    this.setState(this.props.dequeuedOrder);
  }

}

export default OrderWizard;
