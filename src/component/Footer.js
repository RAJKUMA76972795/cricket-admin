import { IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(theme=>({
    footer:{
        width:"calc(100vw - 17px)",
        height:"50px",
        "backgroundColor":"blue" ,
        borderRadius:"0",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        position:"absolute",
        [theme.breakpoints.down("sm")]:{
            width:"calc(100vw)",
          },
    },
    scrollToTop:{
        position:"absolute",
        bottom:"2px",
        right:"5px",
        color:"white",
        [theme.breakpoints.down("sm")]:{
            right:"-2px",
          },
    }
}))

const Footer = () => {
    const classes = useStyles();
  return (
    <>
    <div>
        <Paper elevation={0} className={classes.footer}>
            <Typography style={{color:"white"}}>2013 &copy; Admin Lab Dashboard</Typography>
            <IconButton className={classes.scrollToTop} onClick={()=>{window.scrollTo(0,0);}}><ArrowUpwardIcon/></IconButton>
        </Paper>
    </div>
    
    </>
  )
}

export default Footer