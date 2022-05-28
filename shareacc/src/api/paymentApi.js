import axios from "axios";
import {plans} from "../res/allServices";
import {getCookie} from "react-use-cookie";
import configData from "../config.json";

const CHECKOUT_API_URL = configData.SERVER_URL+"/payment";

let onToken = (token,amount,offerId) => {
    // alert("token" + token)
    // Object.keys(token).forEach(function(key) {
    //     console.log(key, token[key]);
    // });

    let data =  new FormData();
    data.append("currency","USD");
    data.append("description",offerId);
    data.append("amount",!isNaN(amount)?amount*100:10000);
    data.append("stripeEmail",token.email);
    data.append("stripeToken",token.id);
    axios.post(`${CHECKOUT_API_URL}`, data, {
        headers: {
            'Authorization': getCookie("Authorization")
        }
    }).then(
        (res) => {
            console.log(res.data)
        },
        (err)=>{
            console.error("error in payment")
            console.error(err)
        }
    );
}

export {onToken};