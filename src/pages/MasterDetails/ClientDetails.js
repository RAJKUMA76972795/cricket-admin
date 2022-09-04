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



const ClientDetails = () => {
    const classes = useStyles();
    const [recordNo, setRecordNo] = useState(100);

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
           
        
            {/* <AppBar> */}
            <div className={classes.heading}>
                {/* <Toolbar> */}
                <div className={classes.dropdown}>
                    <div className={classes.logo}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <PublicIcon style={{ color: "red" }} />
                        </IconButton>
                        <Typography variant='body1' style={{ color: "red" }}>Client Details</Typography>
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
                <div className={classes.buttons}>
                    <Link to="/masterdetails/clientdetailsaddnew"><Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<AddIcon />}
                        style={{ backgroundColor: "orange" }}
                    >
                        Create
                    </Button></Link>
                    <Link to="/masterdetails/clientlimit"><Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        style={{ backgroundColor: "blue" }}
                    >
                        Update Limit
                    </Button></Link>
                </div>
                <div className={classes.fetchData}>
                    <div className={classes.record}>
                    <Select variant='outlined' style={{ width: 80, height: 40, marginLeft: 10,fontSize:"15px" }} value={recordNo} onChange={e => setRecordNo(e.target.value)} >
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={500}>500</MenuItem>
                        <MenuItem value={1000}>1000</MenuItem>
                        <MenuItem value={"ALL"} >ALL</MenuItem>
                    </Select>
                    <Typography variant='body1' style={{marginLeft:"5px",fontSize:"15px"}}>records per page</Typography>
                    </div>
                </div>
                <div className={classes.tableControl}>
                <TableContainer >
      
                 
          <Table style={{width:"100%"}}>
            <TableHead >
            <TableRow>
            <TableCell align="center" colSpan={6} style={{color:"black",fontWeight:700, border:"1px solid black"}}>
              Personal Details
            </TableCell>
            <TableCell align="center" colSpan={5} style={{color:"black",fontWeight:700 , border:"1px solid black"}}>
              Client Details
            </TableCell>
            <TableCell align="center" colSpan={4} style={{color:"black",fontWeight:700 ,border:"1px solid black"}}>
              
            </TableCell>
          </TableRow>
          
              <TableRow>
                {["","SNo","Code","Name","Agent","Contact","PWD","Match","Session","Limit","Used Limit","Charge","Status","Edit","Delete"].map((head)=>{
                  return <TableCell style={{color:"black",fontWeight:400  ,border:"1px solid black"}} key={head} align={head==="Coin"?"":"right"}>
                    {head}
                  </TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
                
            </TableBody>
          </Table>          
       
    </TableContainer>
    </div>

                {/* </AppBar> */}
            </div>
        </div>
        </>
    )
}

export default ClientDetails