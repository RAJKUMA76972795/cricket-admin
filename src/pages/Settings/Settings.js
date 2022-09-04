import React from 'react'
import ButtonIcon from '../../component/ButtonIcon'
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles, Typography,  } from '@material-ui/core';
import Breadcrumb from '../../component/Breadcrumb';
import { useNavigate } from 'react-router-dom';

// import { homePageRoutes } from '../../routes';

const useStyles = makeStyles(theme => ({
  main: {
    width: "98%",
    margin: "auto",
    height: "100vh",
    marginTop: "10px"
  },
  buttonIcon: {
    fontSize: "60px",
    transitionDuration: "0.8s",
    transitionProperty: "transform",
    '&:hover': {
      backgroundColor: "darkblue",
      transform: "rotate(360deg)",
      webkitTransform: "rotate(360deg)",

    }
  },
  pages: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "20px",
    flexWrap: "wrap"
  },
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px"
  }
}))

const Settings = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.main}>
      <Breadcrumb />
      <div className={classes.pages}>
        <div className={classes.page}>
          <ButtonIcon icon={<PersonIcon className={classes.buttonIcon} onClick={() => { navigate("/settings/casinohistory") }} />} />
          <Typography onClick={() => { navigate("/settings/casinohistory") }} style={{ cursor: "pointer" }}>Casino History</Typography>
        </div>
        <div className={classes.page}>
          <ButtonIcon icon={<PersonIcon className={classes.buttonIcon} onClick={() => { navigate("/settings/changepassword") }} />} />
          <Typography onClick={() => { navigate("/settings/changepassword") }} style={{ cursor: "pointer" }}>Change Password</Typography>
        </div>
        <div className={classes.page}>
          <ButtonIcon icon={<PersonIcon className={classes.buttonIcon} onClick={() => { navigate("/") }} />} />
          <Typography onClick={() => { navigate("/") }} style={{ cursor: "pointer" }}>Back</Typography>
        </div>
        
      </div>
      
    </div>
  )
}

export default Settings