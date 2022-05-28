import configData from "../config.json";
import axios from "axios";
import { getCookie } from 'react-use-cookie';
import {goto} from "../utils/utils";


const CREATE_ACCOUNT_API_URL = configData.SERVER_URL+"/account";

export function createOfferAccount(id, type,username,password){
    const dataToSend = {
        provider:id.toUpperCase(),
        subscriptionType:type.toUpperCase(),
        credentials:{
            username:username,
            password:password
        }
    }
    let returnId;
    axios.post(`${CREATE_ACCOUNT_API_URL}`,dataToSend,  {
        headers: {
            'Authorization': getCookie("Authorization"),
        }
    }).then(
        (res) => {
            alert("hh")

            console.log(res)
            returnId = res.data;
            // goto("/");
        },
        (err)=>{
            console.error("error in creating offer accounts")
            console.log(err)
            alert("error")
            return;
        }
    );
    return returnId;
}
export default createOfferAccount;