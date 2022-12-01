import React from "react";
import {CssBaseline, Grid} from '@material-ui/core';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";


export default function App(){
  
        return(
            <div>
                <CssBaseline />
                <Header/>
                <Grid container sapcing ={3} style={{width : '100%'}} >
                    <Grid item xs={12} md={4}>
                        <List />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Map />
                    </Grid>
                    </Grid>

            </div>
        )
}