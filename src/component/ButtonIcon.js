import { Button, makeStyles } from '@material-ui/core'
// import PersonIcon from '@material-ui/icons/Person';
import React from 'react';

const useStyles = makeStyles(theme=>({
    buttonBody:{
        width:"100px" ,
        height:"100px" ,
        backgroundColor:"blue" , 
        borderRadius:"50%" , 
        borderBottomLeftRadius:"0",
        '&:hover':{
            backgroundColor:"darkblue"
        }
    }
}))

const ButtonIcon = ({icon}) => {
    const classes = useStyles();
  return (
    <div>
        
        <Button className={classes.buttonBody}>
            
           
            {icon}
        </Button>
    </div>
  )
}

export default ButtonIcon