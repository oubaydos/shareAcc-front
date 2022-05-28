import configData from "../config.json";
import axios from "axios";
import { getCookie } from 'react-use-cookie';
import {plans} from "../res/allServices";


const FETCH_OFFERS_API_URL = configData.SERVER_URL+"/offer";
const SAVE_OFFER_API_URL = configData.SERVER_URL+"/offer";

const fetchOffers = (pageNumber,provider,setOffers) =>{
    axios.get(`${FETCH_OFFERS_API_URL}`,  {
        headers: {
            'Authorization': getCookie("Authorization"),
        },
        params : {
            "accountProvider" : provider.toUpperCase(),
            "pageNumber":pageNumber
        }
    }).then(
        (res) => {
            console.log(res.data)
            setOffers(res.data);
        },
        (err)=>{
            console.error("error in getting offers")
            return;
        }
    );
}
export function saveOffer(paymentId, serviceName, planChoice){
    axios.post(`${SAVE_OFFER_API_URL}`, {
        accountId:paymentId,
        maxSplitters:plans[serviceName].find(x => x.type === planChoice).maxUsers
    }, {
        headers: {
            'Authorization': getCookie("Authorization"),
        }
    }).then(
        (res) => {
            console.log(res.data)
        },
        (err)=>{
            console.error("error in getting offers")
            return;
        }
    );
}
export default fetchOffers;