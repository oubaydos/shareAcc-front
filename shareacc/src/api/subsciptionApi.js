import axios from "axios";
import configData from "../config.json";
import {goto} from "../utils/utils";


//TODO
const endpoint = configData.SERVER_URL+"/user/offers";


const listUserOffers= (setSubscriptions,cookies)=>{
    const endpoint = configData.SERVER_URL+"/user/offers";

    axios.get(`${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorisation': cookies.get("Authorization"+configData.COOKIE_SUFFIX)
        }
    }).then(
        (res) => {
            console.log(res.data);
            
        }
        ,
        (err) => {
            //TODO : handle error with customized stuff
            alert("erreur lors de l'authentification, veuillez reentrer vos données, en cas de besoin contacter l'admin");
            console.error(err);
        }
    );
}


export default getSubscriptions;