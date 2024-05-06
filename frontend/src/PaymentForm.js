// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentError, setPaymentError] = useState(null);
//   const [paymentSuccess, setPaymentSuccess] = useState(null);
//   const [name, setName] = useState('');
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) {
//       return;
//     }
//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//       billing_details: {
//         name: name,
//       },
//     });

//     if (error) {
//       setPaymentError(error.message);
//       setPaymentSuccess(null);
//     } else {
//       setPaymentSuccess(paymentMethod.id);
//       setPaymentError(null);
//       // You can send the paymentMethod.id to your backend for processing
//     }
//   };
//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="row"> 
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Card Details</label>
//           <CardElement className="form-control" />
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={!stripe}>
//           Pay with Card
//         </button>
//         {paymentError && <div className="text-danger mt-2">{paymentError}</div>}
//         {paymentSuccess && <div className="text-success mt-2">Payment successful!</div>}
//       </form>
//     </div>
//   );
// };

// export default PaymentForm


import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if all fields are filled out
    if (!name  || !event.target.checkValidity()) {
      setPaymentError('Please fill in all fields.');
      setPaymentSuccess(false);
      return; // Stop the submission process
    }

    // If all fields are filled out, display a success message
    setPaymentSuccess(true);
    setPaymentError(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Card Details</label>
          <CardElement className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary" disabled={!stripe}>
          Pay with Card
        </button>
        {paymentError && <div className="text-danger mt-2">{paymentError}</div>}
        {paymentSuccess && <div className="text-success mt-2">Payment successful!</div>}
      </form>
    </div>
  );
};

export default PaymentForm;