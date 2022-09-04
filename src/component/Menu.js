import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Link , Outlet } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: "blue",
    color: "white",
    height:"100vh",
    overflowY:"auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw"
    },
  },
  nested: {
    paddingLeft: theme.spacing(6),
  },
  icon: {
    color: "white"
  }
}));

export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = useState({ openMaster: false, openSport: false, openBlock: false, openLedger: false, openCash: false, openProfit: false, openReport: false, openSetting: false });

  const handleClickMaster = () => {

    // for (const item in open) {
      
    //   if(item!=="openMaster"){
    //     console.log(item)
    //   setOpen({ ...open, [item]:"false" });
    // }
    // console.log(open)
    // }

    setOpen({ ...open, openMaster: !open.openMaster });

  };
  const handleClickSport = () => {
    setOpen({ ...open, openSport: !open.openSport });
  };
  const handleClickBlock = () => {
    setOpen({ ...open, openBlock: !open.openBlock });
  };
  const handleClickLedger = () => {
    setOpen({ ...open, openLedger: !open.openLedger });
  };
  const handleClickCash = () => {
    setOpen({ ...open, openCash: !open.openCash });
  };
  const handleClickProfit = () => {
    setOpen({ ...open, openProfit: !open.openProfit });
  };
  const handleClickReport = () => {
    setOpen({ ...open, openReport: !open.openReport });
  };
  const handleClickLSetting = () => {
    setOpen({ ...open, openSetting: !open.openSetting });
  };
  

  return (
    <>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    
      className={classes.root}
    >
      <Link to="/"><ListItem button>
        <ListItemIcon className={classes.icon}>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        
      </ListItem></Link>


      <ListItem button onClick={handleClickMaster}>
        <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Master Details" />
        {open.openMaster ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.openMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/masterdetails/clientdetails"><ListItem button className={classes.nested}>
          <ListItemText primary="Client" />
          </ListItem></Link>
        </List>
      </Collapse>
      


      <ListItem button onClick={handleClickSport}>
        <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Sport's Betting" />
        {open.openSport ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.openSport} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/sportbetting/sportdetails"><ListItem button className={classes.nested}>
            <ListItemText primary="Inplay Game" />
          </ListItem></Link>
          <Link to="/sportbetting/completegame"><ListItem button className={classes.nested}>
            <ListItemText primary="Complete Games" />
          </ListItem></Link>
        </List>
      </Collapse>


      <ListItem button onClick={handleClickBlock}>
        <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Block Market" />
        {open.openBlock ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.openBlock} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/blockmarket"><ListItem button className={classes.nested}>
            <ListItemText primary="Sport's Block" />
          </ListItem></Link>
        </List>
      </Collapse>


      <ListItem button onClick={handleClickLedger}>
        <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Ledger" />
        {open.openLedger ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.openLedger} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/ledger/myledger"><ListItem button className={classes.nested}>
            <ListItemText primary="My Ledger" />
          </ListItem></Link>
          <Link to="/ledger/clientplusminus"><ListItem button className={classes.nested}>
            <ListItemText primary="Client Plus/Minus" />
          </ListItem></Link>
          <Link to="/ledger/allclientledger"><ListItem button className={classes.nested}>
            <ListItemText primary="All Client Ledger" />
          </ListItem></Link>
        </List>
      </Collapse>

      <ListItem button onClick={handleClickCash}>
        <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Cash Transaction" />
        {open.openCash ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.openCash} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/clientledger"><ListItem button className={classes.nested}>
            <ListItemText primary="Debit/Credit Entry (C)" />
          </ListItem></Link>
        </List>
      </Collapse>

      <ListItem button onClick={handleClickProfit}>
        <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Profit Loss Report" />
        {open.openProfit ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.openProfit} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/profitlossreport"><ListItem button className={classes.nested}>
            <ListItemText primary="Profit Loss Report" />
          </ListItem></Link>
        </List>
      </Collapse>

      <ListItem button onClick={handleClickReport}>
        <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        {open.openReport ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.openReport} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/reports/accountstatement"><ListItem button className={classes.nested}>
            <ListItemText primary="Limit Update Report" />
          </ListItem></Link>
          <Link to="/reports/commissionreport"><ListItem button className={classes.nested}>
            <ListItemText primary="Client Commission Report" />
          </ListItem></Link>
          <Link to="/reports/accountstatementclient"><ListItem button className={classes.nested}>
            <ListItemText primary="Account Statement Client Report" />
          </ListItem></Link>
          <Link to="/reports/deletedbets"><ListItem button className={classes.nested}>
            <ListItemText primary="Deleted Bets Report" />
          </ListItem></Link>
          <Link to="/reports/loginreport"><ListItem button className={classes.nested}>
            <ListItemText primary="Login Report" />
          </ListItem></Link>
        </List>
      </Collapse>

      <ListItem button onClick={handleClickLSetting}>
        <ListItemIcon className={classes.icon}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
        {open.openSetting ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open.openSetting} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/settings/changepassword"><ListItem button className={classes.nested}>
            <ListItemText primary="Change Password" />
          </ListItem></Link>
          <Link to="/settings/casinohistory"><ListItem button className={classes.nested}>
            <ListItemText primary="Casino Result History" />
          </ListItem></Link>
        </List>
      </Collapse>
    </List>
    
    </>
  );
}
