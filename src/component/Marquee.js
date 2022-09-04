import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import "./Marquee.css"

const useStyles = makeStyles(theme=>({
    marquee :{
        width: "calc(100vw - 250px)",
        height: "30px",
        backgroundColor: "black",
        color: "white",
        whiteSpace: "nowrap",
        overflow: "hidden",
        boxSizing: "border-box",
        border:"1px solid black",
        [theme.breakpoints.down("sm")]:{
            width:"calc(100vw)",
          },
    },
    marqueep :{
        display: "inline-block",
        paddingLeft: "100%",
        animation: `$marquee 15000ms  ${theme.transitions.easing.sharp} infinite`
        
    },
    "@keyframes marquee": {
        "0%" : {
             transform: "translate(0, 0)" ,
            },

        "100%": 
        { transform: "translate(-100%, 0)" ,}
    }
    
}))

const Marquee = () => {
    const classes=useStyles();
  return (
    <div className={classes.marquee}>
            <p className={classes.marqueep}>Welcome to Cricket Admin Page</p>
    </div>
  )
}

export default Marquee