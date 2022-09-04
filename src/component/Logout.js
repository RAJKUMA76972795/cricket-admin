import { IconButton, makeStyles, Typography } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import React from 'react'

const useStyles = makeStyles({
    logout:
    {width:"200px",
    position:"absolute",
    top:"50px",
    right:"10px",
    display:"flex",
    justifyContent:"flex-start",
    flexDirection:"column",
    borderRadius:"5px",
    backgroundColor:"white",
    padding:"10px",
    zIndex:"99"
},
logoutButton:{
    display:"flex",
    alignItems:"center",
    cursor:"pointer"
    // justifyContent:"flex-start"
}
})

const Logout = (props) => {
    const classes = useStyles();
  return (
    <div className={classes.logout}>
        <Typography style={{marginLeft:"15px"}}>Welcome A9 demo3</Typography>
        <div className={classes.logoutButton} onClick={()=>{props.setIsLogoutButtonVisible(false)}}>
            <IconButton><ExitToAppIcon/></IconButton>
            <Typography>Logout</Typography>
        </div>
    </div>
  )
}

export default Logout