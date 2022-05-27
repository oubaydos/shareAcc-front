import {importAll} from "../utils/utils";

const images = importAll(require.context("../res/images/", false, /\.(png|jpe?g|svg)$/));

export default {
    products: [
        {
            id: 1,
            categoryName: "SVOD",
            imgSrc: images["netflix.png"],
        },
        {
            id: 2,
            categoryName: "SVOD",
            imgSrc: images["disneyplus.png"],
        },
        {
            id: 3,
            categoryName: "SVOD",
            imgSrc: images["youtubepremium.png"],
        },
        {
            id: 4,
            categoryName: "SVOD",
            imgSrc: images["appletv.png"],
        },
        {
            id: 5,
            categoryName: "SVOD",
            imgSrc: images["starzplay.png"],
        },
        {
            id: 6,
            categoryName: "SVOD",
            imgSrc: images["mubi.png"],
        }

    ],
}