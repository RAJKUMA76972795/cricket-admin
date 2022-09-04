import { AppBar, makeStyles, Toolbar, Typography, IconButton, Button, Select, MenuItem ,Table ,TableContainer , TableHead , TableBody , TableRow , TableCell } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import React, { useState } from 'react'
import PublicIcon from '@material-ui/icons/Public';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import Breadcrumb from '../../component/Breadcrumb';
import DatePicker from '../../component/DatePicker';



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



const CasinoHistory = () => {
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
    const [casino, setCasino] = useState("Teenpatti - Oneday");
    const [showCasinoTable, setShowCasinoTable] = useState(false);




    return (
        <>
        <div  className={classes.breadCrumb}>
        <Breadcrumb/>
        </div>
        <div className={classes.main}>
           
        
            {/* <AppBar> */}
            <div className={classes.heading}>
                {/* <Toolbar> */}
                <div className={classes.dropdown}>
                    <div className={classes.logo}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <PublicIcon style={{ color: "red" }} />
                        </IconButton>
                        <Typography variant='body1' style={{ color: "red" }}>Casino History</Typography>
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
                
                
                <div className={classes.tableControl}>
                <TableContainer >
      
                 
          <Table style={{width:"100%"}}>
            <TableHead >
            <TableRow>
            <TableCell align="center"  style={{color:"black",fontWeight:700, border:"1px solid black"}}>
              Type
            </TableCell>
            <TableCell align="center"  style={{color:"black",fontWeight:700 , border:"1px solid black"}}>
            <Select variant='outlined' style={{ width: 150, height: 40, fontSize:"15px" }} value={casino} onChange={e => setCasino(e.target.value)} >
                        <MenuItem value={"Teenpatti-Oneday"}>Teenpatti-Oneday</MenuItem>
                        <MenuItem value={"Teenpatti-T20"}>Teenpatti-T20</MenuItem>
                        <MenuItem value={"Poker-T20"}>Poker-T20</MenuItem>
                        
                    </Select>
            </TableCell>
            <TableCell align="center"  style={{color:"black",fontWeight:700 ,border:"1px solid black"}}>
              Date
            </TableCell>
            <TableCell align="center"  style={{color:"black",fontWeight:700 , border:"1px solid black" ,width:"200px"}}>
              <DatePicker/>
            </TableCell>
            <TableCell align="center"  style={{color:"black",fontWeight:700 , border:"1px solid black"}}>
              <Button variant="contained" color='primary' onClick={()=>setShowCasinoTable(true)}>Show</Button>
            </TableCell>
          </TableRow>
          </TableHead>
          </Table>
          </TableContainer>
          </div>
          {showCasinoTable?<div className={classes.tableControl}>
                <TableContainer>
          <Table>
          <TableHead>
              <TableRow>
                {["Date" , "Math Name" , "Market Id", "Winner" , "Diamond Winner"].map((head)=>{
                  return <TableCell style={{color:"black",fontWeight:400  ,border:"1px solid black"}} key={head} align="center">
                    {head}
                  </TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
                
            </TableBody>
          </Table>          
       
    </TableContainer>
    </div>:""}

                {/* </AppBar> */}
            </div>
        </div>
        </>
    )
}

export default CasinoHistory