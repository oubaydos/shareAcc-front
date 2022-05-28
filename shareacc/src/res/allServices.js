import {importAll} from "../utils/utils";

const images = importAll(require.context("../res/images/", false, /\.(png|jpe?g|svg)$/));

export default {
    products: [
        {
            id: 1,
            categoryName: "SVOD",
            name:"netflix",
            imgSrc: images["netflix.png"],
        },
        {
            id: 2,
            categoryName: "SVOD",
            name:"disneyplus",
            imgSrc: images["disneyplus.png"],
        },
        {
            id: 3,
            categoryName: "SVOD",
            name:"youtubepremium",
            imgSrc: images["youtubepremium.png"],
        },
        {
            id: 4,
            categoryName: "SVOD",
            name:"appletv",
            imgSrc: images["appletv.png"],
        },
        {
            id: 5,
            categoryName: "SVOD",
            name:"starzplay",
            imgSrc: images["starzplay.png"],
        },
        {
            id: 6,
            categoryName: "SVOD",
            name:"mubi",
            imgSrc: images["mubi.png"],
        }

    ],
}

let netflixPlans = [
    {
        id: 1,
        type: "Standard",
        description: "Watch Netflix on 2 screens at once. HD available",
        price: 13.49,
        maxUsers: 2,
    },
    {
        id: 2,
        type: "Premium",
        description: "Watch Netflix on 4 screens at once. HD and Ultra HD available",
        price: 17.99,
        maxUsers: 4,
    }
]
let disneyPlusPlans=[
    {
        id: 1,
        type: "Standard",
        description: "Watch Disney+ on 6 screens at once. HD available",
        price: 2.71,
        maxUsers: 6,
    }
]
let plans={
    netflix:netflixPlans,
    disneyplus:disneyPlusPlans
}
export {plans};