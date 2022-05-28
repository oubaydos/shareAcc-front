import * as React from "react";
import {Grid, Typography, Button, Container} from "@mui/material";
import {experimentalStyled as styled} from "@mui/material/styles";
import ReactRoundedImage from "react-rounded-image";
import avatarImage from "../../res/images/avatar.png";
import "../../res/css/offerCard.css"
const Item = styled(Container)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,

    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 80,
}));
styled(Button)(({theme}) => ({
    color: theme.palette.primary,
    backgroundColor: theme.palette.primary,
    "&:hover": {
        backgroundColor: theme.palette.primary,
    },
}));
const cardStyle = {
    margin: 5,
    width: "fit-content",
    borderRadius: "20px"
}

const OfferCard = (props) => {
    const offer = props.offer;
    return (
        <Grid
            container
            spacing={{md: 2}}
            columns={{md: 14}}

            style={{...cardStyle, margin: "0 auto 0 auto"}}

        >
            <Grid item md={4
            }>
                <Item>
                    <ReactRoundedImage
                        image={offer.image || avatarImage}
                        roundedColor="#321124"
                        imageWidth="70"
                        imageHeight="70"
                        roundedSize="5"
                        hoverColor="#DD1144"
                    />
                </Item>
            </Grid>
            <Grid item md={10}>
                <Item>
                    <Typography variant="h6" fontWeight="bold" align="center">
                        {offer.offerer}
                    </Typography>
                    <Typography variant="h6" align="left">
                        is sharing <strong>{offer.provider} {offer.subsciptionType}</strong>
                    </Typography>
                </Item>
            </Grid>

        </Grid>
    );
};

export default OfferCard;
