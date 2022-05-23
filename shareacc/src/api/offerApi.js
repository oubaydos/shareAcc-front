import configData from "../config.json";

const API_URL = configData.SERVER_URL+"/offer";

const fetchData = async (url) =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export const fetchOffers = (param = "all" ) => {
    if(param === "all") return fetchData(API_URL);
    return fetchData(`${API_URL}/${param}`);
}