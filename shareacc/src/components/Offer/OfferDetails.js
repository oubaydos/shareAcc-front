
import "../../res/css/shareSubscription.css";
import {useState} from "react";
import React from "react"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import KeyIcon from '@mui/icons-material/Key';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useParams} from "react-router-dom";
import createOfferAccount from "../../api/offerAccountApi";
import {saveOffer} from "../../api/offerApi";

function Copyright(props) {
    return ( <Typography variant = "body2"
                         color = "text.secondary"
                         align = "center" {...props } > { 'Copyright © ' } <Link color = "inherit"
                                                                                 href = "/" >
            UpCoach</Link>{' '} { new Date().getFullYear() } { '.' } </Typography >
    );
}

const theme = createTheme({
    palette: {
        success: {
            main: '#006D77',
        }
    },
});

export default function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let { id,planChoice } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        let returnId = createOfferAccount(id, planChoice,email,password);
        saveOffer(returnId, id, planChoice)

    };

    const storeEmail = (event) => {
        setEmail(event.target.value)
    }
    const storePass = (event) => {
        setPassword(event.target.value)
    }

    return ( <ThemeProvider theme = { theme } >
            <Container component = "main"
                       maxWidth = "xs" >
                <CssBaseline />
                <Box sx = {
                    {
                        marginTop: 12,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }
                } >
                    <Avatar sx = {
                        { m: 1, bgcolor: '#006D77' }
                    } >
                        <KeyIcon />
                    </Avatar> <Typography component = "h1"
                                          variant = "h5"
                                          color = "#006D77" >
                    add Credentials
                </Typography>
                    <Box component = "form"
                         noValidate sx = {
                        { mt: 1 }
                    } >
                        <TextField margin = "normal"
                                   onChange={storeEmail}
                                   type = "text"
                                   value={email}
                                   required fullWidth id = "email"
                                   label = "email"
                                   color = "success"
                                   autoFocus />
                        <TextField margin = "normal"
                                   type = "password"
                                   onChange={storePass}
                                   value={password}
                                   required fullWidth id = "password"
                                   label = "password "
                                   color = "success"
                                    />

                        <Button type = "submit"
                                href = "/EmailSent"
                                fullWidth variant = "contained"
                                onClick= { handleSubmit }
                                color = "success"
                                sx = {
                                    { mt: 3, mb: 2 }
                                } >
                            ADD CREDENTIALS </Button>
                    </Box > </Box> <Copyright sx = {
                { mt: 8, mb: 4 }
            }
            /> </Container > </ThemeProvider>
    );
}