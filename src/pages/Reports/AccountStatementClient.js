import { AppBar, makeStyles, Toolbar, Typography, IconButton, Button, Select, MenuItem ,Table ,TableContainer , TableHead , TableBody , TableRow , TableCell } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React, { useState } from 'react'
import PublicIcon from '@material-ui/icons/Public';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import Breadcrumb from '../../component/Breadcrumb';



const useStyles = makeStyles((theme) => ({
    breadCrumb:{
        margin:"10px"
    },
    main: {
        width: "98%",
        margin: "auto",
        height: "calc(100vh - 100px)",
        // background:"blue",
        // border: "1px solid grey",
        marginTop: "10px",
        boxShadow: "0 1px 20px 0 rgba(165, 154, 154, 0.3)"
    },
    dropdown:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:"10px"
    },
    logo: {
        flexGrow: 1
    },
    heading: {
        backgroundColor: "rgb(250,250,250)",
        // marginTop:"20px"

    },
    logo: {
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        borderRight: "1px solid black"
    },
    action: {
        marginLeft: "10px"
    },
    button: {
        margin: theme.spacing(1),
    },
    record:{
        display: "flex",
        alignItems: "center",
    },
    tableControl:{
        width:"calc(100vw - 290px)",
        overflow:"auto",
        margin:"10px",
        [theme.breakpoints.down("sm")]:{
            width:"calc(100vw - 30px)",
          },
    }
}));



const AccountStatementClient = () => {
    const classes = useStyles();
    

    const handleCollapse = () => {
        let collapse = document.getElementById("collapse");

        if (collapse.style.display === "none") {
            collapse.style.display = "block";
        }
        else {
            collapse.style.display = "none";
        }
    }




    return (
        <>
        <div  className={classes.breadCrumb}>
        <Breadcrumb/>
        </div>
        <div className={classes.main}>
           
        
            
            <div className={classes.heading}>
               
                <div className={classes.dropdown}>
                    <div className={classes.logo}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <PublicIcon style={{ color: "red" }} />
                        </IconButton>
                        <Typography variant='body1' style={{ color: "red" }}>Account Statement Client Report</Typography>
                    </div>
                    <div className={classes.action}>

                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleCollapse}>
                            <ArrowDropDownIcon />
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <ClearIcon />
                        </IconButton>
                    </div>
                    </div>
                
            </div>
            <div id="collapse">
                

                
            </div>
        </div>
        </>
    )
}

export default AccountStatementClient