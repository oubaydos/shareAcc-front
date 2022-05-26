import configData from "../config.json";
import axios from "axios";
import { getCookie } from 'react-use-cookie';


const API_URL = configData.SERVER_URL+"/offer";

const fetchOffers = (pageNumber,provider,setOffers) =>{
    axios.get(`${API_URL}`,  {
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
export default fetchOffers;