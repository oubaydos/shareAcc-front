import axios from "axios";
import configData from "../config.json";
import {goto} from "../utils/utils";


export default function login(data,setCookie) {

    const endpoint = configData.SERVER_URL+"/login";


    // eslint-disable-next-line no-console
    console.log({
        username: data.get('username'),
        password: data.get('password'),
    });
    const dataToSend = {
        username: data.get('username'),
        password: data.get('password')
    }

    axios.post(`${endpoint}`, dataToSend, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(
        (res) => {
            setCookie("Authorization"+configData.COOKIE_SUFFIX,res.headers["authorization"])
            goto("/")
        }
        ,
        (err) => {
            //TODO : handle error with customized stuff
            alert("erreur lors de l'authentification, veuillez reentrer vos données, en cas de besoin contacter l'admin");
            console.error(err);
        }
    );

}

export function getAuthenticatedUser(authCookie,setCurrentUser){

    const endpoint = configData.SERVER_URL+"/user";

    if(authCookie===undefined) {
        setCurrentUser({
            role:"GUEST",
            name :""
        })
        return;
    }

    axios.get(`${endpoint}`,  {
        headers: {
            'Authorization': authCookie,
        }
    }).then(
        (res) => {
            setCurrentUser({
                username : res.data["username"],
                role : res.data["role"]
            })
        },
        (err)=>{
            setCurrentUser({
                role:"GUEST",
                name :""
            })
            return;
        }
    );
}



