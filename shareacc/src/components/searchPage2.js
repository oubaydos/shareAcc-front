import * as React from "react";
import "../res/css/searchpage.css";
import Search from "./Search";
import Card from "./card";
import { Grid } from "@mui/material";
import services from "../res/ourServices"
import {goto} from "../utils/utils"



const searchPage = () => {

  const handleOnClick = (sub)=>{
    goto(`/marketplace/list/${sub.name}`)
  }

  return (
    <div>
      <Search />
      <Grid
        container
        spacing={{ xs: 5, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((sub, index) => (
          <Grid item xs={2} sm={4} md={3} key={index} onClick={()=>handleOnClick(sub)}>
            <Card subscription={sub} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default searchPage;
