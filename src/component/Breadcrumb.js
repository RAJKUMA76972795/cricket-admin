import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import {useLocation , useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems:"center",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
    color:"red"
  },
}));



const Breadcrumb=()=> {
  const classes = useStyles();
  const location = useLocation();
  const {pathname}= location;
  const pathnames = pathname.split("/").filter(x=>x);
  const navigate = useNavigate();
  

  return (
    <Breadcrumbs separator="››" aria-label="breadcrumb">
      {pathnames.length===0?
      <Link color="primary" variant="h6" className={classes.link} style={{ textDecoration:"none"}}>
      <HomeIcon className={classes.icon} />
      Home
    </Link>
      :<Link color="inherit" className={classes.link} onClick={()=>navigate("/")} style={{cursor:"pointer" , textDecoration:"none"}}>
        <HomeIcon className={classes.icon} />
        Home
      </Link>}
      {pathnames.map((name , index)=>{
        const isLastItem = index===(pathnames.length-1);
        return         isLastItem?
        <Typography key={name} variant="h6" color='primary'>{name.charAt(0).toUpperCase() + name.substring(1)}</Typography>
        :<Link color="inherit" className={classes.link} onClick={()=>navigate(`/${pathnames.slice(0,index+1).join("/")}`)} key={name} style={{cursor:"pointer", textDecoration:"none"}}>
        {name.charAt(0).toUpperCase() + name.substring(1)}
      </Link>
      })}
      
    </Breadcrumbs>
  );
}

export default Breadcrumb;

