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
        // height: "calc(100vh - 100px)",
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
    form:{
      margin:"10px",
      marginTop:"30px",
      padding:"10px",
      paddingLeft:"30px",
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-start",
      justifyContent:"center",
      width:"calc(100% - 20px)",
      border:"2px solid gray"
    },
    formField:{
      width:"47%",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      marginBottom:"20px",
      [theme.breakpoints.down("sm")]:{
        width:"100%",
      },
    },
    formBigField:{
      width:"100%",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      // marginBottom:"20px",
      [theme.breakpoints.down("sm")]:{
        flexDirection:"column",
      },
     
    },
    formLabel:{
      color:"gray", 
      marginRight:"40px",
      width:"40%"
    },
    formInput:{
      outline:"none",
      border:"1px solid gray",
      width:"50%",
      height:"30px",
      borderRadius:"5px",
      padding:"5px"
    },
    line:{
      borderBottom:"1px solid gray"
    },
    buttons:{
      margin:"20px",
      display:"flex",
      justifyContent:"flex-end",
      alignItems:"center"
    }
    
    
}));



const ClientDetailsAddNew = () => {
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
                        <Typography variant='body1' style={{ color: "red" }}>Create New Client</Typography>
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
                {/* </Toolbar> */}
            </div>
            <div id="collapse">
                
                <form action="/" method="post" className={classes.form}>
                  <div className={classes.formField}>
                    <label htmlFor="oldPassword" className={classes.formLabel}>Code</label>
                    <input type="text" id="oldPassword" className={classes.formInput}/>
                  </div>
                  <div className={classes.formField}>
                    <label htmlFor="newPassword" className={classes.formLabel}>Name</label>
                    <input type="text" id="newPassword" className={classes.formInput}/>
                  </div>
                  <div className={classes.formField}>
                    <label htmlFor="confirmPassword" className={classes.formLabel}>Mobile Charge</label>
                    <input type="text" id="confirmPassword" className={classes.formInput}/>
                  </div>
                  <div className={classes.formBigField}>
                  <div className={classes.formField}>
                    <label htmlFor="newPassword" className={classes.formLabel}>Current Limit</label>
                    <input type="text" id="newPassword" className={classes.formInput}/>
                  </div>
                  <div className={classes.formField}>
                    <label htmlFor="newPassword" className={classes.formLabel}>My Limit</label>
                    <input type="text" id="newPassword" className={classes.formInput}/>
                  </div>
                  </div>
                  <div className={classes.formField}>
                    <label htmlFor="confirmPassword" className={classes.formLabel}>Contact No.</label>
                    <input type="text" id="confirmPassword" className={classes.formInput}/>
                  </div>
                  <div className={classes.formField}>
                    <label htmlFor="confirmPassword" className={classes.formLabel}>Password</label>
                    <input type="text" id="confirmPassword" className={classes.formInput}/>
                  </div>
                  <div className={classes.formBigField}>
                  <div className={classes.formField}>
                    <label htmlFor="newPassword" className={classes.formLabel}>Agent Share</label>
                    <input type="text" id="newPassword" className={classes.formInput}/>
                  </div>
                  <div className={classes.formField}>
                    <label htmlFor="newPassword" className={classes.formLabel}>My Share</label>
                    <input type="text" id="newPassword" className={classes.formInput}/>
                  </div>
                  </div>
                </form>

                <div className={classes.line}></div>

                <div className={classes.buttons}>
                  <Button variant='contained' color="primary" style={{marginRight:"10px"}}>Save</Button>
                  <Button variant='contained' color="secondary">Cancel</Button>
                </div>
                
                {/* </AppBar> */}
            </div>
        </div>
        </>
    )
}

export default ClientDetailsAddNew