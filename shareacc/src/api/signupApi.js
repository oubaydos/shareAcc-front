import axios from "axios";
import configData from "../config.json";
import {goto} from "../utils/utils";

const endpoint = configData.SERVER_URL+"/user/signup";

export default function signup(data) {
    console.log({
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
    });

    //TODO
    const dataToSend = {
        firstName:data.get("firstName"),
        lastName:data.get("lastName"),
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
    }

    axios.post(`${endpoint}`, dataToSend, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(
        (res) => {
            // TODO : setCookies -- email verification ?
            // let resData = extractRoleAndJWT(res.data);
            // localStorage.setItem("currentUser", resData[1]);
            // if (resData[0] === "ROLE_COACH") {
            //     localStorage.setItem("isMentee", "false");
            // } else if (resData[0] === "ROLE_CLIENT") {
            //     localStorage.setItem("isMentee", "true");
            // } else if (resData[0] === "ROLE_SUPERUSER") {
            //     localStorage.setItem("isAdmin", "true");
            // }
            console.log(res.data);
            goto("/");
        }
        ,
        (err) => {
            //TODO : handle error with customized stuff
            alert("erreur lors de l'authentification, veuillez reentrer vos données, en cas de besoin contacter l'admin");
            console.error(err);
        }
    );

}