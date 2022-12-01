import React from "react";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
const Header = () =>{
    const classes = useStyles();
    return(
        <div>
           <AppBar position="static"/>
           <Toolbar  className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor 
                </Typography>
                <Box typeof="flex">
                <Typography variant="h6" className={classes.toolbar}>
                </Typography>
                {/* <Autocomplete> */}
                    <div className={classes.search} >
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search ... " className={{root: classes.inputRoot, input: classes.inputInput}}/>
                    </div>
                {/* </Autocomplete> */}
            </Box>
            </Toolbar> 
        </div>
    );
}
export default Header;