import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            		console.log("The payment was succeeded!", payment);
                    this.props.clearCart();
                    this.props.history.push('/');
        }
 
        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'sandbox'; 
        let currency = 'USD';
 
        const client = {
            sandbox: "Ab2ioODgw1mQ_UD3Fesd9qY0ve3sw7yMaAnERP5X2PEa19RpMGY0BMdAErnTxhlUawf3E8Ql6qBB_cvF",
            production: 'YOUR-PRODUCTION-APP-ID',
        }
      
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}
