import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../assets/logo.png";
import default_user from "../assets/default_user.png"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ReorderIcon from '@material-ui/icons/Reorder';
import Modal from '@material-ui/core/Modal';
import Logout from './Logout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    flexGrow:1
  },
  account:{
    display:"flex",
    alignItems:"center"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [isLogoutButtonVisible, setIsLogoutButtonVisible] = useState(false);
  


  return (
    
    <div className={classes.root}>
      {isLogoutButtonVisible?<Logout setIsLogoutButtonVisible={setIsLogoutButtonVisible}/>:""}
      <AppBar position="static">
        <Toolbar>
        <div className={classes.logo}>
          {/* <img src={logo} alt="" style={{height:50}}/> */}
          </div> 
          <div className={classes.account}> 
          <img src={default_user} alt="" style={{height:30}}/>
          {/* <Typography variant='body1'>A9 demo3</Typography> */}
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"  onClick={()=>{setIsLogoutButtonVisible(!isLogoutButtonVisible)}}>
            <ArrowDropDownIcon />
          </IconButton>
          {props.ismenuNavigatorVisible?<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={()=>{props.setIsMenuVisible(!props.isMenuVisible)}}>
            <ReorderIcon  />
          </IconButton>:""}
          </div>
        </Toolbar>
        
      </AppBar>
      {/* <Modal
        // open={open}
        // onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        body
      </Modal> */}
      
    </div>
  );
}
