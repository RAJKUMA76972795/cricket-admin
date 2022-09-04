import React from 'react'
import ButtonIcon from '../../component/ButtonIcon'
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import Breadcrumb from '../../component/Breadcrumb';
import { useNavigate } from 'react-router-dom';

// import { homePageRoutes } from '../../routes';

const useStyles = makeStyles(theme => ({
  breadCrumb:{
    margin:"10px"
},
  main: {
    width: "98%",
    margin: "auto",
    height: "calc(100vh - 40px)",
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

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
    <div  className={classes.breadCrumb}>
        <Breadcrumb/>
        </div>
    <div className={classes.main}>
      
      <div className={classes.pages}>
        <div className={classes.page}>
          <ButtonIcon icon={<PersonIcon className={classes.buttonIcon} onClick={() => { navigate("/masterdetails") }} />} />
          <Typography onClick={() => { navigate("/masterdetails") }} style={{ cursor: "pointer" }}>Master Details</Typography>
        </div>
        <div className={classes.page}>
          <ButtonIcon icon={<PersonIcon className={classes.buttonIcon} onClick={() => { navigate("/sportbetting") }} />} />
          <Typography onClick={() => { navigate("/sportbetting") }} style={{ cursor: "pointer" }}>Sports Betting</Typography>
        </div>
        <div className={classes.page}>
          <ButtonIcon icon={<PersonIcon className={classes.buttonIcon} onClick={() => { navigate("/ledger") }} />} />
          <Typography onClick={() => { navigate("/ledger") }} style={{ cursor: "pointer" }}>Ledger</Typography>
        </div>
        <div className={classes.page}>
          <ButtonIcon icon={<PersonIcon className={classes.buttonIcon} onClick={() => { navigate("/reports") }} />} />
          <Typography onClick={() => { navigate("/reports") }} style={{ cursor: "pointer" }}>Reports</Typography>
        </div>
        <div className={classes.page}>
          <ButtonIcon icon={<PersonIcon className={classes.buttonIcon} onClick={() => { navigate("/settings") }} />} />
          <Typography onClick={() => { navigate("/settings") }} style={{ cursor: "pointer" }}>Settings</Typography>
        </div>
        <div className={classes.page}>
          <ButtonIcon icon={<PersonIcon className={classes.buttonIcon} onClick={() => { navigate("/logout") }} />} />
          <Typography onClick={() => { navigate("/logout") }} style={{ cursor: "pointer" }}>Logout</Typography>
        </div>
      </div>
      <div className={classes.tableControl}>
        <TableContainer >


          <Table style={{ width: "100%", border: "1px solid black" }}>
            <TableHead >


              <TableRow>
                {["Match", "Bets", "X1", "X2", "X3"].map((head) => {
                  return <TableCell style={{ color: "black", fontWeight: 400, border: "1px solid black" }} key={head} align={head === "Action" ? "right" : "left"}>
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
    </div>
    </>
  )
}

export default Home