import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_YqhpJHnPBYj64kMO4aiveNmx00xSnzM5fv'

  const onToken = token => {
    // console.log(token)
    // alert('Payment Successful')
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='LMD Roast Ltd.'
      billingAddress
      shippingAddress
      image='https://img.icons8.com/nolan/64/us-dollar.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton