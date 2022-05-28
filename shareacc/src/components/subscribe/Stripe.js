import React, {useMemo} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import "../../res/css/shareSubscription.css";
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StripeCheckout from 'react-stripe-checkout';
import {onToken} from "../../api/paymentApi";
import {useParams} from "react-router-dom";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const useOptions = () => {
        const options = useMemo(
            () => ({
                style: {
                    base: {
                        margin:"0 auto 0 auto",
                        fontSize:"25px",
                        color: "#424770",
                        letterSpacing: "0.025em",
                        fontFamily: "Source Code Pro, monospace",
                        "::placeholder": {
                            color: "#aab7c4"
                        }
                    },
                    invalid: {
                        color: "#9e2146"
                    }
                }
            }),
            []
        );

        return options;
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };
    const options = useOptions();
    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={options} />
            <button
                type={"submit"}
                disabled={!stripe || !elements}
                data-modal="suggest-service"
                className="btn-greenn inline-block btn-suggest modal-trigger"
            >

                <div  style={{color:"#000000"}}>
                    <CreditCardIcon style={{marginBottom:"-7px"}}/> Purchase Now
                </div>
            </button>


        </form>
    );
};

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

export default function App(props) {
    let {offerId}=useParams();
    return (
            <StripeCheckout
                token={(token)=>onToken(token,props.amount,offerId)}
                stripeKey="pk_test_51KwpGwA1aNNHUg8qSbr6XZo4dTWuHtixENN5DqdyuryGDeOkZHq0945EgQhEP0zNYgRFIidKTSnZxurTKrtJENK600FhVAgduE"
                amount={props.amount}
                currency="USD"
                zipCode={false}
            >
                <button
                    data-modal="suggest-service"
                    className="btn-greenn inline-block btn-suggest modal-trigger"
                >

                    <div  style={{color:"#000000"}}>
                        <CreditCardIcon style={{marginBottom:"-7px"}}/> Purchase Now
                    </div>
                </button>
            </StripeCheckout>
    );
}

