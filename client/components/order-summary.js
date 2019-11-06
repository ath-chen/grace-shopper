import React from 'react'

const OrderSummary = props => {
  return (
    <div>
      <l>
        <h3>Order Summary</h3>
      </l>
      <l>
        <p className="left">Subtotal</p>
        <p className="right">$555</p>
      </l>
      <l>
        <p className="left">Shipping</p>
        <p className="right">Free</p>
      </l>
      <l>
        <p className="left">Total</p>
        <p className="right">$555</p>
      </l>
      <button type="button" method="CHECKOUT" className="checkout-btn">
        CONTINUE TO CHECKOUT
      </button>
    </div>
  )
}

export default OrderSummary
